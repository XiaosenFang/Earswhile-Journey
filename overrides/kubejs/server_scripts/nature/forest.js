//森林仪式
ServerEvents.recipes(event => {
    //愉悦
    event.replaceInput(
        { output: 'naturesaura:token_joy' },
        'minecraft:torch',
        'botania:agricarnation'
    )
    //恐惧
    event.replaceInput(
        { output: 'naturesaura:token_fear' },
        'minecraft:feather',
        'botania:dreadthorn'
    )
    //愤怒
    event.replaceInput(
        { output: 'naturesaura:token_anger' },
        'minecraft:ender_pearl',
        'botania:exoflame'
    )
    //忧伤
    event.replaceInput(
        { output: 'naturesaura:token_sorrow' },
        'minecraft:ghast_tear',
        'botania:hydroangeas'
    )
})