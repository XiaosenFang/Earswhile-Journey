ServerEvents.recipes(event => {
    //窑砖
    event.replaceInput(
        { output: 'immersiveengineering:alloybrick' },
        'minecraft:brick',
        'kubejs:firebrick'
    )
    //轻型工程块
    event.replaceInput(
        { output: 'immersiveengineering:light_engineering' },
        'minecraft:copper_ingot',
        'thermal:rubber'
    )
    //红石工程块
    event.remove({ output: 'immersiveengineering:rs_engineering' })
    event.shaped(
        Item.of('immersiveengineering:rs_engineering',4),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'immersiveengineering:light_engineering',
            B: 'kubejs:sealing_ring',
            C: 'minecraft:redstone_block'
        }
    )
})