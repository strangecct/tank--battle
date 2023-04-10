import canvasAbstract from "./canvasAbstract";
import config from "../config";
import Player from "../model/Player";


class player extends canvasAbstract implements ICanvas {

    num(): number {
        return 1
    }
    model(): ModelConstructor {
        return Player
    }
    render(): void {
        this.createPlayer()
        super.renderModels();

        setInterval(() => {
            this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height);
            super.renderModels();
        }, config.tank.interval)
    }

    createPlayer() {
        const pos = { 
            x: (config.canvas.width ) / 2  +config.model.height * 4 , 
            y: config.canvas.height -  config.model.height
        }
          const model = this.model() as ModelConstructor
          const instance = new model(pos)
          this.models.push(instance)
        
      }

}
export default new player('player')