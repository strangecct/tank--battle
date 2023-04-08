
import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"
import { directionEnum } from "../enum/direction"
import config from "../config"

type mapKey = keyof typeof config.images
export default class Tank extends AbstractModel implements IModel {
    name: string = 'tank'
    protected direction: directionEnum = directionEnum.top

    constructor(
        protected canvas: CanvasRenderingContext2D, protected position: { x: number, y: number }
    ) {
        super(canvas, position)
        this.randomDirection()
        // 这个地方随机初始化四个方向
    }

    // 画布每隔时间会调用这里的render
    render(): void {
        super.draw(this.randomImg())
        this.move()
    }

    // 随机方向
    randomDirection() {
        this.direction = (Object.values(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum)
        console.log(this.direction)
    }

    // 获得图片
    private randomImg(): HTMLImageElement {
        let tankStr = (this.name + this.direction) as mapKey
        return imageMap.get(tankStr)!
    }

    protected move(): void {
        // this.canvas.clearRect(this.position.x, this.position.y, config.model.width, config.model.height)
        // 模型的擦除放在画布上，不要在这里处理
        switch (this.direction) {
            case 'L':
                this.position.x -= 2
                break;
            case 'R':
                this.position.x += 2
                break;
            case 'T':
                this.position.y -= 1
                break;
            case 'B':
                this.position.y += 2
                break;
        }
        super.draw(this.randomImg())
        // 这种情况下会一个个地擦除，再渲染tank，需要擦除20次，所以把擦除操作放到画布里，擦掉坦克那一层
    }
}
