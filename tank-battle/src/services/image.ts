import config from "../config"

type mapKey = keyof typeof config.images
export const imageMap = new Map<mapKey, HTMLImageElement>()

// image.get('straw') //使用keyof 
export const promiseImgs = Object.entries(config.images).map(([key, val]) => {
    return new Promise((resolve) => {
        const img = document.createElement('img')
        img.src = val
        img.onload = () => {
            imageMap.set(key as mapKey, img)
            // 加载完后放到iamge里面
            resolve(img)
        }
    })
})