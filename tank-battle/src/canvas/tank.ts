import canvasAbstract from "./canvasAbstract";
import config from "../config";
import Tank from "../model/Tank";
import position from "../services/position";

// type PositionType = { x: number, y: number }
class tank extends canvasAbstract implements ICanvas {
    num(): number {
        return config.tankB.num
    }
    model(): ModelConstructor {
        return Tank
    }
    render(): void {
        this.createModels()
        super.renderModels();

        setInterval(() => {
            this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height);
            super.renderModels();
        }, 50)
    }

    protected createModels() {
        position.getPositionCollection(this.num()).forEach(pos => {
            pos.y = 0
            // 这里可能会出现位置重叠的情况
            const instance = new (this.model())(this.canvas, pos);
            this.models.push(instance)

        })
    }

}
export default new tank()