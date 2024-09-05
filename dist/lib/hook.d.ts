import { ReadonlySignal } from '@preact/signals';
import { HlsAudioController } from './controller';
declare const controller: HlsAudioController;
type LoadArgs = {
    url: string;
    on?: {
        end: () => void;
    };
};
export declare const useHlsController: () => {
    controller: typeof controller;
    playing: ReadonlySignal<boolean>;
    volume: ReadonlySignal<number>;
    setVolume: (val: number) => void;
    seek: (val: number) => void;
    stop: () => void;
    play: () => void;
    pause: () => void;
    togglePlayPause: () => void;
    load: (loadArgs: LoadArgs) => void;
    getDuration: () => number;
    getPosition: () => number;
};
export {};
