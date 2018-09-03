//Mod created by PROMIX
//version : 3.8
//data :
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

ore_ids = [14, 15, 16, 21, 14, 15, 16, 21, 56, 73, 129]

//code :
ModPE.setItem(1814, 'scissors', 0, 'Ножницы', '1');
Player.addItemCreativeInv(1814, 0);
ModPE.setItem(1813, 'magic_blade', 0, 'Магическое лезвие', '64');
Player.addItemCreativeInv(1813, 0);
ModPE.setItem(1812, 'magic_plate', 0, 'Магическая пластина', '64');
Player.addItemCreativeInv(1812, 0);
ModPE.setItem(1902, 'ore_gen', 0, 'Радномный генератор руд', '1');
Player.addItemCreativeInv(1902, 0);
ModPE.setItem(1815, 'destroyer', 0, 'УНИЧТОЖИТЕЛЬ', '1');
Player.addItemCreativeInv(1815, 0);
Item.setHandEquipped(1815, true);
ModPE.setItem(1900, 'block_skipper', 0, '3х3х3 Скиппер', '1');
Player.addItemCreativeInv(1900, 0);
ModPE.setItem(1801, 'crystal_of_fire_0', 0, 'Кристалл огня', '64');
Player.addItemCreativeInv(1801, 0);
ModPE.setItem(1802, 'crushed_crystal_of_fire_0', 0, 'Раздробленный кристал огня', '64');
Player.addItemCreativeInv(1802, 0);
ModPE.setItem(1810, 'magic_wand_0', 0, 'Посох огня', '1');
Player.addItemCreativeInv(1810, 0);
ModPE.setItem(1804, 'magic_alloy_0', 0, 'Магический сплав', '64');
Player.addItemCreativeInv(1804, 0);
ModPE.setItem(1805, 'bucket_of_iron_0', 0, 'Ведро расплавленного железа', '1');
Player.addItemCreativeInv(1805, 0);
ModPE.setItem(1806, 'bucket_of_diamond_0', 0, 'Ведро расплавленных алмазов', '1');
Player.addItemCreativeInv(1806, 0);
ModPE.setItem(1803, 'hammer_0', 0, 'Хрупкий молот', '1');
Player.addItemCreativeInv(1803, 0);
ModPE.setItem(1807, 'bucket_of_magic_alloy_0', 0, 'Ведро магического сплава', '1');
Player.addItemCreativeInv(1807, 0);
ModPE.setItem(1800, 'magic_stick_0', 0, 'Магическая палка', '64');
Player.addItemCreativeInv(1800, 0);
ModPE.setItem(1811, 'magic_wand_of_ice_0', 0, 'Посох льда', '1');
Player.addItemCreativeInv(1811, 0);
ModPE.setItem(1808, 'crystal_of_ice', 0, 'Кристалл льда', '64');
Player.addItemCreativeInv(1808, 0);
ModPE.setItem(1809, 'crushed_crystal_of_ice_0', 0, 'Раздробленный кристал льда', '64');
Player.addItemCreativeInv(1809, 0);

function attackHook(attacker,victim)
{
if(getCarriedItem() == 1810)
{
Entity.setFireTicks(victim,30);
}
}
function useItem(x, y, z, itemId, blockId, side)
{
if(itemId == 1810)
{
setTile(x, y+1, z, 51, 0)
setTile(x+1, y+1, z+1, 51, 0)
setTile(x-1, y+1, z-1, 51, 0)
setTile(x+1, y+1, z-1, 51, 0)
setTile(x-1, y+1, z+1, 51, 0)
}
}

function attackHook(attacker, victim)
{
if(getCarriedItem() == 1811)
{
Entity.addEffect(victim, 2, 200, 200, true, true)
}
}

function useItem(x, y, z, itemId, blockId, side)
{
if(itemId == 1900)
{
setTile(x, y-1, z, 0, 0)
setTile(x, y+1, z, 0, 0)
setTile(x+1, y-1, z, 0, 0)
setTile(x-1, y-1, z, 0, 0)
setTile(x-1, y+1, z, 0, 0)
setTile(x+1, y+1, z, 0, 0)
setTile(x+1, y, z, 0, 0)
setTile(x-1, y, z, 0, 0)
setTile(x, y, z, 0, 0)
setTile(x, y-1, z+1, 0, 0)
setTile(x, y+1, z+1, 0, 0)
setTile(x+1, y-1, z+1, 0, 0)
setTile(x-1, y-1, z+1, 0, 0)
setTile(x-1, y+1, z+1, 0, 0)
setTile(x+1, y+1, z+1, 0, 0)
setTile(x+1, y, z+1, 0, 0)
setTile(x-1, y, z+1, 0, 0)
setTile(x, y, z+1, 0, 0)
setTile(x, y-1, z-1, 0, 0)
setTile(x, y+1, z-1, 0, 0)
setTile(x+1, y-1, z-1, 0, 0)
setTile(x-1, y-1, z-1, 0, 0)
setTile(x-1, y+1, z-1, 0, 0)
setTile(x+1, y+1, z-1, 0, 0)
setTile(x+1, y, z-1, 0, 0)
setTile(x-1, y, z-1, 0, 0)
setTile(x, y, z-1, 0, 0)
}
}

function attackHook(attacker,victim)
{
if(getCarriedItem() == 1815)
{
Entity.setHealth(victim,Entity.getHealth(victim)-35);
}
}

function useItem(x, y, z, itemId, blockId, side)
{
if(itemId == 1902)
{
setTile(x, y+1, z, randomChoice(ore_ids), 0)
}
}
Item.addShapedRecipe(1801, 1, 0, ['abc','def','ghi'], ['b', 289, 0, 'e', 264, 0, 'h', 289, 0]);
Item.addShapedRecipe(1802, 1, 0, ['abc','def','ghi'], ['d', 1803, 0, 'e', 1801, 0]);
Item.addShapedRecipe(1803, 1, 0, ['abc','def','ghi'], ['b', 265, 0, 'c', 265, 0, 'e', 280, 0, 'f', 265, 0, 'g', 280, 0]);
Item.addShapedRecipe(1804, 1, 0, ['abc','def','ghi'], ['b', 1803, 0, 'e', 1807, 0]);
Item.addShapedRecipe(1807, 1, 0, ['abc','def','ghi'], ['d', 1805, 0, 'f', 1806, 0]);
Item.addShapedRecipe(1808, 1, 0, ['abc','def','ghi'], ['b', 20, 0, 'e', 264, 0]);
Item.addShapedRecipe(1809, 1, 0, ['abc','def','ghi'], ['e', 1808, 0, 'f', 1803, 0]);
Item.addShapedRecipe(1810, 1, 0, ['abc','def','ghi'], ['c', 1802, 0, 'e', 1800, 0, 'g', 1800, 0]);
Item.addShapedRecipe(1811, 1, 0, ['abc','def','ghi'], ['c', 1809, 0, 'e', 1800, 0, 'g', 1800, 0]);
Item.addShapedRecipe(1812, 1, 0, ['abc','def','ghi'], ['e', 1804, 0, 'f', 1803, 0]);
Item.addShapedRecipe(1813, 1, 0, ['ooo','oab','ooo'], ['a', 1812, 0, 'b', 1814, 0]);
Item.addShapedRecipe(1814, 1, 0, ['aoa','oao','bob'], ['a', 265, 0, 'b', 5, 0]);
Item.addShapedRecipe(1815, 1, 0, ['oao','oao','obo'], ['a', 1813, 0, 'b', 1800, 0]);
Item.addFurnaceRecipe(265, 1805, 0);
Item.addFurnaceRecipe(264, 1806, 0);
Item.addFurnaceRecipe(1804, 1807, 0);
