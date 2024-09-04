import './style.css'
import { setupPlayer } from './demoPlayer.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <audio id='audio' controls></audio>

    <input id='url-input' placeholder="Url to hls playlist" style='width: 800px'></input>
    
    <div style='margin-top: 20px'>
      <button id='play-btn'>play</button>
      <button id='stop-btn'>stop</button>
      <button id='clear-btn'>clear</button>
    </div>
  </div>
`

setupPlayer(
  document.querySelector<HTMLAudioElement>('#audio')!,
  document.querySelector<HTMLButtonElement>('#play-btn')!,
  document.querySelector<HTMLButtonElement>('#stop-btn')!,
  document.querySelector<HTMLButtonElement>('#clear-btn')!,
  document.querySelector<HTMLInputElement>('#url-input')!,
)
