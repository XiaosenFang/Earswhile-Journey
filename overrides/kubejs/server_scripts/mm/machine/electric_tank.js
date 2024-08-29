MMEvents.createStructures(event => {
    event.create("mm:electric_tank")
        .controllerId("mm:basic_controller")
        .name("电解槽")
        .layout(a => {
            a
                .layer([
                    "       ", 
                    "       ", 
                    "ABB BBA",
                    "       ",
                    "   C   "
                ])
                .layer([
                    "DDDFDDD", 
                    "D     D", 
                    "D E E D",
                    "D     D",
                    "DDDDDDD"
                ])
                .layer([
                    "DDDDDDD", 
                    "D     D", 
                    "G E E G",
                    "D     D",
                    "DDDDDDD"
                ])
                .layer([
                    "DDDDDDD", 
                    "DDDDDDD", 
                    "DDDDDDD",
                    "DDDDDDD",
                    "DDDDDDD"
                ])
                .key("A", {
                    tag: 'mm:energy_port_input'
                })
                .key("B", {
                    block: 'immersiveengineering:coil_lv'
                })
                .key("D", {
                    tag: 'mekanismadditions:plastic_blocks/plastic'
                })
                .key("E", {
                    block: 'kubejs:graphite_block'
                })
                .key("F", {
                    tag: 'mm:fluid_port_input'
                })
                .key("G", {
                    tag: 'mm:fluid_port_output'
                })
        })
})