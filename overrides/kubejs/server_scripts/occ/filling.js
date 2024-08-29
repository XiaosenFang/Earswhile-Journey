ServerEvents.recipes(event => {
    event.remove({output:'occultism:purified_ink'})
    event.recipes.create.filling(
        'occultism:purified_ink',
        [Fluid.of('create_enchantment_industry:ink',150),'minecraft:glass_bottle']
    )
})