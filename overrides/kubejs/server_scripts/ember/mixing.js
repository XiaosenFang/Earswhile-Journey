ServerEvents.recipes(event => {
    event.remove({id:'embers:stamping/ingots/dawnstone'})
    event.remove({output:'embers:caminite_blend'})
    event.recipes.create.mixing(
        '8x embers:caminite_blend',
        ['2x minecraft:sand','minecraft:gravel','4x minecraft:clay_ball']
    )
})