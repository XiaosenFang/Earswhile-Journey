ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:handsaw'),
        [
            " E ",
            'EAC',
            ' ED'
        ],
        {
            A: 'minecraft:iron_ingot',
            C: 'minecraft:stick',
            D: '#minecraft:planks',
            E: 'minecraft:iron_nugget'
        }
    )
    event.shaped(
        Item.of('kubejs:handsaw'),
        [
            'EA ',
            ' ED'
        ],
        {
            A: '#forge:plates/iron',
            D: '#minecraft:planks',
            E: 'minecraft:iron_nugget'
        }
    )
})