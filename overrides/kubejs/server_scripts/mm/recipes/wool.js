MMEvents.createProcesses(event => {
    event.create("mm:wools")
        .structureId("mm:spinning_frame")
        .ticks(30)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:string',
                count: 64
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: 'forge:dyes',
                count: 16
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 64
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:green_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:cyan_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:light_blue_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:blue_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:purple_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:magenta_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:pink_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:white_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:black_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:gray_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:light_gray_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:brown_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:red_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:orange_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:yellow_wool',
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:lime_wool',
                count: 1
            }
        })
})