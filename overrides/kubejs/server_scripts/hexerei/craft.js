ServerEvents.recipes(event => {
    //混合锅
    event.remove({ output: 'hexerei:mixing_cauldron' })
    event.shaped(
        Item.of('hexerei:mixing_cauldron'),
        [
            'A A',
            'BCB',
            'DBD'
        ],
        {
            A: 'minecraft:torch',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:cauldron',
            D: 'create:andesite_alloy'
        }
    )
})