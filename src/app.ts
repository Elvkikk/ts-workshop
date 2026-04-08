import {ingredients, potions, recipes,} from "./data";

function getPotionById(id: string) {
  return potions.find((p) => p.id === id);
} 

function getIngredientById(id: string) {
  return ingredients.find((i) => i.id === id);
}

function getPotionDetails(potionId: string) {
  const recipe = recipes.find((r) => r.result === potionId);
  if (!recipe) return null;

  const potion = getPotionById(potionId);
  if (!potion) return null;

  const ingredientDetails = recipe.ingredients.map(getIngredientById);
  if (ingredientDetails.includes(undefined)) return null;

  return {
    potion,
    ingredients: ingredientDetails as typeof ingredients[0][],
  };
}

// Divcontainer for the potion crafting interface
const divcontainer = document.createElement("div");
divcontainer.className = "container";
divcontainer.id = "potion-container";
document.body.appendChild(divcontainer);

// Create elements for each ingredient and potion

// Fire Element div
const fireElement = document.createElement("div");
fireElement.className = "element fire";
fireElement.textContent = "Fire";
divcontainer.appendChild(fireElement);

// Ember Root div inside Fire div with the same id as in the data.ts file
const emberRoot = document.createElement("div");
emberRoot.className = "element ember";
emberRoot.id = "ing_1";
emberRoot.textContent = "Ember Root";
fireElement.appendChild(emberRoot);

// Blazing Petal div inside Fire div with the same id as in the data.ts file
const blazingPetal = document.createElement("div");
blazingPetal.className = "element blazing";
blazingPetal.id = "ing_2";
blazingPetal.textContent = "Blazing Petal";
fireElement.appendChild(blazingPetal);

// Ash Mushroom div inside Fire div with the same id as in the data.ts file
const ashMushroom = document.createElement("div");
ashMushroom.className = "element ash";
ashMushroom.id = "ing_3";
ashMushroom.textContent = "Ash Mushroom";
fireElement.appendChild(ashMushroom);

// Flame Dust div inside Fire div with the same id as in the data.ts file   
const flameDust = document.createElement("div");
flameDust.className = "element flame";
flameDust.id = "ing_4";
flameDust.textContent = "Flame Dust";
fireElement.appendChild(flameDust);

// Cinder Shard div inside Fire div with the same id as in the data.ts file
const cinderShard = document.createElement("div");
cinderShard.className = "element cinder";
cinderShard.id = "ing_5";
cinderShard.textContent = "Cinder Shard";
fireElement.appendChild(cinderShard);

// Water Element div
const waterElement = document.createElement("div");
waterElement.className = "element water";
waterElement.textContent = "Water";
divcontainer.appendChild(waterElement);

// Aqua Leaf div inside Water div with the same id as in the data.ts file
const aquaLeaf = document.createElement("div");
aquaLeaf.className = "element aqua";
aquaLeaf.id = "ing_6";
aquaLeaf.textContent = "Aqua Leaf";
waterElement.appendChild(aquaLeaf);

// Frost Berry div inside Water div with the same id as in the data.ts file
const frostBerry = document.createElement("div");
frostBerry.className = "element frost";
frostBerry.id = "ing_7";
frostBerry.textContent = "Frost Berry";
waterElement.appendChild(frostBerry);

// Mist Pearl div inside Water div with the same id as in the data.ts file
const mistPearl = document.createElement("div");
mistPearl.className = "element mist";
mistPearl.id = "ing_8";
mistPearl.textContent = "Mist Pearl";
waterElement.appendChild(mistPearl);

// Deep Sea Herb div inside Water div with the same id as in the data.ts file
const deepSeaHerb = document.createElement("div");
deepSeaHerb.className = "element deepsea";
deepSeaHerb.id = "ing_9";
deepSeaHerb.textContent = "Deep Sea Herb";
waterElement.appendChild(deepSeaHerb);

// River Essence div inside Water div with the same id as in the data.ts file
const riverEssence = document.createElement("div");
riverEssence.className = "element river";
riverEssence.id = "ing_10";
riverEssence.textContent = "River Essence";
waterElement.appendChild(riverEssence);

// Earth Element div
const earthElement = document.createElement("div");
earthElement.className = "element earth";
earthElement.textContent = "Earth";
divcontainer.appendChild(earthElement);

// Stone Bark div inside Earth div with the same id as in the data.ts file
const stoneBark = document.createElement("div");
stoneBark.className = "element stone";
stoneBark.id = "ing_11";
stoneBark.textContent = "Stone Bark";
earthElement.appendChild(stoneBark);

// Moss Crystal div inside Earth div with the same id as in the data.ts file
const mossCrystal = document.createElement("div");
mossCrystal.className = "element moss";
mossCrystal.id = "ing_12";
mossCrystal.textContent = "Moss Crystal";
earthElement.appendChild(mossCrystal);

// Root Vine div inside Earth div with the same id as in the data.ts file
const rootVine = document.createElement("div");
rootVine.className = "element root";
rootVine.id = "ing_13";
rootVine.textContent = "Root Vine";
earthElement.appendChild(rootVine);

// Iron Seed div inside Earth div with the same id as in the data.ts file
const ironSeed = document.createElement("div");
ironSeed.className = "element iron";
ironSeed.id = "ing_14";
ironSeed.textContent = "Iron Seed";
earthElement.appendChild(ironSeed);

// Clay Core div inside Earth div with the same id as in the data.ts file
const clayCore = document.createElement("div");
clayCore.className = "element clay";
clayCore.id = "ing_15";
clayCore.textContent = "Clay Core";
earthElement.appendChild(clayCore);

// Air Element div   
const airElement = document.createElement("div");
airElement.className = "element air";
airElement.textContent = "Air";
divcontainer.appendChild(airElement);

// Wind Feather div inside Air div with the same id as in the data.ts file
const windFeather = document.createElement("div");
windFeather.className = "element wind";
windFeather.id = "ing_16";
windFeather.textContent = "Wind Feather";
airElement.appendChild(windFeather);

// Sky Crystal div inside Air div with the same id as in the data.ts file
const skyCrystal = document.createElement("div");
skyCrystal.className = "element sky";
skyCrystal.id = "ing_17";
skyCrystal.textContent = "Sky Crystal";
airElement.appendChild(skyCrystal);

// Cloud Puff div inside Air div with the same id as in the data.ts file
const cloudPuff = document.createElement("div");
cloudPuff.className = "element cloud";
cloudPuff.id = "ing_18";
cloudPuff.textContent = "Cloud Puff";
airElement.appendChild(cloudPuff);

// Storm Shard div inside Air div with the same id as in the data.ts file
const stormShard = document.createElement("div");
stormShard.className = "element storm";
stormShard.id = "ing_19";
stormShard.textContent = "Storm Shard";
airElement.appendChild(stormShard);

// Gale Dust div inside Air div with the same id as in the data.ts file
const galeDust = document.createElement("div");
galeDust.className = "element gale";
galeDust.id = "ing_20";
galeDust.textContent = "Gale Dust";
airElement.appendChild(galeDust);
