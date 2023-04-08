/// <reference types="vite/client" />

interface ModelConstructor {
    new(canvas: CanvasRenderingContext2D, position: { x: number, y: number }): IModel
}

interface IModel {
    render(): void
}

interface ICanvas {
    num(): number
    model(): ModelConstructor
    render(): void
}