ServerEvents.recipes(event => {
    //安山
    event.remove([{id:'create:crafting/materials/andesite_alloy'},{id:'create:crafting/materials/andesite_alloy_from_zinc'},{id:'create:mixing/andesite_alloy_from_zinc'},{id:'create:mixing/andesite_alloy'},{id:'thermal:compat/create/smelter_create_alloy_andesite_alloy'}])
    event.shapeless(
        '8x create:andesite_alloy',
        ['twilightforest:ironwood_ingot','8x minecraft:andesite']
    ).id('kubejs:moisting_the_sponge_manual_only')
    event.recipes.create.mixing('16x create:andesite_alloy', ['twilightforest:ironwood_ingot','16x minecraft:andesite'])
    event.recipes.thermal.smelter('24x create:andesite_alloy', ['twilightforest:ironwood_ingot','24x minecraft:andesite'])  
})