import { ingredients, potions, recipes } from "./data.js";
/*
// Background image rotation
const images: string[] = [
  './src/img/3cw5Fn.webp',
  './src/img/12109826-air-wallpaper.jpg',
  './src/img/abstract-orange-smoke-and-red-fire-flies-in-waves-and-flying-particles-bright-glowing-sparks-with-blur-effect-abstract-background-in-high-quality-4k-motion-design-video.jpg',
  './src/img/download.jpeg',
  './src/img/earth-galaxy-elements-this-image-furnished-by-nasa_335224-750.avif',
  './src/img/images.jpeg',
  './src/img/water-wave-macro-photography-144238.jpeg'
];

// Index to keep track of the current image
let currentIndex: number = 0; 
const bgElement = document.createElement('div'); 
bgElement.className = 'background';
bgElement.id = 'bg-container';
document.body.appendChild(bgElement);

// Function to change the background image
function changeBackground(): void {
  // Apply the new image
  bgElement.style.backgroundImage = `url('${images[currentIndex]}')`;

  // Move to the next index (image), and back to 0 (first image) when the end is reached in the array of images
  currentIndex = (currentIndex + 1) % images.length;
}

// Initial call to set the first image
changeBackground();

// Set the interval (e.g., 5000ms = 5 seconds)
setInterval(changeBackground, 10000);
*/
// Divcontainer for the potion crafting interface
const divcontainer = document.createElement("div");
divcontainer.className = "container";
divcontainer.id = "potion-container";
document.body.appendChild(divcontainer);

// Create elements for each ingredient and potion

// Fire Element div
const fireElement = document.createElement("div");
fireElement.className = "element-fire";
fireElement.textContent = "Fire";
divcontainer.appendChild(fireElement);

// Ember Root div inside Fire div with the same id as in the data.ts file
const emberRoot = document.createElement("div");
emberRoot.className = "element-ember";

// Ember Root button inside Ember Root div
const emberBtn = document.createElement("button");
emberBtn.textContent = "Ember Root";
emberBtn.className = "ember-button";
emberBtn.id = "ing_1";

emberRoot.appendChild(emberBtn);
fireElement.appendChild(emberRoot);

// Blazing Petal div inside Fire div with the same id as in the data.ts file
const blazingPetal = document.createElement("div");
blazingPetal.className = "element-blazing";

// Blazing Petal button inside Blazing Petal div
const blazingPetalBtn = document.createElement("button");
blazingPetalBtn.textContent = "Blazing Petal";
blazingPetalBtn.className = "blazing-button";
blazingPetalBtn.id = "ing_2";

blazingPetal.appendChild(blazingPetalBtn);
fireElement.appendChild(blazingPetal);

// Ash Mushroom div inside Fire div with the same id as in the data.ts file
const ashMushroom = document.createElement("div");
ashMushroom.className = "element-ash";

// Ash Mushroom button inside Ash Mushroom div
const ashMushroomBtn = document.createElement("button");
ashMushroomBtn.textContent = "Ash Mushroom";
ashMushroomBtn.className = "ash-button";
ashMushroomBtn.id = "ing_3";

ashMushroom.appendChild(ashMushroomBtn);
fireElement.appendChild(ashMushroom);

// Flame Dust div inside Fire div with the same id as in the data.ts file   
const flameDust = document.createElement("div");
flameDust.className = "element-flame";

// Flame Dust button inside Flame Dust div
const flameDustBtn = document.createElement("button");
flameDustBtn.textContent = "Flame Dust";
flameDustBtn.className = "flame-button";
flameDustBtn.id = "ing_4";

flameDust.appendChild(flameDustBtn);
fireElement.appendChild(flameDust);

// Cinder Shard div inside Fire div with the same id as in the data.ts file
const cinderShard = document.createElement("div");
cinderShard.className = "element-cinder";

// Cinder Shard button inside Cinder Shard div
const cinderShardBtn = document.createElement("button");
cinderShardBtn.textContent = "Cinder Shard";
cinderShardBtn.className = "cinder-button";
cinderShardBtn.id = "ing_5";

cinderShard.appendChild(cinderShardBtn);
fireElement.appendChild(cinderShard);

// Water Element div
const waterElement = document.createElement("div");
waterElement.className = "element-water";
waterElement.textContent = "Water";
divcontainer.appendChild(waterElement);

// Aqua Leaf div inside Water div with the same id as in the data.ts file
const aquaLeaf = document.createElement("div");
aquaLeaf.className = "element-aqua";

// Aqua Leaf button inside Aqua Leaf div
const aquaLeafBtn = document.createElement("button");
aquaLeafBtn.textContent = "Aqua Leaf";
aquaLeafBtn.className = "aqua-button";
aquaLeafBtn.id = "ing_6";

aquaLeaf.appendChild(aquaLeafBtn);
waterElement.appendChild(aquaLeaf);

// Frost Berry div inside Water div with the same id as in the data.ts file
const frostBerry = document.createElement("div");
frostBerry.className = "element-frost";

// Frost Berry button inside Frost Berry div
const frostBerryBtn = document.createElement("button");
frostBerryBtn.textContent = "Frost Berry";
frostBerryBtn.className = "frost-button";
frostBerryBtn.id = "ing_7";

frostBerry.appendChild(frostBerryBtn);
waterElement.appendChild(frostBerry);

// Mist Pearl div inside Water div with the same id as in the data.ts file
const mistPearl = document.createElement("div");
mistPearl.className = "element-mist";

// Mist Pearl button inside Mist Pearl div
const mistPearlBtn = document.createElement("button");
mistPearlBtn.textContent = "Mist Pearl";
mistPearlBtn.className = "mist-button";
mistPearlBtn.id = "ing_8";

mistPearl.appendChild(mistPearlBtn);
waterElement.appendChild(mistPearl);

// Deep Sea Herb div inside Water div with the same id as in the data.ts file
const deepSeaHerb = document.createElement("div");
deepSeaHerb.className = "element-deepsea";

// Deep Sea Herb button inside Deep Sea Herb div
const deepSeaHerbBtn = document.createElement("button");
deepSeaHerbBtn.textContent = "Deep Sea Herb";
deepSeaHerbBtn.className = "deepsea-button";
deepSeaHerbBtn.id = "ing_9";

deepSeaHerb.appendChild(deepSeaHerbBtn);
waterElement.appendChild(deepSeaHerb);

// River Essence div inside Water div with the same id as in the data.ts file
const riverEssence = document.createElement("div");
riverEssence.className = "element-river";

// River Essence button inside River Essence div
const riverEssenceBtn = document.createElement("button");
riverEssenceBtn.textContent = "River Essence";
riverEssenceBtn.className = "river-button";
riverEssenceBtn.id = "ing_10";

riverEssence.appendChild(riverEssenceBtn);
waterElement.appendChild(riverEssence);

// Earth Element div
const earthElement = document.createElement("div");
earthElement.className = "element-earth";
earthElement.textContent = "Earth";
divcontainer.appendChild(earthElement);

// Stone Bark div inside Earth div with the same id as in the data.ts file
const stoneBark = document.createElement("div");
stoneBark.className = "element-stone";

// Stone Bark button inside Stone Bark div
const stoneBarkBtn = document.createElement("button");
stoneBarkBtn.textContent = "Stone Bark";
stoneBarkBtn.className = "stone-button";
stoneBarkBtn.id = "ing_11";

stoneBark.appendChild(stoneBarkBtn);
earthElement.appendChild(stoneBark);

// Moss Crystal div inside Earth div with the same id as in the data.ts file
const mossCrystal = document.createElement("div");
mossCrystal.className = "element-moss";

// Moss Crystal button inside Moss Crystal div
const mossCrystalBtn = document.createElement("button");
mossCrystalBtn.textContent = "Moss Crystal";
mossCrystalBtn.className = "moss-button";
mossCrystalBtn.id = "ing_12";

mossCrystal.appendChild(mossCrystalBtn);
earthElement.appendChild(mossCrystal);

// Root Vine div inside Earth div with the same id as in the data.ts file
const rootVine = document.createElement("div");
rootVine.className = "element-root";

// Root Vine button inside Root Vine div
const rootVineBtn = document.createElement("button");
rootVineBtn.textContent = "Root Vine";
rootVineBtn.className = "root-button";
rootVineBtn.id = "ing_13";

rootVine.appendChild(rootVineBtn);
earthElement.appendChild(rootVine);

// Iron Seed div inside Earth div with the same id as in the data.ts file
const ironSeed = document.createElement("div");
ironSeed.className = "element-iron";

// Iron Seed button inside Iron Seed div
const ironSeedBtn = document.createElement("button");
ironSeedBtn.textContent = "Iron Seed";
ironSeedBtn.className = "iron-button";
ironSeedBtn.id = "ing_14";

ironSeed.appendChild(ironSeedBtn);
earthElement.appendChild(ironSeed);

// Clay Core div inside Earth div with the same id as in the data.ts file
const clayCore = document.createElement("div");
clayCore.className = "element-clay";

// Clay Core button inside Clay Core div
const clayCoreBtn = document.createElement("button");
clayCoreBtn.textContent = "Clay Core";
clayCoreBtn.className = "clay-button";
clayCoreBtn.id = "ing_15";

clayCore.appendChild(clayCoreBtn);
earthElement.appendChild(clayCore);

// Air Element div   
const airElement = document.createElement("div");
airElement.className = "element-air";
airElement.textContent = "Air";
divcontainer.appendChild(airElement);

// Wind Feather div inside Air div with the same id as in the data.ts file
const windFeather = document.createElement("div");
windFeather.className = "element-wind";

// Wind Feather button inside Wind Feather div
const windBtn = document.createElement("button");
windBtn.textContent = "Wind Feather";
windBtn.className = "wind-button";
windBtn.id = "ing_16";

windFeather.appendChild(windBtn);
airElement.appendChild(windFeather);

// Sky Crystal div inside Air div with the same id as in the data.ts file
const skyCrystal = document.createElement("div");
skyCrystal.className = "element-sky";

// Sky Crystal button inside Sky Crystal div
const skyBtn = document.createElement("button");
skyBtn.textContent = "Sky Crystal";
skyBtn.className = "sky-button";
skyBtn.id = "ing_17";

skyCrystal.appendChild(skyBtn);
airElement.appendChild(skyCrystal);

// Cloud Puff div inside Air div with the same id as in the data.ts file
const cloudPuff = document.createElement("div");
cloudPuff.className = "element-cloud";

// Cloud Puff button inside Cloud Puff div
const cloudBtn = document.createElement("button");
cloudBtn.textContent = "Cloud Puff";
cloudBtn.className = "cloud-button";
cloudBtn.id = "ing_18";

cloudPuff.appendChild(cloudBtn);
airElement.appendChild(cloudPuff);

// Storm Shard div inside Air div with the same id as in the data.ts file
const stormShard = document.createElement("div");
stormShard.className = "element-storm";

// Storm Shard button inside Storm Shard div
const stormBtn = document.createElement("button");
stormBtn.textContent = "Storm Shard";
stormBtn.className = "storm-button";
stormBtn.id = "ing_19";

stormShard.appendChild(stormBtn);
airElement.appendChild(stormShard);

// Gale Dust div inside Air div with the same id as in the data.ts file
const galeDust = document.createElement("div");
galeDust.className = "element-gale";

// Gale Dust button inside Gale Dust div
const galeBtn = document.createElement("button");
galeBtn.textContent = "Gale Dust";
galeBtn.className = "gale-button";
galeBtn.id = "ing_20";

galeDust.appendChild(galeBtn);
airElement.appendChild(galeDust);

// Selection and result display elements
const selectionWrapper = document.createElement("div");
selectionWrapper.className = "selection-wrapper";
document.body.appendChild(selectionWrapper);

const ingredientsRow = document.createElement("div");
ingredientsRow.className = "ingredients-row";
selectionWrapper.appendChild(ingredientsRow);

const firstIng= document.createElement("div");
firstIng.className = "first-ing";
firstIng.id = "first-ing";
ingredientsRow.appendChild(firstIng);

const secondIng= document.createElement("div");
secondIng.className = "second-ing";
secondIng.id = "second-ing";
ingredientsRow.appendChild(secondIng);

const imgDiv = document.createElement("div");
imgDiv.id = "imgDiv";
imgDiv.className = "potion-img-div";
selectionWrapper.appendChild(imgDiv);

const potionResult= document.createElement("div");
potionResult.className = "potion-result";
potionResult.id = "potion-result";
selectionWrapper.appendChild(potionResult);

// Clear selection button
const clearSelectionBtn = document.createElement("button");
clearSelectionBtn.className = "clear-selection-button";
clearSelectionBtn.id = "clear-selection-button";
clearSelectionBtn.textContent = "Clear";
selectionWrapper.appendChild(clearSelectionBtn);

// Array to keep track of selected ingredient IDs
const selectedIngredientIds: string[] = [];

const potionImageById: Record<string, string> = {
  pot_1: "./src/img/healing.png",
  pot_2: "./src/img/fire.png",
  pot_3: "./src/img/frost.png",
  pot_4: "./src/img/invisibility.png",
  pot_5: "./src/img/elixir.png",
  pot_6: "./src/img/stone.png",
  pot_7: "./src/img/srtike.png",
  pot_8: "./src/img/regeneration.png",
  pot_9: "./src/img/burst.png",
  pot_10: "./src/img/burst.png",
};

// Function to render an ingredient slot with a label and value
function renderIngredientSlot(
  container: HTMLDivElement,
  label: string,
  value: string,
): void {
  container.innerHTML = "";

  const labelElement = document.createElement("span");
  labelElement.className = "selection-label";
  labelElement.textContent = label;

  const valueElement = document.createElement("span");
  valueElement.className = "selection-value";
  valueElement.textContent = value;

  container.appendChild(labelElement);
  container.appendChild(valueElement);
}

function createPotionResultLayout(label: string): HTMLDivElement {
  potionResult.innerHTML = "";

  const labelElement = document.createElement("div");
  labelElement.className = "potion-result-label";
  labelElement.textContent = label;

  const valueElement = document.createElement("div");
  valueElement.className = "potion-result-value";

  potionResult.appendChild(labelElement);
  potionResult.appendChild(valueElement);

  return valueElement;
}

// Function to create a labeled value row for potion details
function createLabeledValueRow(label: string, value: string): HTMLParagraphElement {
  const row = document.createElement("p");
  row.className = "potion-detail-row";

  const labelElement = document.createElement("span");
  labelElement.className = "potion-detail-label";
  labelElement.textContent = `${label}: `;

  const valueElement = document.createElement("span");
  valueElement.className = "potion-detail-value";
  valueElement.textContent = value;

  row.appendChild(labelElement);
  row.appendChild(valueElement);

  return row;
}

// Function to render the selected ingredients
function renderSelection(): void {
  const firstIngredient = selectedIngredientIds[0]
    ? ingredients.find((ingredient) => ingredient.id === selectedIngredientIds[0])
    : null;
  const secondIngredient = selectedIngredientIds[1]
    ? ingredients.find((ingredient) => ingredient.id === selectedIngredientIds[1])
    : null;

  renderIngredientSlot(
    firstIng,
    "Första ingrediens",
    firstIngredient ? firstIngredient.name : "Inga val ännu",
  );
  renderIngredientSlot(
    secondIng,
    "Andra ingrediens",
    secondIngredient ? secondIngredient.name : "Inga val ännu",
  );

// Enable or disable the clear selection button based on whether any ingredients are selected
  clearSelectionBtn.disabled = selectedIngredientIds.length === 0;
}

// Function to render the potion result based on selected ingredients
function renderPotionResult(): void {
  const valueElement = createPotionResultLayout("Potionresultat");
  imgDiv.innerHTML = "";

  // Check if two ingredients are selected
  if (selectedIngredientIds.length < 2) {
    valueElement.textContent = "Inga valda ingredienser. Välj två ingredienser för att se resultatet.";
    return;
  }

  // Find a matching recipe based on the selected ingredient IDs
  const selected = [...selectedIngredientIds].sort(); // Sort the selected ingredient IDs to ensure order doesn't affect matching
  const matchedRecipe = recipes.find((recipe) => {
    const recipeIngredients = [...recipe.ingredients].sort();
    return (
      recipeIngredients.length === selected.length
      && recipeIngredients.every((ingredientId, index) => ingredientId === selected[index])
    );
  });

  if (!matchedRecipe) {
    valueElement.textContent = "Ingen potion hittades.";
    return;
  }

  const matchedPotion = potions.find((potion) => potion.id === matchedRecipe.result);
  if (!matchedPotion) {
    valueElement.textContent = "Recepten matchar ingen känd potion.";
    return;
  }

  const potionImageSrc = potionImageById[matchedPotion.id];
  if (potionImageSrc) {
    const potionImage = document.createElement("img");
    potionImage.className = "potion-image";
    potionImage.src = potionImageSrc;
    potionImage.alt = matchedPotion.name;
    imgDiv.appendChild(potionImage);
  } else {
    const fallbackText = document.createElement("p");
    fallbackText.className = "potion-image-fallback";
    fallbackText.textContent = "Ingen bild tillganglig for denna potion.";
    imgDiv.appendChild(fallbackText);
  }

  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "potion-description";
  descriptionDiv.appendChild(createLabeledValueRow("Name", matchedPotion.name));
  descriptionDiv.appendChild(createLabeledValueRow("Effect", matchedPotion.effect));
  descriptionDiv.appendChild(createLabeledValueRow("Hint", matchedPotion.hint));

  valueElement.appendChild(descriptionDiv);
}

// Function to handle ingredient button clicks
function handleIngredientClick(ingredientId: string): void {
  if (selectedIngredientIds.length === 2) {
    return;
  }

  selectedIngredientIds.push(ingredientId);
  renderSelection();
  renderPotionResult();
}

// Function to clear the selected ingredients and reset the display
function clearSelection(): void {
  selectedIngredientIds.length = 0;
  renderSelection();
  renderPotionResult();
}

// Attach click event listeners to all ingredient buttons
function attachIngredientEvents(): void {
  const ingredientButtons = divcontainer.querySelectorAll<HTMLButtonElement>("button[id^='ing_']"); // Select all buttons with ids starting with "ing_"
  ingredientButtons.forEach((button) => {
    button.addEventListener("click", () => {
      handleIngredientClick(button.id);
    });
  });

  clearSelectionBtn.addEventListener("click", clearSelection);
}

renderSelection();
renderPotionResult();
attachIngredientEvents();


