// 渲染模型的地方

import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"

export default class Wall extends AbstractModel implements IModel {
    name: string = 'wall'
    render(): void {
        super.draw(imageMap.get('wall')!)
    }

}
