ServerEvents.recipes(event => {
    //红石伺服器
    event.remove({id:'thermal:redstone_servo'})
    event.shaped(
        Item.of('thermal:redstone_servo'),
        [
            "A",
            'B',
            'A'
        ],
        {
            A: 'minecraft:redstone',
            B: 'mna:superheated_vinteum_ingot',
        }
    )
})