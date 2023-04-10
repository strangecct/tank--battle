// import boss from '../canvas/boss'
import steel from '../canvas/steel'
import wall from '../canvas/wall'
import config from '../config'

// 一个工具类
export default {
    // 画布碰撞
    isCanvasTouch(x: number, y: number, width = config.model.width, height = config.model.height): boolean {
        // 先不使用复杂的边界逻辑，先用超出判断 会出现在边界转圈的情况，用循环解决
        return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height
    },

    // 模型碰撞,要返回碰撞的模型是什么
    isModelTouch(
        x: number,
        y: number,
        width: number = config.model.width,
        height: number = config.model.height,
        // 每一个画布中都保存了本画布的所有模型，每一个画布都导出了一个实例对象，所以按需引入
        models = [...wall.models, ...steel.models]
    ): IModel | undefined {
        // console.log(models)这里是有内容的，而我没有在构造函数中调用render，也就是说默认是以单例的方式实现的
        return models.find(model => {
            const state: boolean = x + width <= model.position.x
                || x >= model.position.x + model.width
                || y + height <= model.position.y
                || y >= model.position.y + model.width
            return !state
        })
    }
}
