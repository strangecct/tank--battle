
import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"
import water from "../canvas/water"

export default class Water extends AbstractModel implements IModel {
    ICanvas: ICanvas = water
    name: string = 'water'
    render(): void {
        super.draw(imageMap.get('water')!)
    }
}
