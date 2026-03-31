export const ingredients = [
  { id: "ing_1", name: "Ember Root", element: "fire" },
  { id: "ing_2", name: "Blazing Petal", element: "fire" },
  { id: "ing_3", name: "Ash Mushroom", element: "fire" },
  { id: "ing_4", name: "Flame Dust", element: "fire" },

  { id: "ing_5", name: "Aqua Leaf", element: "water" },
  { id: "ing_6", name: "Frost Berry", element: "water" },
  { id: "ing_7", name: "Mist Pearl", element: "water" },
  { id: "ing_8", name: "Deep Sea Herb", element: "water" },

  { id: "ing_9", name: "Stone Bark", element: "earth" },
  { id: "ing_10", name: "Moss Crystal", element: "earth" },
  { id: "ing_11", name: "Root Vine", element: "earth" },
  { id: "ing_12", name: "Iron Seed", element: "earth" },

  { id: "ing_13", name: "Sky Feather", element: "air" },
  { id: "ing_14", name: "Wind Blossom", element: "air" },
  { id: "ing_15", name: "Cloud Puff", element: "air" },
  { id: "ing_16", name: "Storm Shard", element: "air" },

  { id: "ing_17", name: "Shadow Essence", element: "void" },
  { id: "ing_18", name: "Light Fragment", element: "light" },
  { id: "ing_19", name: "Time Dust", element: "arcane" },
  { id: "ing_20", name: "Chaos Shard", element: "arcane" },
];

export const potions = [
  {
    id: "pot_1",
    name: "Healing Potion",
    effect: "heal",
    hint: "A calm flow and strong roots may restore what was lost.",
  },
  {
    id: "pot_2",
    name: "Fire Bomb",
    effect: "damage_fire",
    hint: "Burning essence and explosive force create destruction.",
  },
  {
    id: "pot_3",
    name: "Frost Shield",
    effect: "defense",
    hint: "Cold waters and solid earth may protect the fragile.",
  },
  {
    id: "pot_4",
    name: "Invisibility Potion",
    effect: "invisible",
    hint: "Light fades when shadow and air combine.",
  },
  {
    id: "pot_5",
    name: "Speed Elixir",
    effect: "speed",
    hint: "When the winds meet, nothing stays still for long.",
  },
  {
    id: "pot_6",
    name: "Stone Skin",
    effect: "armor",
    hint: "The toughest gifts often come from deep earth.",
  },
  {
    id: "pot_7",
    name: "Lightning Strike",
    effect: "damage_air",
    hint: "Storms are born from sky and surging energy.",
  },
  {
    id: "pot_8",
    name: "Regeneration Brew",
    effect: "regen",
    hint: "Life returns when water and roots work together.",
  },
  {
    id: "pot_9",
    name: "Time Warp",
    effect: "slow_time",
    hint: "Ancient dust and open skies may bend more than space.",
  },
  {
    id: "pot_10",
    name: "Chaos Potion",
    effect: "random",
    hint: "When unstable power meets darkness, anything can happen.",
  },
];

export const recipes = [
  { ingredients: ["ing_5", "ing_11"], result: "pot_1" },
  { ingredients: ["ing_2", "ing_4"], result: "pot_2" },
  { ingredients: ["ing_6", "ing_9"], result: "pot_3" },
  { ingredients: ["ing_13", "ing_17"], result: "pot_4" },
  { ingredients: ["ing_14", "ing_15"], result: "pot_5" },
  { ingredients: ["ing_10", "ing_12"], result: "pot_6" },
  { ingredients: ["ing_16", "ing_7"], result: "pot_7" },
  { ingredients: ["ing_8", "ing_3"], result: "pot_8" },
  { ingredients: ["ing_19", "ing_1"], result: "pot_9" },
  { ingredients: ["ing_20", "ing_18"], result: "pot_10" },
];
