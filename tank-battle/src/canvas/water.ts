import config from "../config"
import canvasAbstract from "./canvasAbstract"
import Water from "../model/Water"

class water extends canvasAbstract implements ICanvas {
    num(): number {
        return config.water.num
    }
    model(): ModelConstructor {
        return Water
    }
    constructor() {
        super()
        super.createModels()
    }
    render(): void {
        super.renderModels();
    }

}

export default new water()