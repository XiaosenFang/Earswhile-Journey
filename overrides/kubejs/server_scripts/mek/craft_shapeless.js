ServerEvents.recipes(event => {
    //仪表板
    event.remove({ output: 'mekanism:qio_dashboard' })
    event.shapeless(
        'mekanism:qio_dashboard',
        ['ae2:terminal','minecraft:crafting_table','#forge:ingots/lead','ae2:wireless_receiver']
    )
    //便携仪表板
    event.remove({ output: 'mekanism:qio_dashboard' })
    event.shapeless(
        'mekanism:portable_qio_dashboard',
        ['mekanism:qio_dashboard','ae2:wireless_crafting_terminal']
    )
})