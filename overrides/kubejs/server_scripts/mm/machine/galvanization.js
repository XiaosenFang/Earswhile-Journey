MMEvents.createStructures(event => {
    event.create("mm:galvanization_cell")
        .controllerId("mm:basic_controller")
        .name("电镀槽")
        .layout(a => {
            a
                .layer([
                    "       ", 
                    "       ", 
                    "AB   BA",
                    "       ",
                    " HGCGH "
                ])
                .layer([
                    "DDDFDDD", 
                    "D     D", 
                    "D     D",
                    "D     D",
                    "DDDDDDD"
                ])
                .layer([
                    "DDDDDDD", 
                    "D     D", 
                    "D     D",
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
                .key("F", {
                    tag: 'mm:fluid_port_input'
                })
                .key("G", {
                    tag: 'mm:item_port'
                })
                .key("H", {
                    block: 'create:mechanical_arm'
                })
        })
})