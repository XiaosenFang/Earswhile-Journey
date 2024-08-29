ServerEvents.recipes(event => {
    //机械核心
    event.remove({ output: 'embers:mechanical_core' })
    event.shaped(
        Item.of('embers:mechanical_core'),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'embers:caminite_bricks',
            C: '#forge:plates/lead',
            D: 'naturesaura:eye'
        }
    )
    //灰烬开采机
    event.replaceInput(
        { output: 'embers:ember_bore' },
        'minecraft:copper_ingot',
        'botania:manasteel_ingot'
    )
    //pedestal
    event.remove({ output: 'embers:mechanical_core' })
    event.shaped(
        Item.of('embers:mechanical_core'),
        [
            'A A',
            'CDC',
            'ACA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'embers:caminite_bricks',
            C: '#forge:plates/lead',
            D: 'naturesaura:eye'
        }
    )
})