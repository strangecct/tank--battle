// 渲染模型的地方

import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"
import wall from "../canvas/wall"

export default class Wall extends AbstractModel implements IModel {
    ICanvas: ICanvas = wall
    name: string = 'wall'
    render(): void {
        super.draw(imageMap.get('wall')!)
    }

}
