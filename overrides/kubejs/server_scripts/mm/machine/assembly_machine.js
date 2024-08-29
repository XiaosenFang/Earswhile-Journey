MMEvents.createStructures(event => {
    event.create("mm:precision_assembly_machine")
        .controllerId("mm:basic_controller")
        .name("精密组装机")
        .layout(a => {
            a
                .layer([
                    "AAAA", "AAAA", "AAAA"
                ])
                .layer([
                    "BBBB", "DEFG", "BHCB"
                ])
                .layer([
                    "IIII", "IIII", "IIII"
                ])
                .key("I", {
                    block: 'botania:manasteel_block'
                })
                .key("B", {
                    block: 'immersiveengineering:sheetmetal_colored_light_blue'
                })
                .key("D", {
                    tag: 'mm:item_port_output'
                })
                .key("E", {
                    block: 'create:depot'
                })
                .key("F", {
                    block: 'create:mechanical_arm'
                })
                .key("G", {
                    tag: 'mm:item_port_input'
                })
                .key("H", {
                    tag: 'mm:energy_port_input'
                })
                .key("A", {
                    block: 'railways:riveted_locometal'
                })
        })
})