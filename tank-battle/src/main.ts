// 入口文件
import './style.scss'
import config from './config'
import straw from './canvas/straw'
import { imageMap, promiseImgs } from './services/image'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'


async function bootstrap() {
  await Promise.all(promiseImgs)
  straw.render()
}

void bootstrap()