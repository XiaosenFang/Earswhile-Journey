ServerEvents.recipes(event => {
    //符文锻炉
    event.replaceInput(
        { output: 'mna:runeforge' },
        '#mna:stone_runes',
        '#botania:runes'
    )
})