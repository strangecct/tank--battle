// 渲染模型的地方

import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"
import straw from "../canvas/straw"

export default class Straw extends AbstractModel implements IModel {
    name: string = 'straw'
    ICanvas: ICanvas = straw

    render(): void {
        super.draw(imageMap.get('straw')!)
    }
}
// 也可以定义父类！实现不同模型的复用