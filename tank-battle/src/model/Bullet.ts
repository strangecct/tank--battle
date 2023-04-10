
import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"

import bullets from "../canvas/bullets"
import config from "../config"
import { directionEnum } from "../enum/direction"
import util from "../services/util"

import steel from "../canvas/steel"
import wall from "../canvas/wall"
import straw from "../canvas/straw"
import boss from "../canvas/boss"
import tank from "../canvas/tank"
import player from "../canvas/player"

export default class Bullet extends AbstractModel implements IModel {
    ICanvas: ICanvas = bullets
    name: string = 'bullet'
    direction: directionEnum
    constructor(public tank: IModel) {
        super({ x: tank.position.x + config.model.width / 2, y: tank.position.y + config.model.height / 2 })
        this.direction = tank.direction as directionEnum
    }

    render(): void {

        let x = this.position.x
        let y = this.position.y
        let step = 5
        let playerStep = 20
        console.log('')
        switch (this.direction) {
            case 'T':
                y -= this.tank.name === 'player' ? playerStep: step
                break;
            case 'B':
                y += this.tank.name === 'player' ? playerStep: step
                break;
            case 'L':
                x -= this.tank.name === 'player' ? playerStep: step
                break;
            case 'R':
                x += this.tank.name === 'player' ? playerStep: step
                break;
        }

        this.position.x = x
        this.position.y = y
        // super.draw(imageMap.get('bullet')!)

        //碰撞判断
        const touchModel = util.isModelTouch(x, y, 2, 2, [
            ...wall.models, ...steel.models, ...straw.models,...boss.models,...tank.models,player.models[0]
        ])
        if (util.isCanvasTouch(x, y, 2, 2)) {
            this.destroy()
        } else if (touchModel && this.tank.name !== touchModel.name) {
            //不能自毁,但是被子弹碰到的就会毁掉
            this.destroy()


            if (touchModel.name !== 'steel') {
                touchModel.destroy()
                touchModel.ICanvas.renderModels()
            }
            // 怎么解决图层的问题
            this.blaster(touchModel)
        }
        this.draw();
    }

    protected draw() {
        this.ICanvas.canvas.drawImage(imageMap.get('bullet')!,
            this.position.x, this.position.y, 4, 4)
    }



}