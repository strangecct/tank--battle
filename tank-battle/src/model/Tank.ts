
import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"
import { directionEnum } from "../enum/direction"
import config from "../config"

import wall from '../canvas/wall'
import water from '../canvas/water'
import steel from '../canvas/steel'//这里引入的和入口文件中相同的对象吗
import tank from "../canvas/tank" // 这里引用坦克会出现循环应用的问题吧
import util from "../services/util"
import boss from "../canvas/boss"

type mapKey = keyof typeof config.images
export default class Tank extends AbstractModel implements IModel {
    ICanvas: ICanvas = tank
    canvas: CanvasRenderingContext2D = tank.canvas
    name: string = 'tank'
    public direction: directionEnum = directionEnum.top

    constructor(
        public position: { x: number, y: number }
    ) {
        super(position)
        this.randomDirection()
        // 这个地方随机初始化四个方向
    }

    // 画布每隔时间会调用这里的render
    render(): void {
        super.draw(this.randomImg())
        this.move()
        if (this.position.y < config.canvas.height * 0.8 && Math.floor(Math.random() * 30) === 1) {
            this.direction = directionEnum.bottom
        }

    }

    // 随机方向
    randomDirection() {
        this.direction = (Object.values(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum)
        // console.log(this.direction)
    }

    // 获得图片
    private randomImg(): HTMLImageElement {
        let tankStr = (this.name + this.direction) as mapKey
        return imageMap.get(tankStr)!
    }

    protected move(): void {
        // this.canvas.clearRect(this.position.x, this.position.y, config.model.width, config.model.height)
        // 模型的擦除放在画布上，不要在这里处理
        // 这种情况下会一个个地擦除，再渲染tank，需要擦除20次，所以把擦除操作放到画布里，擦掉坦克那一层
        while (true) {
            let x = this.position.x
            let y = this.position.y

            switch (this.direction) {
                case 'L':
                    x -= config.tank.speed
                    break;
                case 'R':
                    x += config.tank.speed
                    break;
                case 'T':
                    y -= config.tank.speed
                    break;
                case 'B':
                    y += config.tank.speed
                    break;
            }
            // if (this.isTouch(x, y) === true) {
            const models = [...water.models, ...wall.models, ...steel.models,...boss.models]
            if (util.isCanvasTouch(x, y) === true || util.isModelTouch(x, y, config.model.width, config.model.height, models)) {
                this.randomDirection()
            } else {
                this.position.x = x;
                this.position.y = y;
                break;
            }
        }

    }

}
