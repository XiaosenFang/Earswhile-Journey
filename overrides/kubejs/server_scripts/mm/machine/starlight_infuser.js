MMEvents.createStructures(event => {
    event.create("mm:starlight_infuser")
        .controllerId("mm:basic_controller")
        .name("星能聚合器")
        .layout(a => {
            a
            .layer([
                "  III  ",
                "       ",
                "I     I",
                "I     I",
                "I     I",
                "       ",
                "  III  "
            ])
            .layer([
                " I   I ",
                "I     I",
                "       ",
                "       ",
                "       ",
                "I     I",
                " I   I "
            ])
            .layer([
                "H     H",
                "       ",
                "       ",
                "       ",
                "       ",
                "       ",
                "H     H"
            ])
            .layer([
                "B     B",
                "       ",
                "       ",
                "       ",
                "       ",
                "       ",
                "B     B"
            ])
            .layer([
                "BGGGGGB",
                "       ",
                "       ",
                "   C   ",
                "       ",
                "       ",
                "B     B"
            ])
            .layer([
                "BDDDDDB",
                "DD   DD",
                "D DDD D",
                "D DFD D",
                "D DDD D",
                "DD   DD",
                "BDDDDDB"
            ])
                .layer([
                    "       ",
                    "  AAA  ",
                    " A   A ",
                    " A   A ",
                    " A   A ",
                    "  AAA  ",
                    "       "
                ])
                .key("A", {
                    block: 'minecraft:calcite'
                })
                .key("B", {
                    block: 'quark:calcite_bricks_wall'
                })
                .key("D", {
                    block: 'quark:calcite_bricks'
                })
                .key("F", {
                    block: 'minecraft:lapis_block'
                })
                .key("G", {
                    tag: 'mm:port'
                })
                .key("H", {
                    block: 'create:small_calcite_bricks'
                })
                .key("I", {
                    block: 'quark:chiseled_calcite_bricks'
                })
        })
})