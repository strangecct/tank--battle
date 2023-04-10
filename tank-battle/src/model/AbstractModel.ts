// 渲染模型的抽象类
import config from "../config"

export default abstract class AbstractModel {


    abstract render(): void
    abstract name: string //用来控制tank方向，感觉没什么必要
    // abstract canvas: CanvasRenderingContext2D //因为所有的一个类下的对象都传递的是一个canvas，所以可以改进一下结构
    abstract ICanvas: ICanvas //未初始化之前不能获得对象，所以直接传一个画布完整的抽象对象


    public width = config.model.width
    public height = config.model.height

    // constructor(protected canvas: CanvasRenderingContext2D, public position: { x: number, y: number }) { }
    constructor(public position: { x: number, y: number }) { }

    protected draw(img: HTMLImageElement) {
        this.ICanvas.canvas.drawImage(img, this.position.x, this.position.y, config.model.width, config.model.height)
    }

    public destroy() {
        this.ICanvas.removeModel(this)
    }

    protected blaster(model: IModel) {
        // 生成有填充的数组
        Array(...Array(8).keys()).reduce((promise, index) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const img = new Image
                    img.src = `src/static/images/blasts/blast${index}.gif`
                    img.onload = () => {
                        this.ICanvas.canvas.drawImage(img, model.position.x, model.position.y, model.width, model.height)
                    }
                    resolve(promise)
                }, 200)
            })
        }, Promise.resolve())
        // 怎么理解promise 赋值为 promise
    }
}
