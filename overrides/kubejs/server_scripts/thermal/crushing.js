ServerEvents.recipes(event => {
    event.recipes.create.crushing('thermal:quartz_dust', 'minecraft:quartz')
    event.recipes.create.milling('thermal:quartz_dust', 'minecraft:quartz')
})