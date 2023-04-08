
import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"

export default class Water extends AbstractModel implements IModel {
    name: string = 'water'
    render(): void {
        super.draw(imageMap.get('water')!)
    }
}
