ServerEvents.recipes(event => {
    //机械手
    event.replaceInput(
        { output: 'create:deployer' },
        'create:electron_tube',
        'create:piston_extension_pole'
    )
})