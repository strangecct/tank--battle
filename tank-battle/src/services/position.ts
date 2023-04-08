// 将画布中的生成位置的程序提取到这里,不只画布使用
import config from "../config"

type PositionType = { x: number, y: number }
class Position {

    collectionAllModel: PositionType[] = []
    //用以一个整体的数组，防止不同的对象生成的位置重复

    // 防止随机位置重复的函数,返回位置数组
    public getPositionCollection(num: number): PositionType[] {
        const collection = []
        for (let i = 0; i < num; i++) {
            let position = this.position()
            while (true) {
                let exist: boolean = this.collectionAllModel.some(pre => pre.x === position.x && pre.y === position.y)
                if (exist) {
                    position = this.position()
                } else {
                    break;
                }
            }
            collection.push(position)
            this.collectionAllModel.push(position)
        }
        return collection
    }

    // 生成一个随机位置,上下保留一些间距
    private position(): PositionType {
        return {
            x: Math.floor(config.canvas.width / config.model.width * Math.random()) * config.model.width,
            y: Math.floor((config.canvas.height / config.model.height - 5) * Math.random()) * config.model.height
                + 2 * config.model.height
        }
    }
}
export default new Position()