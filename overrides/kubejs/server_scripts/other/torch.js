ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'torchmaster:megatorch' },
        '#minecraft:logs',
        'immersiveengineering:electric_lantern'
    )
})