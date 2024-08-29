//花药台
ServerEvents.recipes(event => {
    event.remove({output:'naturesaura:gold_fiber'})
    event.recipes.botania.petal_apothecary('4x naturesaura:gold_fiber', ['#minecraft:leaves','#minecraft:leaves','minecraft:grass','minecraft:grass','#forge:vines','kubejs:luminous_pith'])
})