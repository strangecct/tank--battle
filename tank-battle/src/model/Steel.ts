
import AbstractModel from "./AbstractModel"
import { imageMap } from "../services/image"

export default class Steel extends AbstractModel implements IModel {
    name: string = 'steel'
    render(): void {
        super.draw(imageMap.get('steel')!)
    }
}