Ponder.registry((event) => {
    event.create("mm:basic_controller")
        .scene("kubejs:starlight_infuser", "星能聚合器 ", "kubejs:starlight_infuser", (scene, utils) => {
            scene.showBasePlate()
            scene.rotateCameraY(45)
            scene.scaleSceneView(0.6)
            scene.idle(20)
            //第一层
            scene.addKeyframe()
            scene.world.showSection([1,1,1,7,1,7], Direction.DOWN)
            scene.idle(50)
            //第二层
            scene.addKeyframe()
            scene.world.showSection([1,2,1,7,2,7], Direction.DOWN)
            scene.idle(20)
            scene.text(40, 'Fluid is optional here')
            scene.idle(50)
            //第三层
            scene.addKeyframe()
            scene.world.showSection([1,3,1,7,3,7], Direction.DOWN)
            scene.idle(20)
            scene.text(40, 'Here the port can be replaced with any port')
            scene.idle(50)
            scene.scaleSceneView(0.55)
            //第四层
            scene.addKeyframe()
            scene.world.showSection([1,4,1,7,4,7], Direction.DOWN)
            scene.idle(50)
            //第五层
            scene.addKeyframe()
            scene.world.showSection([1,5,1,7,5,7], Direction.DOWN)
            scene.idle(50)
            //第六层
            scene.addKeyframe()
            scene.world.showSection([1,6,1,7,6,7], Direction.DOWN)
            scene.idle(50)
            //第七层
            scene.addKeyframe()
            scene.world.showSection([1,7,1,7,7,7], Direction.DOWN)
            scene.idle(50)
        })
})