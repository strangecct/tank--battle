import config from "../config"
import canvasAbstract from "./canvasAbstract"
import Wall from "../model/Wall"

class wall extends canvasAbstract implements ICanvas {
    num(): number {
        return config.wall.num
    }
    model(): ModelConstructor {
        return Wall
    }
    render(): void {
        super.createModels()
        super.renderModels();
    }

}

export default new wall()