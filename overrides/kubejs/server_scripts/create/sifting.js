//机械动力筛子配方
ServerEvents.recipes(event => {
    event.custom({
        "type": "createsifter:sifting",
        "ingredients": [
            {
                "item": "minecraft:gravel"
            },
            {
                "item": "createsifter:custom_mesh"
            }
        ],
        "results": [
            {
                "item": "create:crushed_raw_osmium",
                "chance": 0.1
            },
            {
                "item": "create:crushed_raw_silver",
                "chance": 0.1
            },
            {
                "item": "create:crushed_raw_tin",
                "chance": 0.15
            },
            {
                "item": "create:crushed_raw_lead",
                "chance": 0.1
            },
            {
                "item": "create:crushed_raw_aluminum",
                "chance": 0.1
            },
            {
                "item": "create:crushed_raw_uranium",
                "chance": 0.1
            },
            {
                "item": "create:crushed_raw_nickel",
                "chance": 0.1
            }
        ],
        "processingTime": 500,
        "waterlogged": false
    })
    event.custom({
        "type": "createsifter:sifting",
        "ingredients": [
            {
                "item": "minecraft:sand"
            },
            {
                "item": "createsifter:custom_mesh"
            }
        ],
        "results": [
            {
                "item": "thermal:apatite",
                "chance": 0.1
            },
            {
                "item": "thermal:cinnabar",
                "chance": 0.1
            },
            {
                "item": "thermal:niter",
                "chance": 0.1
            },
            {
                "item": "thermal:sulfur",
                "chance": 0.1
            },
            {
                "item": 'draconicevolution:draconium_dust',
                "chance": 0.01
            },
            {
                "item": 'thermal:ruby',
                "chance": 0.04
            },
            {
                "item": 'rftoolsbase:dimensionalshard',
                "chance": 0.01
            },
        ],
        "processingTime": 500,
        "waterlogged": false
    })
})