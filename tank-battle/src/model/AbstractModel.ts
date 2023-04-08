// 渲染模型的抽象类
import config from "../config"


export default abstract class AbstractModel {
    abstract render(): void
    abstract name: string //用来控制tank方向，感觉没什么必要
    constructor(protected canvas: CanvasRenderingContext2D, protected position: { x: number, y: number }) { }

    protected draw(img: HTMLImageElement) {
        this.canvas.drawImage(img, this.position.x, this.position.y, config.model.width, config.model.height)
    }
}
