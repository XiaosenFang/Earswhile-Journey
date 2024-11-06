Ponder.registry((event) => {
    event.create(["mm:basic_controller"])
        .scene("kubejs:divine_tree", 'Divine Tree', "kubejs:divine_tree", (scene, utils) => {
            scene.showBasePlate()
            scene.idle(20)
            scene.text(50, '神圣之树是这样建造的')
            scene.idle(60)
            scene.scaleSceneView(0.4)

            scene.addKeyframe()
            const blocks_4 = [
                [4, 1, 6], [5, 1, 5], [4, 1, 5], [3, 1, 5],
                [6, 1, 4], [5, 1, 4], [4, 1, 4], [3, 1, 4], [2, 1, 4],
                [5, 1, 3], [4, 1, 3], [3, 1, 3], [4, 1, 2]
            ]
            for (let block of blocks_4) {
                scene.world.showSection(block, Direction.down)
                scene.idle(2)
            }
            scene.idle(40)
            scene.world.showSection([0, 2, 0, 9, 2, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 3, 0, 9, 3, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 4, 0, 9, 4, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 5, 0, 9, 5, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 6, 0, 9, 6, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 7, 0, 9, 7, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 8, 0, 9, 8, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 9, 0, 9, 9, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 10, 0, 9, 10, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 11, 0, 9, 11, 9], Direction.DOWN)
            scene.idle(40)
            scene.world.showSection([0, 12, 0, 9, 12, 9], Direction.DOWN)
            scene.rotateCameraY(45)
            scene.idle(60)

            scene.addKeyframe()
            scene.text(50, '下一步，放置controller', [4.5, 1.5, 1.5])
            scene.idle(20)
            scene.world.showSection([4, 1, 1], Direction.down)
            scene.idle(60)

            scene.addKeyframe()
            scene.text(50, '最后，用接口替代羊毛的部分')
            scene.idle(20)
            const blocks_5 = [
                [2, 1, 1], [2, 1, 2], [2, 1, 3], [3, 1, 1],
                [3, 1, 2], [5, 1, 4], [5, 1, 1], [5, 1, 2], [6, 1, 1],
                [6, 1, 2], [6, 1, 3]
            ]
            for (let block of blocks_5) {
                scene.world.showSection(block, Direction.down)
                scene.idle(2)
            }
            scene.idle(60)
        })
})