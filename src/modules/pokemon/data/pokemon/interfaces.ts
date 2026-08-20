export interface INamedAPIResource {
  name: string;
  url: string;
}

// ============================================
// Abilities
// ============================================

interface IPokemonAbility {
  ability: INamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

// ============================================
// Cries (Pokémon cries/sounds)
// ============================================

interface IPokemonCries {
  latest: string;
  legacy: string;
}

// ============================================
// Game Indices (Indices in games)
// ============================================

interface IVersionGameIndex {
  game_index: number;
  version: INamedAPIResource;
}

// ============================================
// Held Items (Items that can be held)
// ============================================

interface IHeldItemVersionDetail {
  rarity: number;
  version: INamedAPIResource;
}

interface IPokemonHeldItem {
  item: INamedAPIResource;
  version_details: IHeldItemVersionDetail[];
}

// ============================================
// Moves
// ============================================

interface IMoveVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: INamedAPIResource;
  order: number | null;
  version_group: INamedAPIResource;
}

interface IPokemonMove {
  move: INamedAPIResource;
  version_group_details: IMoveVersionGroupDetail[];
}

// ============================================
// Past Abilities (Abilities in previous generations)
// ============================================

interface IPastAbilityEntry {
  ability: INamedAPIResource | null;
  is_hidden: boolean;
  slot: number;
}

interface IPokemonPastAbility {
  abilities: IPastAbilityEntry[];
  generation: INamedAPIResource;
}

// ============================================
// Past Stats (Stats in previous generations)
// ============================================

interface IPastStatEntry {
  base_stat: number;
  effort: number;
  stat: INamedAPIResource;
}

interface IPokemonPastStat {
  generation: INamedAPIResource;
  stats: IPastStatEntry[];
}

// ============================================
// Past Types (Types in previous generations)
// ============================================

interface IPastTypeEntry {
  slot: number;
  type: INamedAPIResource;
}

interface IPokemonPastType {
  generation: INamedAPIResource;
  types: IPastTypeEntry[];
}

// ============================================
// Stats
// ============================================

interface IPokemonStat {
  base_stat: number;
  effort: number;
  stat: INamedAPIResource;
}

// ============================================
// Types
// ============================================

interface IPokemonType {
  slot: number;
  type: INamedAPIResource;
}

// ============================================
// Sprites
// ============================================

/** Base sprite set with male/female and default/shiny variants */
interface IBaseSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

// --- Other sprites ---

interface IDreamWorldSprites {
  front_default: string | null;
  front_female: string | null;
}

interface IHomeSprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface IOfficialArtworkSprites {
  front_default: string | null;
  front_shiny: string | null;
}

interface IShowdownSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface IOtherSprites {
  dream_world: IDreamWorldSprites;
  home: IHomeSprites;
  "official-artwork": IOfficialArtworkSprites;
  showdown: IShowdownSprites;
}

// --- Version sprites (by generations) ---

interface IGenerationIRedBlueSprites {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

interface IGenerationIYellowSprites {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

interface IGenerationISprites {
  "red-blue": IGenerationIRedBlueSprites;
  yellow: IGenerationIYellowSprites;
}

interface IGenerationIICrystalSprites {
  back_default: string | null;
  back_shiny: string | null;
  back_shiny_transparent: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_shiny_transparent: string | null;
  front_transparent: string | null;
}

interface IGenerationIIGoldSilverSprites {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

interface IGenerationIISprites {
  crystal: IGenerationIICrystalSprites;
  gold: IGenerationIIGoldSilverSprites;
  silver: IGenerationIIGoldSilverSprites;
}

interface IGenerationIIIEmeraldSprites {
  front_default: string | null;
  front_shiny: string | null;
}

interface IGenerationIIIDefaultSprites {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

interface IGenerationIIISprites {
  emerald: IGenerationIIIEmeraldSprites;
  "firered-leafgreen": IGenerationIIIDefaultSprites;
  "ruby-sapphire": IGenerationIIIDefaultSprites;
}

interface IGenerationIVDefaultSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface IGenerationIVSprites {
  "diamond-pearl": IGenerationIVDefaultSprites;
  "heartgold-soulsilver": IGenerationIVDefaultSprites;
  platinum: IGenerationIVDefaultSprites;
}

interface IGenerationVAnimatedSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface IGenerationVBlackWhiteSprites {
  animated: IGenerationVAnimatedSprites;
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface IGenerationVSprites {
  "black-white": IGenerationVBlackWhiteSprites;
}

interface IGenerationVIDefaultSprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface IGenerationVISprites {
  "omegaruby-alphasapphire": IGenerationVIDefaultSprites;
  "x-y": IGenerationVIDefaultSprites;
}

interface IGenerationVIIIconsSprites {
  front_default: string | null;
  front_female: string | null;
}

interface IGenerationVIIDefaultSprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface IGenerationVIISprites {
  icons: IGenerationVIIIconsSprites;
  "ultra-sun-ultra-moon": IGenerationVIIDefaultSprites;
}

interface IGenerationVIIISimpleSprites {
  front_default: string | null;
  front_female: string | null;
}

interface IGenerationVIIISprites {
  "brilliant-diamond-shining-pearl": IGenerationVIIISimpleSprites;
  icons: IGenerationVIIISimpleSprites;
}

interface IGenerationIXSprites {
  "scarlet-violet": {
    front_default: string | null;
    front_female: string | null;
  };
}

interface IVersionSprites {
  "generation-i": IGenerationISprites;
  "generation-ii": IGenerationIISprites;
  "generation-iii": IGenerationIIISprites;
  "generation-iv": IGenerationIVSprites;
  "generation-v": IGenerationVSprites;
  "generation-vi": IGenerationVISprites;
  "generation-vii": IGenerationVIISprites;
  "generation-viii": IGenerationVIIISprites;
  "generation-ix": IGenerationIXSprites;
}

interface IPokemonSprites extends IBaseSprites {
  other: IOtherSprites;
  versions: IVersionSprites;
}

interface IFlavorTextEntries {
  flavor_text: string;
  language: INamedAPIResource;
  version: INamedAPIResource;
}

interface IPokemonGenera {
  genus: string;
  language: INamedAPIResource;
}

interface IPokemonNames {
  language: INamedAPIResource;
  name: string;
}

interface IPalParkEncounters {
  area: INamedAPIResource;
  base_score: number;
  rate: number;
}

interface IPokedexNumbers {
  entry_number: number;
  pokedex: INamedAPIResource;
}

interface IPokemonVarieties {
  is_default: boolean;
  pokemon: INamedAPIResource;
}

// ============================================
// Main Pokemon type
// ============================================

export interface IPokemon {
  /** List of abilities */
  abilities: IPokemonAbility[];

  /** Base experience gained from defeating this Pokémon */
  base_experience: number;

  /** Links to audio files of screams */
  cries: IPokemonCries;

  /** Pokemon forms */
  forms: INamedAPIResource[];

  /** Pokémon indices in different games */
  game_indices: IVersionGameIndex[];

  /** Height in decimeters */
  height: number;

  /** Items a Pokémon can hold in the wild */
  held_items: IPokemonHeldItem[];

  /** ID */
  id: number;

  /** Is this form the default form? */
  is_default: boolean;

  /** URL for retrieving meeting point data */
  location_area_encounters: string;

  /** List of attacks/moves that a Pokémon can learn */
  moves: IPokemonMove[];

  /** Name (lowercase) */
  name: string;

  /** Display sort order */
  order: number;

  /** Abilities in previous generations (if changed) */
  past_abilities: IPokemonPastAbility[];

  /** Stats in previous generations (if they changed) */
  past_stats: IPokemonPastStat[];

  /** Types in previous generations (if they changed) */
  past_types: IPokemonPastType[];

  /** Species */
  species: INamedAPIResource;

  /** All Pokémon sprites/images */
  sprites: IPokemonSprites;

  /** (HP, Attack и т.д.) */
  stats: IPokemonStat[];

  /** Types (normal, fire, water и т.д.) */
  types: IPokemonType[];

  /** Weight in hectograms */
  weight: number;
}

// ============================================
// Pokemon list
// ============================================

export interface IPokemonList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: INamedAPIResource[];
}

export interface IPokemonCatalogPage {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: IPokemon[];
}

export interface IPokemonDetails {
  pokemon: IPokemon;
  species: IPokemonSpecies;
}

// ============================================
// Pokemon species
// ============================================

export interface IPokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: INamedAPIResource;
  egg_groups: INamedAPIResource[];
  evolution_chain: Pick<INamedAPIResource, "url">;
  evolves_from_species: INamedAPIResource;
  flavor_text_entries: IFlavorTextEntries[];
  form_descriptions?: unknown[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: IPokemonGenera[];
  generation: INamedAPIResource;
  growth_rate: INamedAPIResource;
  habitat: INamedAPIResource;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: IPokemonNames[];
  order: number;
  pal_park_encounters: IPalParkEncounters[];
  pokedex_numbers: IPokedexNumbers[];
  shape: INamedAPIResource;
  varieties: IPokemonVarieties[];
}
