
import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"
import steel from "../canvas/steel"


export default class Steel extends AbstractModel implements IModel {
    ICanvas: ICanvas = steel
    name: string = 'steel'
    render(): void {
        super.draw(imageMap.get('steel')!)
    }
}