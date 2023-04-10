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
        this.createBossWall()
        super.renderModels();
    }

    createBossWall() {
        const cw = config.canvas.width
        const ch = config.canvas.height
        const mw = config.model.width
        const mh = config.model.height
        // 获得画布和模型的高宽
        const pos = [
          { x: cw / 2 - mw * 2, y: ch - mh },
          { x: cw / 2 - mw * 2, y: ch - mh * 2 },
          
          { x: cw / 2 - mw * 2, y: ch - mh * 3 },
          { x: cw / 2 - mw, y: ch - mh * 3 },
          { x: cw / 2, y: ch - mh * 3 },
          { x: cw / 2 + mw, y: ch - mh * 3 },
          { x: cw / 2 + mw * 2, y: ch - mh * 3 },//水平墙

          { x: cw / 2 + mw * 2, y: ch - mh * 2 },
          { x: cw / 2 + mw * 2, y: ch - mh },
        ]
        pos.forEach(position => {
          const model = this.model() as ModelConstructor
          const instance = new model(position)
          this.models.push(instance)
        })
      }

}

export default new wall('wall')