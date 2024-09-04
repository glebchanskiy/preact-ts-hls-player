import { ReadonlySignal, useSignal } from "@preact/signals"
import { useEffect, useRef } from "preact/hooks"
import { HlsAudioController } from "./controller";

const controller = new HlsAudioController();

type LoadArgs = {
    url: string
    on?: {
        end: () => void
    }
}

export const useHlsController = (): {
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
} => {
    const playing = useSignal<boolean>(controller.isPlaying())
    const volume = useSignal<number>(controller.getVolume())

    const volumeDebounce = useRef<number>()

    useEffect(() => {
        volumeDebounce.current = window.setTimeout(() => controller.setVolume(volume.value), 100);
        return () => clearTimeout(volumeDebounce.current)
    }, [volume.value])

    useEffect(() => {
        const audio = controller.audio;

        if (!audio) return;

        const events = {
            play: () => { playing.value = true },
            pause: () => { playing.value = false },
            ended: () => { playing.value = false }
        };

        Object.keys(events).forEach(event =>
            audio.addEventListener(event, events[event as keyof typeof events])
        );

        return () => {
            Object.keys(events).forEach(event =>
                audio.removeEventListener(event, events[event as keyof typeof events])
            );
        };
    }, [controller.audio]);

    const load = (loadArgs: LoadArgs) => {
        controller.load(loadArgs.url)
        if (loadArgs.on) controller.on("MEDIA_ENDED").do(loadArgs.on.end)
    }

    return {
        controller,
        playing,
        volume,
        load,
        setVolume: (val: number) => volume.value = val,
        seek: (val: number) => controller.seek(val),
        stop: () => controller.stop(),
        play: () => controller.play(),
        pause: () => controller.pause(),
        togglePlayPause: () => controller.togglePlayPause(),
        getDuration: () => controller.getDuration(),
        getPosition: () => controller.getPosition(),
    }
}