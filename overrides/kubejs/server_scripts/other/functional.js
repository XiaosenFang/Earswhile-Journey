ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'functionalstorage:storage_controller' },
        'minecraft:comparator',
        'advgenerators:controller'
    )

    //ban
    event.remove({output:'functionalstorage:collector_upgrade'})
    event.remove({output:'functionalstorage:ender_drawer'})
})