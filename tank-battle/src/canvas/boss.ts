import config from "../config"
import canvasAbstract from "./canvasAbstract"
import Boss from "../model/Boss"

class boss extends canvasAbstract implements ICanvas {

    num(): number {
        return 1
    }
    model(): ModelConstructor {
        return Boss
    }
    render(): void {
        
        this.createBoss()
        super.renderModels();
    }

    createBoss() {
        const pos = { 
            x: (config.canvas.width ) / 2 , 
            y: config.canvas.height -  config.model.height
        }
          const model = this.model() as ModelConstructor
          const instance = new model(pos)
          this.models.push(instance)
        
      }

}

export default new boss('boss')