import config from "../config"
import canvasAbstract from "./canvasAbstract"
import Steel from "../model/Steel"

class steel extends canvasAbstract implements ICanvas {

    num(): number {
        return config.steel.num
    }
    model(): ModelConstructor {
        return Steel
    }

    render(): void {
        super.createModels()
        super.renderModels();
    }

}

export default new steel('steel')