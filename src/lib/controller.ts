import Hls, { Events } from 'hls.js';

export type HlsAudioControllerConfig = {
  audioTag?: HTMLAudioElement
}

type HlsEvent = keyof typeof Events;

export class HlsAudioController {
  public audio: HTMLAudioElement;
  private hls: Hls | null = null;
  private hlsNative: boolean = false

  constructor(config?: HlsAudioControllerConfig) {
    this.audio = config?.audioTag ?? new Audio();
    this.initializeHls();
  }

  private initializeHls() {
    if (!this.audio) return;

    if (Hls.isSupported()) {
      this.hls = new Hls();
      this.hls.attachMedia(this.audio);
    } else if (this.audio.canPlayType('application/vnd.apple.mpegurl')) {
      this.hlsNative = true // For HLS-native browsers (e.g., Safari)
    }
  }

  load(url: string) {
    if (this.hlsNative) this.audio.src = url;
    else this.hls?.loadSource(url)
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  togglePlayPause() {
    this.isPlaying() ? this.pause() : this.play();
  }

  isPlaying() {
    return !this.audio.paused
  }


  stop() {
    this.audio.pause();
  }

  getDuration() {
    return this.audio.duration || 0;
  }

  seek(time: number) {
    return this.audio.currentTime = time
  }

  getPosition() {
    return this.audio.currentTime
  }

  getVolume() {
    return this.audio.volume
  }

  setVolume(volume: number) {
    if (volume >= 0 && volume <= 1)
      this.audio.volume = volume;
    else
      console.warn('Volume value must be between 0.0 and 1.0');
  }

  on(event: HlsEvent): { do: (callback: () => void) => void } {
    const parent = this
    return {
      do(callback: () => void) {
        parent.hls?.on(Events[event], callback);
      }
    }
  }

  public destroy(): void {
    this.hls?.destroy();
    this.hls = null;
    this.audio.pause();
    this.audio = null as unknown as HTMLAudioElement; // TypeScript requires an explicit cast to null
  }
}



