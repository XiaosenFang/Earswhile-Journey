MMEvents.createStructures(event => {
    event.create("mm:spinning_frame")
        .controllerId("mm:basic_controller")
        .name("纺织机")
        .layout(a => {
            a
                .layer([
                    "AAA",
                    "AAA",
                    "AAA"
                ])
                .layer([
                    "BDB",
                    "E E",
                    "BFB"
                ])
                .layer([
                    "BGB",
                    "E E",
                    "BCB"
                ])
                .layer([
                    "AAA",
                    "AAA",
                    "AHA"
                ])
                .key("A", {
                    block: 'minecraft:oak_wood'
                })
                .key("B", {
                    block: 'minecraft:oak_log'
                })
                .key("D", {
                    tag: 'mm:fluid_port_input'
                })
                .key("E", {
                    tag: 'mm:item_port'
                })
                .key("F", {
                    block: 'minecraft:oak_planks'
                })
                .key("G", {
                    block: 'mm:basic_kinetic_port_input'
                })
                .key("H", {
                    block: 'minecraft:loom'
                })
        })
})