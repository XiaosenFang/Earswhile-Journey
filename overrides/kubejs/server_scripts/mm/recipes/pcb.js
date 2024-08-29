MMEvents.createProcesses(event => {
    event.create("mm:pcb")
        .structureId("mm:precision_assembly_machine")
        .ticks(640)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: 'pneumaticcraft:empty_pcb',
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: 'forge:plates/copper',
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 2650
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: 'pneumaticcraft:unassembled_pcb',
                count: 1
            }
        })
})