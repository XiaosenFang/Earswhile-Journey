ServerEvents.recipes(event => {
    event.remove({output:'bloodmagic:daggerofsacrifice'})
    event.remove({output:Item.of('bloodmagic:sacrificialdagger')})
})