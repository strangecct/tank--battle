/// <reference types="vite/client" />

// import { directionEnum } from "./enum/direction"这里不能引入

interface ModelConstructor {
    new(position: { x: number, y: number }): IModel
}

interface BulletConstructor {
    new(tank: IModel, position: { x: number, y: number }): IModel
}

interface IModel {
    render(): void
    position: { x: number, y: number }
    width: number
    height: number
    name: string
    tank?: IModel //可以表示有的有有的没有
    direction?: string
    destroy(): void
    ICanvas: ICanvas
}

interface ICanvas {
    // 用以限制抽象画布对象
    // name: string 继承，不是自己定义就不用写
    num(): number
    model(): ModelConstructor | BulletConstructor
    render(): void
    canvas: CanvasRenderingContext2D
    removeModel(model: IModel): void
    renderModels(): void
}

type PositionType = { x: number, y: number }
