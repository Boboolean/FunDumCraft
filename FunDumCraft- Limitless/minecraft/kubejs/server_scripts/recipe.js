ServerEvents.recipes(event => {
    event.shaped('aeronautics:adjustable_burner',[
        'A A',
        'ABA',
        'CDC'
    ],{
        A: 'create:iron_sheet',
        B: 'minecraft:netherrack',
        C: 'create:andesite_alloy',
        D: 'minecraft:redstone'
    })
    event.shaped('minecraft:beacon',[
        'AAA',
        'ABA',
        'CDC'
    ],{
        A: 'minecraft:glass',
        B: 'create_enchantment_industry:super_enchanting_template',
        C: 'minecraft:obsidian',
        D: 'enderscape:nebulite_block'
    })
    event.shaped('minecraft:lodestone',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'minecraft:chiseled_stone_bricks',
        B: 'minecraft:iron_ingot'
    })
    event.shaped('aperture_innovations:portal_gun[aperture_innovations:portal_gun_variant="aperture_innovations:chell"]',[
        'AED',
        'ABD',
        'ACA'
    ],{
        A: 'antarchy:titanium_ingot',
        B: 'minecraft:nether_star',
        C: 'antarchy:bluestone_comparator',
        D: 'antarchy:nightmare_scale',
        E: 'minecraft:netherite_ingot'
    })
    event.shapeless('aperture_innovations:portal_gun[aperture_innovations:portal_gun_variant="aperture_innovations:atlas"]', [
        'aperture_innovations:portal_gun',
        'minecraft:amethyst_shard'])
    event.shapeless('aperture_innovations:portal_gun[aperture_innovations:portal_gun_variant="aperture_innovations:pbody"]', [
        'aperture_innovations:portal_gun',
        'minecraft:blaze_powder'])
    event.shapeless('aperture_innovations:portal_gun[aperture_innovations:portal_gun_variant="aperture_innovations:reloaded"]', [
        'aperture_innovations:portal_gun',
        'minecraft:emerald'])
    event.shapeless('aperture_innovations:portal_gun[aperture_innovations:portal_gun_variant="aperture_innovations:chell"]', [
        'aperture_innovations:portal_gun',
        'supplementaries:soap'])
    event.shaped('4x aperture_innovations:concrete_surface_block',[
        'AB',
        'BA'
    ],{
        A: 'stellaris:moon_stone_dust',
        B: 'minecraft:quartz'
    })
    event.shaped('2x tempad:time_steel',[
        'AB',
        'BA'
    ],{
        A: 'minecraft:netherite_scrap',
        B: 'enderscape:shadoline_ingot'
    })
    event.shaped('tempad:tempad',[
        'AAA',
        'BCD',
        'EFE'
    ],{
        A: 'minecraft:tinted_glass',
        B: 'vista:mirror',
        C: 'enderscape:mirror[enderscape:current_nebulite_fuel=5]',
        D: 'minecraft:redstone_lamp',
        E: 'tempad:time_steel',
        F: 'tempad:chronon_battery'
    })

    event.recipes.create.compacting([Item.of('minecraft:stone_bricks', 4), CreateItem.of('dungeonsdelight:silverfish_abdomen', 0.5)], [
        Item.of('minecraft:infested_stone', 4)])
    event.recipes.create.compacting('create_enchantment_industry:enchanting_template',
        ['create:experience_block', 'minecraft:lapis_block']).superheated()
    event.recipes.create.compacting('create_enchantment_industry:super_enchanting_template',
        ['create_enchantment_industry:super_experience_block', 'minecraft:nether_star']).superheated()
    event.recipes.create.compacting(Fluid.of('minecraft:water', 250),
        ['minecraft:chorus_fruit'])
    event.recipes.create.compacting(Fluid.of('minecraft:water', 1000),
        ['minecraft:chorus_flower'])
    event.shapeless('create:dough', [
        'create:wheat_flour',
        'minecraft:water_bucket']).replaceIngredient({ item: 'minecraft:water_bucket'}, 'minecraft:bucket')
    event.recipes.create.mixing('create:dough', ['create:wheat_flour', Fluid.of('minecraft:water', 100)])
    event.shapeless('farmersdelight:wheat_dough', [
        'create:dough',
        'minecraft:egg'])
    event.recipes.create.crushing('stellaris:moon_cobblestone', 'stellaris:moon_stone')
    event.recipes.create.crushing('stellaris:moon_stone_dust', 'stellaris:moon_cobblestone')
    event.recipes.create.mixing('2x tempad:time_steel', ['enderscape:shadoline_ingot', 'minecraft:netherite_scrap']).superheated()
})

ServerEvents.recipes(event => {
    //Remove by recipe ID
    [
        'minecraft:beacon',
        'modestmagic:enchantment_tablet',
        'minecraft:cutting/calibrated_sculk_sensor',
        'minecraft:sugar_from_sugar_cane',
        'mynethersdelight:crafting/sugar_alt',
        'minecraft:bread',
        'create:crafting/appliances/dough',
        'create:splashing/wheat_flour',
        'create:mixing/dough_by_mixing',
        'farmersdelight:wheat_dough_from_water',
        'beansbackpacks:iron_backpack',
        'beansbackpacks:gold_backpack',
        'create:crafting/kinetics/steam_engine',
        'create:crafting/appliances/copper_backtank',
        'aeronautics:steam_vent',
        'create:milling/cobblestone',
        'create:haunting/soul_sand',
        'enderscape:nebulite_from_smelting_nebulite_ore',
        'enderscape:nebulite_from_blasting_nebulite_ore',
        'aeronautics:adjustable_burner',
        'aeroworks:gyroscope',
        'aeronautics_utility_objects:damping_stress_bearing',
        'endermanoverhaul:ender_pearl',
        'aperture_innovations:concrete_surface_block',
        'tempad:time_steel_shaped',
        'tempad:time_steel_create'

    ].forEach((recipeID) => event.remove({id: recipeID}));
    
    //Remove by item ID
    [
        'create_enchantment_industry:experience_cake_slice',
        'minecraft:amethyst_shard',
        'minecraft:turtle_helmet',
        'minecraft:experience_bottle',
        'minecraft:heart_of_the_sea',
        'farmersdelight:wheat_dough',
        'minecraft:lodestone',
        'minecraft:ender_chest',
        'aperture_innovations:portal_gun',
        'tempad:tempad'
    ].forEach((itemID) => event.remove({output: itemID}));
    
    //Remove all recipes an item is related to. For example putting 'minecraft:bonemeal' here would remove the recipe for bone blocks as well.
    [

    ].forEach((ingredientID) => event.remove({input: ingredientID}));
})