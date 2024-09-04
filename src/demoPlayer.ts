import { HlsAudioController } from ".";

export function setupPlayer(audio: HTMLAudioElement, play: HTMLButtonElement, stop: HTMLButtonElement, clear: HTMLButtonElement, url: HTMLInputElement) {
  // url example: 'http://localhost:8082/api/v1/tracks/dpnqbq0ndowlr7yu/index.m3u8'
  let player: HlsAudioController | null;

  play.addEventListener('click', () => {
    if (!player) {
      player = new HlsAudioController({ audioTag: audio });
      player.load(url.value)
    }


    player.play();
  })

  stop.addEventListener('click', () => {
    if (player) player.pause()
  })

  clear.addEventListener('click', () => {
    if (player) player.destroy()
    player = null;
  })
}
