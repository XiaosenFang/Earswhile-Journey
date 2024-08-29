ServerEvents.recipes(event => {
    event.remove({output:'immersiveengineering:cokebrick'})
    event.recipes.create.sequenced_assembly([
        'immersiveengineering:cokebrick'],
        'minecraft:sandstone',
        [
            event.recipes.createDeploying('minecraft:sandstone', ['minecraft:sandstone', 'minecraft:clay_ball']),
            event.recipes.createDeploying('minecraft:sandstone', ['minecraft:sandstone', 'minecraft:brick']),
            event.recipes.createDeploying('minecraft:sandstone', ['minecraft:sandstone', 'minecraft:nether_brick'])
        ]).transitionalItem('minecraft:sandstone').loops(4)
})