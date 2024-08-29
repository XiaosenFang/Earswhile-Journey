StartupEvents.registry('block', event => {
    event.create('trophy').hardness(1.0).stoneSoundType()
    event.create('globe').hardness(1.0).stoneSoundType()
    event.create('graphite_block').hardness(3.0).requiresTool(true).stoneSoundType().tagBlock('minecraft:mineable/pickaxe').tagBlock('forge:storage_blocks/graphite')
})