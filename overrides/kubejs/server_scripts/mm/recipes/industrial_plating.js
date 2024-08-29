MMEvents.createProcesses(event => {
    event.create("mm:industrial_plating")
        .structureId("mm:galvanization_cell")
        .ticks(520)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: 'create:industrial_iron_block',
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: 'forge:ingots/zinc',
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 23850
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'design_decor:industrial_plating_block',
                count: 1
            }
        })
})