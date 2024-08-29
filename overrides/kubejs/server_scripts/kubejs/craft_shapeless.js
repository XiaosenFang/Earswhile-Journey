ServerEvents.recipes(event => {
    event.shapeless(
        'kubejs:luminous_pith',
        ['twilightforest:firefly','twilightforest:torchberries','minecraft:glowstone_dust']
    ).keepIngredient({item:'twilightforest:firefly'})
    event.shapeless(
        'kubejs:graphite_block',
        ['9x immersiveengineering:ingot_hop_graphite']
    )
    event.shapeless(
        '9x immersiveengineering:ingot_hop_graphite',
        'kubejs:graphite_block'
    )
})