// 为了不写死，设好全局配置项
import straw from "./static/images/straw/straw.png"
import wall from './static/images/wall/wall.gif'
import wall2 from './static/images/wall/wall2.gif'
import wall3 from './static/images/wall/walls.gif'
import water from "./static/images/water/water.gif"
import steel from './static/images/wall/steels.gif'
import tugai from './static/images/wall/tugai.net.20101117134209.gif'

import tankT from "./static/images/tank/top.gif"
import tankB from "./static/images/tank/bottom.gif"
import tankL from "./static/images/tank/left.gif"
import tankR from "./static/images/tank/right.gif"

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
        num: 50
    },
    wall: {
        num: 30
    },
    water: {
        num: 10
    },
    steel: {
        num: 30
    },
    tankB: {
        num: 10
    },
    images: {
        straw: straw,
        wall,//可以省写
        water,
        steel,
        wall2,
        wall3,
        tankT,
        tankB,
        tankL,
        tankR,

    }
}