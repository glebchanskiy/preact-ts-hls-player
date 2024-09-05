import { Events } from 'hls.js';
export type HlsAudioControllerConfig = {
    audioTag?: HTMLAudioElement;
};
type HlsEvent = keyof typeof Events;
export declare class HlsAudioController {
    audio: HTMLAudioElement;
    private hls;
    private hlsNative;
    constructor(config?: HlsAudioControllerConfig);
    private initializeHls;
    load(url: string): void;
    play(): void;
    pause(): void;
    togglePlayPause(): void;
    isPlaying(): boolean;
    stop(): void;
    getDuration(): number;
    seek(time: number): number;
    getPosition(): number;
    getVolume(): number;
    setVolume(volume: number): void;
    on(event: HlsEvent): {
        do: (callback: () => void) => void;
    };
    destroy(): void;
}
export {};
