ServerEvents.recipes(event => {
    event.remove({output:'advgenerators:controller'})
})

MMEvents.createProcesses(event => {
    event.create("mm:controller")
        .structureId("mm:precision_assembly_machine")
        .ticks(120)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "ae2:calculation_processor",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: 'forge:plates/iron',
                count: 2
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: 'minecraft:redstone',
                count: 2
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1200
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'advgenerators:controller',
                count: 1
            }
        })
})