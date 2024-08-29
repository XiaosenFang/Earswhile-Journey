ServerEvents.recipes(event => {
    //魔力钢
    event.replaceInput(
        { output: 'botania:manasteel_ingot' },
        'minecraft:iron_ingot',
        '#forge:ingots/steel'
    )
})