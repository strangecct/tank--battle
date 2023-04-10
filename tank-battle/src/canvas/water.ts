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
    // constructor() {
    //     super()
    // }
    render(): void {

        super.createModels()
        super.renderModels();
    }

}

export default new water('water')