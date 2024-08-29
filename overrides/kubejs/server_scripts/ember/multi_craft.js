ServerEvents.recipes(event => {
    event.remove({id:'embers:stamping/ingots/dawnstone'})
    event.recipes.create.mixing(
        '2x embers:dawnstone_ingot',
        ['thermal:rose_gold_ingot','minecraft:copper_ingot']
    ).heated()
    event.recipes.thermal.smelter(
        '2x embers:dawnstone_ingot',
        ['thermal:rose_gold_ingot','minecraft:copper_ingot']
    )
})