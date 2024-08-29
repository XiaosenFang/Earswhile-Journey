Ponder.registry((event) => {
    event.create("mm:basic_controller")
        .scene("kubejs:precision_assembly_machine", "精密组装机 ", "kubejs:precision_assembly_machine", (scene, utils) => {
            scene.showBasePlate()
            scene.rotateCameraY(45)
            scene.idle(20)
            //第一层
            scene.addKeyframe()
            scene.addKeyframe()
            const blocks_1 = [
                [1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 1, 1],
                [1, 1, 2], [2, 1, 2], [3, 1, 2], [4, 1, 2],
                [1, 1, 3], [2, 1, 3], [3, 1, 3], [4, 1, 3]
            ]
            for (let block of blocks_1) {
                scene.world.showSection(block, Direction.down)
                scene.idle(2)
            }
            scene.idle(50)
            //第二层
            scene.addKeyframe()
            const blocks_2 = [
                [1, 2, 1], [2, 2, 1], [3, 2, 1], [4, 2, 1],
                [1, 2, 2], [2, 2, 2], [3, 2, 2], [4, 2, 2],
                [1, 2, 3], [2, 2, 3], [3, 2, 3], [4, 2, 3]
            ]
            for (let block of blocks_2) {
                scene.world.showSection(block, Direction.down)
                scene.idle(2)
            }
            scene.idle(20)
            scene.text(40, 'There is no need to bind any inputs or outputs', [2.5, 2.5, 3.5])
            scene.idle(50)
            //第三层
            scene.addKeyframe()
            const blocks_3 = [
                [1, 3, 1], [2, 3, 1], [3, 3, 1], [4, 3, 1],
                [1, 3, 2], [2, 3, 2], [3, 3, 2], [4, 3, 2],
                [1, 3, 3], [2, 3, 3], [3, 3, 3], [4, 3, 3]
            ]
            for (let block of blocks_3) {
                scene.world.showSection(block, Direction.down)
                scene.idle(2)
            }
            scene.idle(50)
        })
})