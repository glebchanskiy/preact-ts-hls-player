import Hls from 'hls.js';

export class HlsAudioController {
  private audio: HTMLAudioElement | null = null;
  private hls: Hls | null = null;

  constructor(private hlsUrl: string) {
    this.audio = new Audio();
    this.initializeHls();
  }

  private initializeHls() {
    if (!this.audio) return;

    if (Hls.isSupported()) {
      this.hls = new Hls();
      this.hls.loadSource(this.hlsUrl);
      this.hls.attachMedia(this.audio);

      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("HLS manifest loaded");
      });
    } else if (this.audio.canPlayType('application/vnd.apple.mpegurl')) {
      // For hls-native browsers (as Safari)
      this.audio.src = this.hlsUrl;
    }
  }

  play() {
    this.audio?.play();
  }

  pause() {
    this.audio?.pause();
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  destroy() {
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
