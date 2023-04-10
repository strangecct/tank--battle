
import canvasAbstract from "./canvasAbstract"
import tank from "./tank"
import Bullet from "../model/Bullet"
import player from "./player"

class bullet extends canvasAbstract implements ICanvas {

    num(): number {
        return 0
    }
    model(): BulletConstructor {
        return Bullet
    }

    render(): void {
        // super.createModels()
        // super.renderModels();不能用父类方法来绘制了
        setInterval(() => {
            this.createBullets()
            super.renderModels()
            // console.log(this.models)
        }, 50)
    }

    private createBullets() {
        tank.models.forEach(tank => {
            const isExist = this.models.some(m => m.tank === tank) //判断这个坦克有没有子弹
            if (!isExist) {
                const instance = new Bullet(tank); //为什么在这里提供坐标会卡死页面
                this.models.push(instance)
            }
            // 一个坦克生成一个子弹，监测到子弹被摧毁后，就会再生成子弹

        })
    }
  
    public addPlayBullet() {
        this.models.push(new Bullet(player.models[0]))
    }

}

export default new bullet('bullet')