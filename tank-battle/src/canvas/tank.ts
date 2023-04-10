import canvasAbstract from "./canvasAbstract";
import config from "../config";
import Tank from "../model/Tank";
import position from "../services/position";

class tank extends canvasAbstract implements ICanvas {

    num(): number {
        return config.tank.num
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
        }, config.tank.interval)
    }

    protected createModels() {
        position.getPositionCollection(this.num()).forEach(pos => {
            pos.y = 0
            // 这里可能会出现位置重叠的情况
            const instance = new (this.model())(pos);
            this.models.push(instance)
            //并且对于坦克，这里只记录了初始位置，没有实时监测

        })
    }

}
export default new tank('tank')