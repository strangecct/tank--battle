// 入口文件
import './style.scss'
import { promiseImgs } from './services/image'
import config from './config'
import straw from './canvas/straw'
import wall from './canvas/wall'
import water from './canvas/water'
import steel from './canvas/steel'

import tank from './canvas/tank'
import bullets from './canvas/bullets'
import boss from './canvas/boss'
import player from './canvas/player'

import './services/image'
// import audio from './service/audio'



const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'



export default {
  isStart: false, //点击一次后取消事件
  state: 9,
  interval: 0,
  bootstrap() {
    app.addEventListener('click', async () => {
    if (this.isStart === true) return
    // audio.start()
    this.isStart = true
    app.style.backgroundImage = 'none'
      await this.start()
      this.interval = setInterval(() => {
        if (tank.models.length == 0) this.state = 1
        if (player.models.length == 0 || boss.models.length == 0) this.state = 0
        if (this.state != 9) this.stop()
      }, 100)
    })
  },
  async stop() {
    clearInterval(this.interval)
    // tank.stop()
    // bullets.stop()
    this.text()
  },
  text() {
    const el = document.createElement('canvas')
    el.width = config.canvas.width
    el.height = config.canvas.height
    const endCanvas = el.getContext('2d')!
    endCanvas.fillStyle = 'red'
    endCanvas.font = '80px CascadiaMono'
    endCanvas.textBaseline = 'middle'
    endCanvas.textAlign = 'center'
    endCanvas.fillText(this.state == 1 ? '恭喜你，赢得胜利' : '完了完了可', config.canvas.width / 2, config.canvas.height / 2)
    app.appendChild(el)
  },
  async start() {
    
    await Promise.all(promiseImgs)

    straw.render()
    wall.render()
    water.render()
    steel.render()
    tank.render()
    bullets.render()
    boss.render()
    player.render()
  },
}
