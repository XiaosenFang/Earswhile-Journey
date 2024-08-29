ItemEvents.tooltip(event => {
    //普通提示
    event.add(['kubejs:trophy'],Text.translatable('kubejs.tips.lang.trophy'))
    event.add(['kubejs:globe'],Text.translatable('kubejs.tips.lang.globe'))

    //ban
    event.add(['create:item_vault'],Text.translatable('kubejs.ban')).red()
    event.add(['create_connected:item_silo'],Text.translatable('kubejs.ban')).red()
    event.add(['create_sa:vault_component'],Text.translatable('kubejs.ban')).red()
    event.add(['occultism:storage_controller'],Text.translatable('kubejs.ban')).red()
    event.add(['occultism:storage_controller_base'],Text.translatable('kubejs.ban')).red()
    event.add(['occultism:storage_remote'],Text.translatable('kubejs.ban')).red()
    event.add(['functionalstorage:ender_drawer'],Text.translatable('kubejs.ban')).red()
    event.add(['functionalstorage:collector_upgrade'],Text.translatable('kubejs.ban')).red()
    event.add(['bloodmagic:sacrificialdagger'],Text.translatable('kubejs.ban')).red()
    event.add(['bloodmagic:daggerofsacrifice'],Text.translatable('kubejs.ban')).red()
})