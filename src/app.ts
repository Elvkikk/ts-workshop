import {ingredients, potions, recipes,} from "./data";

// Background image rotation
const images: string[] = [
  '../src/img/3cw5Fn.webp',
  '../src/img/12109826-air-wallpaper.jpg',
  '../src/img/abstract-orange-smoke-and-red-fire-flies-in-waves-and-flying-particles-bright-glowing-sparks-with-blur-effect-abstract-background-in-high-quality-4k-motion-design-video.jpg',
  '../src/img/download.jpeg',
  '../src/img/earth-galaxy-elements-this-image-furnished-by-nasa_335224-750.avif',
  '../src/img/images.jpeg',
  '../src/img/water-wave-macro-photography-144238.jpeg'
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

  // Move to the next index (image), or back to 0 (first image) if at the end
  currentIndex = (currentIndex + 1) % images.length;
}

// Initial call to set the first image
changeBackground();

// Set the interval (e.g., 5000ms = 5 seconds)
setInterval(changeBackground, 10000);

// Divcontainer for the potion crafting interface
const divcontainer = document.createElement("div");
divcontainer.className = "container";
divcontainer.id = "potion-container";
bgElement.appendChild(divcontainer);

// Create elements for each ingredient and potion

// Fire Element div
const fireElement = document.createElement("div");
fireElement.className = "element-fire";
fireElement.textContent = "Fire";
divcontainer.appendChild(fireElement);

// Ember Root div inside Fire div with the same id as in the data.ts file
const emberRoot = document.createElement("div");
emberRoot.className = "element-ember";
emberRoot.id = "ing_1";
emberRoot.textContent = "Ember Root";
fireElement.appendChild(emberRoot);

// Blazing Petal div inside Fire div with the same id as in the data.ts file
const blazingPetal = document.createElement("div");
blazingPetal.className = "element-blazing";
blazingPetal.id = "ing_2";
blazingPetal.textContent = "Blazing Petal";
fireElement.appendChild(blazingPetal);

// Ash Mushroom div inside Fire div with the same id as in the data.ts file
const ashMushroom = document.createElement("div");
ashMushroom.className = "element-ash";
ashMushroom.id = "ing_3";
ashMushroom.textContent = "Ash Mushroom";
fireElement.appendChild(ashMushroom);

// Flame Dust div inside Fire div with the same id as in the data.ts file   
const flameDust = document.createElement("div");
flameDust.className = "element-flame";
flameDust.id = "ing_4";
flameDust.textContent = "Flame Dust";
fireElement.appendChild(flameDust);

// Cinder Shard div inside Fire div with the same id as in the data.ts file
const cinderShard = document.createElement("div");
cinderShard.className = "element-cinder";
cinderShard.id = "ing_5";
cinderShard.textContent = "Cinder Shard";
fireElement.appendChild(cinderShard);

// Water Element div
const waterElement = document.createElement("div");
waterElement.className = "element-water";
waterElement.textContent = "Water";
divcontainer.appendChild(waterElement);

// Aqua Leaf div inside Water div with the same id as in the data.ts file
const aquaLeaf = document.createElement("div");
aquaLeaf.className = "element-aqua";
aquaLeaf.id = "ing_6";
aquaLeaf.textContent = "Aqua Leaf";
waterElement.appendChild(aquaLeaf);

// Frost Berry div inside Water div with the same id as in the data.ts file
const frostBerry = document.createElement("div");
frostBerry.className = "element-frost";
frostBerry.id = "ing_7";
frostBerry.textContent = "Frost Berry";
waterElement.appendChild(frostBerry);

// Mist Pearl div inside Water div with the same id as in the data.ts file
const mistPearl = document.createElement("div");
mistPearl.className = "element-mist";
mistPearl.id = "ing_8";
mistPearl.textContent = "Mist Pearl";
waterElement.appendChild(mistPearl);

// Deep Sea Herb div inside Water div with the same id as in the data.ts file
const deepSeaHerb = document.createElement("div");
deepSeaHerb.className = "element-deepsea";
deepSeaHerb.id = "ing_9";
deepSeaHerb.textContent = "Deep Sea Herb";
waterElement.appendChild(deepSeaHerb);

// River Essence div inside Water div with the same id as in the data.ts file
const riverEssence = document.createElement("div");
riverEssence.className = "element-river";
riverEssence.id = "ing_10";
riverEssence.textContent = "River Essence";
waterElement.appendChild(riverEssence);

// Earth Element div
const earthElement = document.createElement("div");
earthElement.className = "element-earth";
earthElement.textContent = "Earth";
divcontainer.appendChild(earthElement);

// Stone Bark div inside Earth div with the same id as in the data.ts file
const stoneBark = document.createElement("div");
stoneBark.className = "element-stone";
stoneBark.id = "ing_11";
stoneBark.textContent = "Stone Bark";
earthElement.appendChild(stoneBark);

// Moss Crystal div inside Earth div with the same id as in the data.ts file
const mossCrystal = document.createElement("div");
mossCrystal.className = "element-moss";
mossCrystal.id = "ing_12";
mossCrystal.textContent = "Moss Crystal";
earthElement.appendChild(mossCrystal);

// Root Vine div inside Earth div with the same id as in the data.ts file
const rootVine = document.createElement("div");
rootVine.className = "element-root";
rootVine.id = "ing_13";
rootVine.textContent = "Root Vine";
earthElement.appendChild(rootVine);

// Iron Seed div inside Earth div with the same id as in the data.ts file
const ironSeed = document.createElement("div");
ironSeed.className = "element-iron";
ironSeed.id = "ing_14";
ironSeed.textContent = "Iron Seed";
earthElement.appendChild(ironSeed);

// Clay Core div inside Earth div with the same id as in the data.ts file
const clayCore = document.createElement("div");
clayCore.className = "element-clay";
clayCore.id = "ing_15";
clayCore.textContent = "Clay Core";
earthElement.appendChild(clayCore);

// Air Element div   
const airElement = document.createElement("div");
airElement.className = "element-air";
airElement.textContent = "Air";
divcontainer.appendChild(airElement);

// Wind Feather div inside Air div with the same id as in the data.ts file
const windFeather = document.createElement("div");
windFeather.className = "element-wind";
windFeather.id = "ing_16";
windFeather.textContent = "Wind Feather";
airElement.appendChild(windFeather);

// Sky Crystal div inside Air div with the same id as in the data.ts file
const skyCrystal = document.createElement("div");
skyCrystal.className = "element-sky";
skyCrystal.id = "ing_17";
skyCrystal.textContent = "Sky Crystal";
airElement.appendChild(skyCrystal);

// Cloud Puff div inside Air div with the same id as in the data.ts file
const cloudPuff = document.createElement("div");
cloudPuff.className = "element-cloud";
cloudPuff.id = "ing_18";
cloudPuff.textContent = "Cloud Puff";
airElement.appendChild(cloudPuff);

// Storm Shard div inside Air div with the same id as in the data.ts file
const stormShard = document.createElement("div");
stormShard.className = "element-storm";
stormShard.id = "ing_19";
stormShard.textContent = "Storm Shard";
airElement.appendChild(stormShard);

// Gale Dust div inside Air div with the same id as in the data.ts file
const galeDust = document.createElement("div");
galeDust.className = "element-gale";
galeDust.id = "ing_20";
galeDust.textContent = "Gale Dust";
airElement.appendChild(galeDust);

