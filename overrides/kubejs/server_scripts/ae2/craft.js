ServerEvents.recipes(event => {
    event.replaceInput({ output: 'ae2:quartz_glass' }, 'ae2:certus_quartz_dust', '#ae2:quartz_dust')
    event.replaceInput({ output: 'ae2:quartz_fiber' }, 'ae2:certus_quartz_dust', '#ae2:quartz_dust')
    //谐振仓
    event.replaceInput({ output: 'ae2:vibration_chamber' }, 'ae2:energy_acceptor', 'advgenerators:controller')
    //接收器
    event.replaceInput({ output: 'ae2:energy_acceptor' }, 'minecraft:copper_ingot', 'ae2:vibration_chamber')
    //照面面板
    event.replaceInput({ output: 'ae2:semi_dark_monitor' }, 'minecraft:redstone', Item.of('rftoolsutility:screen_link', '{Damage:0}'))
    //无线接收器
    event.replaceInput({ output: 'ae2:wireless_receiver' }, 'ae2:fluix_pearl', 'ae2:fluix_block')
    event.replaceInput({ output: 'ae2:wireless_receiver' }, 'ae2:quartz_fiber', 'occultism:storage_remote_inert')
    //存储总线
    event.replaceInput({ output: 'ae2:storage_bus' }, '#ae2:interface', '#forge:chests')
})