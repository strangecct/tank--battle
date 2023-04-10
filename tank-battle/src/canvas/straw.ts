import config from "../config"
import canvasAbstract from "./canvasAbstract"
import Straw from "../model/Straw"

class straw extends canvasAbstract implements ICanvas {
    num(): number {
        return config.straw.num
    }
    model(): ModelConstructor {
        return Straw
    }
    // constructor() {
    //     super()
    //     // super.createModels()只要不在构造函数中直接渲染，就不会产生循环引用的问题
    // }
    render(): void {
        super.createModels()
        super.renderModels();
    }

}

export default new straw('straw')