// 定义抽象类
import config from "../config"
import position from "../services/position";


export default abstract class canvasAbstract {
    protected models: IModel[] = []

    abstract num(): number
    abstract model(): ModelConstructor
    abstract render(): void

    constructor(
        protected box = document.querySelector('#app')!,
        protected el = document.createElement('canvas'),
        protected canvas = el.getContext('2d')!
    ) {
        this.createCanvas();
    }

    // 创建画布
    protected createCanvas() {
        this.el.width = config.canvas.width;
        this.el.height = config.canvas.height;
        // this.canvas.fillStyle = '#222'
        // this.canvas.fillRect(0, 0, config.canvas.width, config.canvas.height)
        this.box.insertAdjacentElement('afterbegin', this.el)
    }

    // 由子类调用的绘制数组到画布的函数，-> 优化为仅生成模型到数组中 
    // -> 再次重构，由 createModel 接收参数转为使用抽象函数的子类实现获得参数，好处？需要重新渲染数量，在构造函数中只生成一次
    protected createModels() {

        position.getPositionCollection(this.num()).forEach(position => {
            // this.canvas.drawImage(imageMap.get(model)!,
            //     position.x, position.y, config.model.width, config.model.height)
            // 也不直接在这里渲染，进一步优化结构
            const instance = new (this.model())(this.canvas, position);
            this.models.push(instance)
            // instance.render() //这里也不要直接渲染
        })
    }

    //将模型的创建和渲染分开
    protected renderModels() {
        this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height)
        this.models.forEach(model => {
            model.render()
        })
    }
    //  
    // protected removeModel() {

    // }


}