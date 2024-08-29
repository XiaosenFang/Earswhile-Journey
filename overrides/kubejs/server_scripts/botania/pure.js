//白雏菊
ServerEvents.recipes(event => {
    //活石
    event.remove({id:'botania:pure_daisy/livingrock'})
    event.recipes.botania.pure_daisy('botania:livingrock','occultism:otherstone',1800)
    event.recipes.botania.pure_daisy( 'botania:livingrock','pneumaticcraft:reinforced_stone',1000)
    //活木
    event.remove({id:'botania:pure_daisy/livingwood'})
    event.recipes.botania.pure_daisy('botania:livingwood_log','#twilightforest:logs', 1200)
    event.recipes.botania.pure_daisy( 'botania:livingwood_log','#bule_skies:logs',1200)
})