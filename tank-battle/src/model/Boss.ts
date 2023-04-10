// 渲染模型的地方

import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"
import boss from "../canvas/boss"

export default class Boss extends AbstractModel implements IModel {
    ICanvas: ICanvas = boss
    name: string = 'boss'
    render(): void {
        super.draw(imageMap.get('boss')!)
    }

}
