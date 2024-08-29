ServerEvents.recipes(event => {
    //花药台
    event.replaceInput(
        [{ output: 'botania:apothecary_deepslate' }, { output: 'botania:apothecary_default' }, { output: 'botania:apothecary_forest' }, { output: 'botania:apothecary_plains' }, { output: 'botania:apothecary_mountain' }, { output: 'botania:apothecary_fungal' }, { output: 'botania:apothecary_swamp' }, { output: 'botania:apothecary_desert' }, { output: 'botania:apothecary_taiga' }, { output: 'botania:apothecary_mesa' }, { output: 'botania:apothecary_mossy' }, { output: 'botania:apothecary_livingrock' }],
        '#botania:petals',
        'kubejs:luminous_pith'
    );
    //符文祭坛
    event.remove({ output: 'botania:runic_altar' })
    event.shaped(
        Item.of('botania:runic_altar'),
        [
            ' A ',
            'BCB',
            'DBD'
        ],
        {
            C: 'botania:mana_diamond',
            B: 'botania:livingrock',
            A: 'embers:ember_crystal',
            D: 'botania:mana_pearl'
        }
    )
    //稀释魔力池
    event.remove({ output: 'botania:diluted_pool' })
    event.shaped(
        Item.of('botania:diluted_pool'),
        [
            'ABA',
            'CAC'
        ],
        {
            A: 'botania:livingrock_slab',
            B: 'botania:living_root',
            C: 'botania:livingrock'
        }
    )
    //普通魔力池
    event.remove({ output: 'botania:mana_pool' })
    event.shaped(
        Item.of('botania:mana_pool'),
        [
            'ABA',
            'CDC'
        ],
        {
            A: 'botania:livingrock_slab',
            B: 'botania:diluted_pool',
            C: 'botania:livingrock',
            D:'botania:mana_tablet'
        }
    )
})