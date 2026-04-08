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



// Earth Element div
const earthElement = document.createElement("div");
earthElement.className = "element earth";
earthElement.textContent = "Earth";
divcontainer.appendChild(earthElement);

// Air Element div   
const airElement = document.createElement("div");
airElement.className = "element air";
airElement.textContent = "Air";
divcontainer.appendChild(airElement);
