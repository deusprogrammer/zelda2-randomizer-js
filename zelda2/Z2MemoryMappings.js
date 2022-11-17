const OVERWORLD_SPRITE_MAPPING = {
    mapping: {
        length:         0b11110000,
        type:           0b00001111
    }
}

const LOCATION_MAPPING_FIELDS = [
    {
        name: 'y',
        relOffset: 0x00,
        mask: 0b01111111  
    },
    {
        name: 'external',
        relOffset: 0x00,
        mask: 0b10000000  
    },
    {
        name: 'x',
        relOffset: 0x3F,
        mask: 0b00111111
    },
    {
        name: 'caveSeg',
        relOffset: 0x3F,
        mask: 0b01000000
    },
    {
        name: 'reserved',
        relOffset: 0x3F,
        mask: 0b10000000
    },
    {
        name: 'mapNumber',
        relOffset: 0x7E,
        mask: 0b00111111
    },
    {
        name: 'hPostEnt',
        relOffset: 0x7E,
        mask: 0b11000000
    },
    {
        name: 'worldNumber',
        relOffset: 0xBD,
        mask: 0b00011111
    },
    {
        name: 'rightEnt',
        relOffset: 0xBD,
        mask: 0b00100000
    },
    {
        name: 'passThrough',
        relOffset: 0xBD,
        mask: 0b01000000
    },
    {
        name: 'fallInto',
        relOffset: 0xBD,
        mask: 0b10000000
    }
]

const OVERWORLD_SPRITE_TYPES = [
    "Town",
    "Cave",
    "Palace",
    "Bridge",
    "Desert",
    "Grass",
    "Forest",
    "Swamp",
    "Graveyard",
    "Road",
    "Lava",
    "Mountain",
    "Water",
    "Water (walkable)",
    "Rock",
    "Spider"
]

const OVERWORLD_SPRITE_SYMBOLS = [
    "\033[41m┼\033[0m",
    "\033[41m█\033[0m",
    "\033[41m╬\033[0m",
    "\033[43m=\033[0m",
    "\033[43m.\033[0m",
    "\033[42m,\033[0m",
    "\033[42mF\033[0m",
    "\033[40ms\033[0m",
    "\033[40m+\033[0m",
    "\033[43m \033[0m",
    "\033[45m;\033[0m",
    "\033[48m^\033[0m",
    "\033[44m \033[0m",
    "\033[46m \033[0m",
    "\033[48mO\033[0m",
    "\033[43m≡\033[0m"
]

const WEST_HYRULE_MAP_RANDO_OFFSET      = 0x7480;
const WEST_HYRULE_MAP_VANILLA_OFFSET    = 0x506C;
const WEST_HYRULE_MAP_LENGTH            = 0x538C - 0x506C;

const WEST_HYRULE_LOCATION_MAPPINGS = {
    NORTH_CASTLE: {
        offset: 0x462F,
        fields: LOCATION_MAPPING_FIELDS
    },
    TROPHY_CAVE: {
        offset: 0x4630,
        fields: LOCATION_MAPPING_FIELDS
    },
    FOREST_50P: {
        offset: 0x4631,
        fields: LOCATION_MAPPING_FIELDS
    },
    MAGIC_CAVE: {
        offset: 0x4632,
        fields: LOCATION_MAPPING_FIELDS
    },
    FOREST_100P: {
        offset: 0x4633,
        fields: LOCATION_MAPPING_FIELDS
    },
    HEART_CLIFF: {
        offset: 0x4634,
        fields: LOCATION_MAPPING_FIELDS
    },
    LOST_WOODS_1: {
        offset: 0x4635,
        fields: LOCATION_MAPPING_FIELDS
    },
    BUBBLE_CLIFF: {
        offset: 0x4636,
        fields: LOCATION_MAPPING_FIELDS
    },
    EX_LIFE_SWAMP_1: {
        offset: 0x4637,
        fields: LOCATION_MAPPING_FIELDS
    },
    RED_JAR_CEM: {
        offset: 0x4638,
        fields: LOCATION_MAPPING_FIELDS
    },
    PARAPA_CAVE_N: {
        offset: 0x4639,
        fields: LOCATION_MAPPING_FIELDS
    },
    PARAPA_CAVE_S: {
        offset: 0x463A,
        fields: LOCATION_MAPPING_FIELDS
    },
    JUMP_CAVE_N: {
        offset: 0x463B,
        fields: LOCATION_MAPPING_FIELDS
    },
    JUMP_CAVE_S: {
        offset: 0x463C,
        fields: LOCATION_MAPPING_FIELDS
    },
    CAVE_200P: {
        offset: 0x463D,
        fields: LOCATION_MAPPING_FIELDS
    },
    MEDICINE_CAVE: {
        offset: 0x463E,
        fields: LOCATION_MAPPING_FIELDS
    },
    HEART_CAVE: {
        offset: 0x463F,
        fields: LOCATION_MAPPING_FIELDS
    },
    FAIRY_CAVE_HOLE: {
        offset: 0x4640,
        fields: LOCATION_MAPPING_FIELDS
    },
    FAIRY_CAVE: {
        offset: 0x4641,
        fields: LOCATION_MAPPING_FIELDS
    },
    LIFE_TOWN_BRIDGE_NS: {
        offset: 0x4642,
        fields: LOCATION_MAPPING_FIELDS
    },
    LIFE_TOWN_BRIDGE_EW: {
        offset: 0x4643,
        fields: LOCATION_MAPPING_FIELDS
    },
    DM_BRIDGE_EXIT_W: {
        offset: 0x4644,
        fields: LOCATION_MAPPING_FIELDS
    },
    DM_BRIDGE_EXIT_E: {
        offset: 0x4645,
        fields: LOCATION_MAPPING_FIELDS
    },
    MEDICINE_CAVE_FAIRY: {
        offset: 0x4646,
        fields: LOCATION_MAPPING_FIELDS
    },
    RED_JAR_SWAMP: {
        offset: 0x4647,
        fields: LOCATION_MAPPING_FIELDS
    },
    LIFE_TOWN_FAIRY: {
        offset: 0x4648,
        fields: LOCATION_MAPPING_FIELDS
    },
    LOST_WOODS_2: {
        offset: 0x4649,
        fields: LOCATION_MAPPING_FIELDS
    },
    LOST_WOODS_3: {
        offset: 0x464A,
        fields: LOCATION_MAPPING_FIELDS
    },
    LOST_WOODS_4: {
        offset: 0x464B,
        fields: LOCATION_MAPPING_FIELDS
    },
    LOST_WOODS_5: {
        offset: 0x464C,
        fields: LOCATION_MAPPING_FIELDS
    },
    P2_RED_JAR: {
        offset: 0x464D,
        fields: LOCATION_MAPPING_FIELDS
    },
    RED_JAR_BEACH: {
        offset: 0x464E,
        fields: LOCATION_MAPPING_FIELDS
    },
    EX_LIFE_BEACH: {
        offset: 0x464F,
        fields: LOCATION_MAPPING_FIELDS
    },
    RAFT_DOCK: {
        offset: 0x4658,
        fields: LOCATION_MAPPING_FIELDS
    },
    DM_ENTRANCE: {
        offset: 0x4659,
        fields: LOCATION_MAPPING_FIELDS
    },
    DM_EXIT: {
        offset: 0x465A,
        fields: LOCATION_MAPPING_FIELDS
    },
    KINGS_TOMB: {
        offset: 0x465B,
        fields: LOCATION_MAPPING_FIELDS
    },
    SHIELD_TOWN: {
        offset: 0x465C,
        fields: LOCATION_MAPPING_FIELDS
    },
    JUMP_TOWN: {
        offset: 0x465E,
        fields: LOCATION_MAPPING_FIELDS
    },
    LIFE_TOWN_S: {
        offset: 0x465F,
        fields: LOCATION_MAPPING_FIELDS
    },
    LIFE_TOWN_N: {
        offset: 0x4660,
        fields: LOCATION_MAPPING_FIELDS
    },
    BAGUS_CABIN: {
        offset: 0x4661,
        fields: LOCATION_MAPPING_FIELDS
    },
    FAIRY_TOWN: {
        offset: 0x4662,
        fields: LOCATION_MAPPING_FIELDS
    },
    P1: {
        offset: 0x4663,
        fields: LOCATION_MAPPING_FIELDS
    },
    P2: {
        offset: 0x4664,
        fields: LOCATION_MAPPING_FIELDS
    },
    P3: {
        offset: 0x4665,
        fields: LOCATION_MAPPING_FIELDS
    }
}

const EAST_HYRULE_MAP_RANDO_OFFSET      = 0xB480;
const EAST_HYRULE_MAP_VANILLA_OFFSET    = 0x9056;
const EAST_HYRULE_MAP_LENGTH            = 0x936F - 0x9056;

const EAST_HYRULE_LOCATION_MAPPINGS = {
    FIRE_TOWN_FOREST_500P_BAG:  {
        offset: 0x862F,
        fields: LOCATION_MAPPING_FIELDS
    },
    P6_500P_BAG: {
        offset: 0x8630,
        fields: LOCATION_MAPPING_FIELDS
    },
    WILSON_FENCE_1: {
        offset: 0x8631,
        fields: LOCATION_MAPPING_FIELDS
    },
    WILSON_FENCE_2: {
        offset: 0x8632,
        fields: LOCATION_MAPPING_FIELDS
    },
    WILSON_FENCE_3: {
        offset: 0x8633,
        fields: LOCATION_MAPPING_FIELDS
    },
    WILSON_FENCE_4: {
        offset: 0x8634,
        fields: LOCATION_MAPPING_FIELDS
    },
    THUNDER_TOWN_N_BRIDGE: {
        offset: 0x8635,
        fields: LOCATION_MAPPING_FIELDS
    },
    THUNDER_TOWN_E_BRIDGE: {
        offset: 0x8636,
        fields: LOCATION_MAPPING_FIELDS
    },
    REFLECT_TOWN_CLIFF_1: {
        offset: 0x8637,
        fields: LOCATION_MAPPING_FIELDS
    },
    REFLECT_TOWN_CLIFF_2: {
        offset: 0x8638,
        fields: LOCATION_MAPPING_FIELDS
    },
    P5_HEART: {
        offset: 0x8639,
        fields: LOCATION_MAPPING_FIELDS
    },
    FIRE_TOWN_CAVE_EXIT: {
        offset: 0x863A,
        fields: LOCATION_MAPPING_FIELDS
    },
    FIRE_TOWN_CAVE_ENTRACE: {
        offset: 0x863B,
        fields: LOCATION_MAPPING_FIELDS
    },
    FIRE_TOWN_CAVE_500P_BAG: {
        offset: 0x863C,
        fields: LOCATION_MAPPING_FIELDS
    },
    THUNDER_TOWN_CAVE_500P_BAG: {
        offset: 0x863D,
        fields: LOCATION_MAPPING_FIELDS
    },
    SPELL_TOWN_CAVE_ENTRANCE: {
        offset: 0x863E,
        fields: LOCATION_MAPPING_FIELDS
    },
    SPELL_TOWN_CAVE_EXIT: {
        offset: 0x863F,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_CAVE_1_EXIT: {
        offset: 0x8640,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_CAVE_1_ENTRANCE: {
        offset: 0x8641,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_CAVE_2_EXIT: {
        offset: 0x8642,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_CAVE_2_ENTRANCE: {
        offset: 0x8643,
        fields: LOCATION_MAPPING_FIELDS
    },
    THUNDER_TOWN_SWAMP_LIFE: {
        offset: 0x8644,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_BATTLE_EX: {
        offset: 0x8645,
        fields: LOCATION_MAPPING_FIELDS
    },
    P5_500P_BAG: {
        offset: 0x8646,
        fields: LOCATION_MAPPING_FIELDS
    },
    FIRE_TOWN_RED_JAR: {
        offset: 0x8647,
        fields: LOCATION_MAPPING_FIELDS
    },
    DAZZLE_LIFE: {
        offset: 0x8648,
        fields: LOCATION_MAPPING_FIELDS
    },
    P6_HEART: {
        offset: 0x8649,
        fields: LOCATION_MAPPING_FIELDS
    },
    FIRE_TOWN_FAIRY: {
        offset: 0x864A,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_500P_BAG: {
        offset: 0x864B,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_RED_JAR: {
        offset: 0x864C,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_BATTLE_3: {
        offset: 0x864D,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_BATTLE_2: {
        offset: 0x864E,
        fields: LOCATION_MAPPING_FIELDS
    },
    DEATH_VALLEY_BATTLE_1: {
        offset: 0x864F,
        fields: LOCATION_MAPPING_FIELDS
    },
    MAZE_ISLAND_BRIDGE: {
        offset: 0x8657,
        fields: LOCATION_MAPPING_FIELDS
    },
    RAFT_DOCK: {
        offset: 0x8658,
        fields: LOCATION_MAPPING_FIELDS
    },
    FIRE_TOWN: {
        offset: 0x865C,
        fields: LOCATION_MAPPING_FIELDS
    },
    REFLECT_TOWN: {
        offset: 0x865E,
        fields: LOCATION_MAPPING_FIELDS
    },
    SPELL_TOWN: {
        offset: 0x8660,
        fields: LOCATION_MAPPING_FIELDS
    },
    THUNDER_TOWN: {
        offset: 0x8662,
        fields: LOCATION_MAPPING_FIELDS
    },
    P5: {
        offset: 0x8663,
        fields: LOCATION_MAPPING_FIELDS
    },
    P6: {
        offset: 0x8664,
        fields: LOCATION_MAPPING_FIELDS
    },
    GP: {
        offset: 0x8665,
        fields: LOCATION_MAPPING_FIELDS
    }
}

exports.OVERWORLD_SPRITE_MAPPING        = OVERWORLD_SPRITE_MAPPING;
exports.OVERWORLD_SPRITE_SYMBOLS        = OVERWORLD_SPRITE_SYMBOLS;
exports.OVERWORLD_SPRITE_TYPES          = OVERWORLD_SPRITE_TYPES;

exports.WEST_HYRULE_LOCATION_MAPPINGS   = WEST_HYRULE_LOCATION_MAPPINGS;
exports.WEST_HYRULE_MAP_RANDO_OFFSET    = WEST_HYRULE_MAP_RANDO_OFFSET;
exports.WEST_HYRULE_MAP_VANILLA_OFFSET  = WEST_HYRULE_MAP_VANILLA_OFFSET;
exports.WEST_HYRULE_MAP_LENGTH          = WEST_HYRULE_MAP_LENGTH;

exports.EAST_HYRULE_LOCATION_MAPPINGS   = EAST_HYRULE_LOCATION_MAPPINGS;
exports.EAST_HYRULE_MAP_RANDO_OFFSET    = EAST_HYRULE_MAP_RANDO_OFFSET;
exports.EAST_HYRULE_MAP_VANILLA_OFFSET  = EAST_HYRULE_MAP_VANILLA_OFFSET;
exports.EAST_HYRULE_MAP_LENGTH          = EAST_HYRULE_MAP_LENGTH;

// 665C - 6942 - Death Mountain
// 9056 - 936F - East Hyrule
// A65C - A942 - Maze Island