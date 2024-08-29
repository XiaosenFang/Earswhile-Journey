ServerEvents.recipes(event => {
    //驱动器
    event.remove({ output: 'mekanism:qio_drive_array' })
    event.shaped(
        Item.of('mekanism:qio_drive_array'),
        [
            ['minecraft:iron_ingot', 'mekanism:qio_dashboard', 'minecraft:iron_ingot'],
            ['advgenerators:controller', 'ae2:smooth_sky_stone_chest', 'advgenerators:controller'],
            ['minecraft:iron_ingot', 'minecraft:smooth_quartz', 'minecraft:iron_ingot']
        ]
    )
    //输入
    event.remove({ output: 'mekanism:qio_importer' })
    event.shaped(
        Item.of('mekanism:qio_importer'),
        [
            ['', 'minecraft:sticky_piston', ''],
            ['#forge:ingots/lead', 'expatternprovider:ex_import_bus_part', '#forge:ingots/lead']
        ]
    )
    //输出
    event.remove({ output: 'mekanism:qio_exporter' })
    event.shaped(
        Item.of('mekanism:qio_exporter'),
        [
            ['#forge:ingots/lead', 'expatternprovider:precise_export_bus', '#forge:ingots/lead'],
            ['', 'minecraft:piston', '']
        ]
    )
    //qio驱动器
    event.remove({ output: 'mekanism:qio_drive_base' })
    event.shaped(
        Item.of('mekanism:qio_drive_base'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:glowstone_dust',
            B: '#forge:ingots/tin',
            C: 'ae2:logic_processor'
        }
    )
    //超质量qio
    event.replaceInput(
        [{ output: 'mekanism:qio_drive_supermassive' }],
        'mekanism:pellet_antimatter',
        'minecraft:nether_star'
    );
})