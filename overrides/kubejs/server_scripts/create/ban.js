ServerEvents.recipes(event => {
    event.remove({output:'create:item_vault'})
    event.remove({output:'create_connected:item_silo'})
    event.remove({output:'create_sa:vault_component'})
    event.remove({id:'createsifter:sifter'})
})