ServerEvents.recipes(event => {
    event.remove({id:'create:crafting/materials/rose_quartz'})
    event.custom({
        "type": "bloodmagic:altar",
        "input": {
          "tag": "forge:gems/quartz"
        },
        "output": {
          "item": "create:rose_quartz"
        },
        "upgradeLevel": 1,
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 5
      })
})