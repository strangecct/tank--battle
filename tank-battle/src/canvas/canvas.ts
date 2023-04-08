// 定义抽象类
import config from "../config"
import { imageMap } from "../services/image";


export default abstract class canvasAbstract {
    protected items = []
    abstract render(): void

    constructor(
        protected box = document.querySelector('#app')!,
        protected el = document.createElement('canvas'),
        protected canvas = el.getContext('2d')!
    ) {
        this.createCanvas();
        // this.drawModels();不要在这里绘制了，而是等到异步加载完在入口主程序中使用render
    }

    protected createCanvas() {
        this.el.width = config.canvas.width;
        this.el.height = config.canvas.height;

        this.canvas.fillRect(0, 0, config.canvas.width, config.canvas.height)
        this.box.insertAdjacentElement('afterbegin', this.el)
    }

    // 由子类调用的绘制数组到画布的函数
    protected drawModels(num: string) {

        Array(num).fill('').forEach(() => {
            const position = this.position()
            this.canvas.drawImage(imageMap.get('straw')!,
                position.x, position.y, config.model.width, config.model.height)

        })
    }

    // 防止随机位置重复的函数
    private positionCollection(num: number) {

    }

    // 生成一个随机位置
    protected position() {
        return {
            x: Math.floor(config.canvas.width / config.model.width * Math.random()) * config.model.width,
            y: Math.floor(config.canvas.height / config.model.height * Math.random()) * config.model.height
        }
    }
}