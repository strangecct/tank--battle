// 为了不写死，设好全局配置项
import straw from "./static/images/straw/straw.png"
import tank from "./static/images/tank/top.gif"

export default {
    canvas: {
        width: 900,
        height: 600
    },
    model: {
        // 控制绘制的模型的尺寸
        width: 30,
        height: 30
    },
    straw: {
        num: 30
    },
    images: {
        straw: straw,
        tank, //可以省写


    }
}