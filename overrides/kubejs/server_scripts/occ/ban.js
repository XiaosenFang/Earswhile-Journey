ServerEvents.recipes(event => {
    event.remove({output:'occultism:storage_controller'})
    event.remove({output:'occultism:storage_controller_base'})
    event.remove({output:'occultism:storage_remote'})
})