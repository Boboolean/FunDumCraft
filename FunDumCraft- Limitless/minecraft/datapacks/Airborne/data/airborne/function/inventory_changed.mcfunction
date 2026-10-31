advancement revoke @s only airborne:inventory_changed
#Detector
#say Inventory changed!
# Weight system
scoreboard players set @s weight 0
scoreboard players set @s inventory_slots 36
#execute if entity @s[nbt={Inventory:[{Slot:103b,id:"create:copper_diving_helmet"}]}] run scoreboard players operation @s weight += @s copper_diving_helmet_weight
execute if entity @s[nbt={Inventory:[{Slot:102b,id:"create:copper_backtank"}]}] run scoreboard players operation @s weight += @s copper_backtank_weight
execute if entity @s[nbt={Inventory:[{Slot:102b,id:"create:netherite_backtank"}]}] run scoreboard players operation @s weight += @s netherite_backtank_weight
scoreboard players operation @s inventory_slots -= @s weight
data modify storage airborne:weight_function slots set value {"slots":0}
execute store result storage airborne:weight_function slots int 1 run scoreboard players get @s inventory_slots
function airborne:weight with storage airborne:weight_function