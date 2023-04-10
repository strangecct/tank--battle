
import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"
import { directionEnum } from "../enum/direction"
import config from "../config"

import wall from '../canvas/wall'
import water from '../canvas/water'
import steel from '../canvas/steel'

import util from "../services/util"
import boss from "../canvas/boss"
import player from "../canvas/player"
import bullets from "../canvas/bullets"

type mapKey = keyof typeof config.images
export default class Tank extends AbstractModel implements IModel {
    ICanvas: ICanvas = player
    canvas: CanvasRenderingContext2D = player.canvas
    name: string = 'player'
    public direction: directionEnum = directionEnum.top

    bindEvent = false;

    // 画布每隔时间会调用这里的render
    render(): void {
        super.draw(this.directionImg())
        if (this.bindEvent === false) {
            this.bindEvent = true
            // 不要多次绑定事件
            document.addEventListener('keydown', this.changeDirection.bind(this))
            document.addEventListener('keydown', this.move.bind(this))
            document.addEventListener('keydown', (event: KeyboardEvent) => {
              if (event.code === 'Space') bullets.addPlayBullet() //只有一个坦克就不用传了 
            })
          }
    }

    //控制方向
    changeDirection(event: KeyboardEvent) {//接收键盘事件
        switch (event.code) {
          case 'ArrowUp':
            this.direction = directionEnum.top
            break
          case 'ArrowDown':
            this.direction = directionEnum.bottom
            break
          case 'ArrowLeft':
            this.direction = directionEnum.left
            break
          case 'ArrowRight':
            this.direction = directionEnum.right
            break
        }
      }

    // 获得图片
    private directionImg(): HTMLImageElement {
        let playerStr = (this.name + this.direction) as mapKey
        return imageMap.get(playerStr)!
    }

    protected move(event: KeyboardEvent): void { 
        let x = this.position.x
        let y = this.position.y
        switch (event.code) {
            case 'ArrowLeft':
                x -= config.player.speed
                break;
            case 'ArrowRight':
                x += config.player.speed
                break;
            case 'ArrowUp':
                y -= config.player.speed
                break;
            case 'ArrowDown':
                y += config.player.speed
                break;
        } 
        const models = [...wall.models, ...steel.models,...boss.models]
        if (util.isCanvasTouch(x, y) === true || util.isModelTouch(x, y, config.model.width, config.model.height, models)) {
            return 
        } 
        this.position.x = x
        this.position.y = y
    }

}
