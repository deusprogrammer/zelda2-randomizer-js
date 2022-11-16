const Y_MAPPING = {
    POS:                0b01111111,
    EXTERNAL:           0b10000000
}

const X_MAPPING = {
    POS:                0b00111111,
    CAVE_SEG:           0b01000000,
    RESERVED:           0b100000000
}

const MN_MAPPING = {
    POS:                0b00111111,
    H_POS_ENT:          0b11000000
}

const WN_MAPPING = {
    POS:                0b00011111,
    RIGHT_SIDE_ENTER:   0b00100000,
    PASS_THROUGH:       0b01000000,
    FALL_IN:            0b10000000
}

const OVERWORLD_SPRITE_MAPPING = {
    size: 1,
    mapping: {
        LENGTH:         0b11110000,
        TYPE:           0b00001111
    }
}

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
    "┼",
    "█",
    "╬",
    "=",
    ".",
    ",",
    "F",
    "s",
    "+",
    " ",
    ";",
    "^",
    "w",
    "X",
    "O",
    "≡"
]

const WEST_HYRULE_MAP_RANDO_OFFSET      = 0x7480;
const WEST_HYRULE_MAP_VANILLA_OFFSET    = 0x506C;
const WEST_HYRULE_MAP_LENGTH            = 0x538C - 0x506C;

const WEST_HYRULE_LOCATION_MAPPINGS = {
    NORTH_CASTLE_Y: {offset: 0x462F, mapping: Y_MAPPING},
    TROPHY_CAVE_Y: {mapping: Y_MAPPING},
    FOREST_50P_Y: {mapping: Y_MAPPING},
    MAGIC_CAVE_Y: {mapping: Y_MAPPING},
    FOREST_100P_Y: {mapping: Y_MAPPING},
    HEART_CLIFF_Y: {mapping: Y_MAPPING},
    LOST_WOODS_1_Y: {mapping: Y_MAPPING},
    BUBBLE_CLIFF_Y: {mapping: Y_MAPPING},
    EX_LIFE_SWAMP_1_Y: {mapping: Y_MAPPING},
    RED_JAR_CEM_Y: {mapping: Y_MAPPING},
    PARAPA_CAVE_N_Y: {mapping: Y_MAPPING},
    PARAPA_CAVE_S_Y: {mapping: Y_MAPPING},
    JUMP_CAVE_N_Y: {mapping: Y_MAPPING},
    JUMP_CAVE_S_Y: {mapping: Y_MAPPING},
    CAVE_200P_Y: {mapping: Y_MAPPING},
    MEDICINE_CAVE_Y: {mapping: Y_MAPPING},
    HEART_CAVE_Y: {mapping: Y_MAPPING},
    FAIRY_CAVE_HOLE_Y: {mapping: Y_MAPPING},
    FAIRY_CAVE_Y: {mapping: Y_MAPPING},
    LIFE_TOWN_BRIDGE_NS_Y: {mapping: Y_MAPPING},
    LIFE_TOWN_BRIDGE_EW_Y: {mapping: Y_MAPPING},
    DM_BRIDGE_EXIT_W_Y: {mapping: Y_MAPPING},
    DM_BRIDGE_EXIT_E_Y: {mapping: Y_MAPPING},
    MEDICINE_CAVE_FAIRY_Y: {mapping: Y_MAPPING},
    RED_JAR_SWAMP_Y: {mapping: Y_MAPPING},
    LIFE_TOWN_FAIRY_Y: {mapping: Y_MAPPING},
    LOST_WOODS_2_Y: {mapping: Y_MAPPING},
    LOST_WOODS_3_Y: {mapping: Y_MAPPING},
    LOST_WOODS_4_Y: {mapping: Y_MAPPING},
    LOST_WOODS_5_Y: {mapping: Y_MAPPING},
    P2_RED_JAR_Y: {mapping: Y_MAPPING},
    RED_JAR_BEACH_Y: {mapping: Y_MAPPING},
    EX_LIFE_BEACH_Y: {mapping: Y_MAPPING},
    RAFT_DOCK_Y: {skip: 8, mapping: Y_MAPPING},
    DM_ENTRANCE_Y: {mapping: Y_MAPPING},
    DM_EXIT_Y: {mapping: Y_MAPPING},
    KINGS_TOMB_Y: {mapping: Y_MAPPING},
    SHIELD_TOWN_Y: {mapping: Y_MAPPING},
    JUMP_TOWN_Y: {skip: 1, mapping: Y_MAPPING},
    LIFE_TOWN_S_Y: {mapping: Y_MAPPING},
    LIFE_TOWN_N_Y: {mapping: Y_MAPPING},
    BAGUS_CABIN_Y: {mapping: Y_MAPPING},
    FAIRY_TOWN_Y: {mapping: Y_MAPPING},
    P1_Y: {mapping: Y_MAPPING},
    P2_Y: {mapping: Y_MAPPING},
    P3_Y: {mapping: Y_MAPPING},
    NORTH_CASTLE_X: {offset: 0x466E, mapping: X_MAPPING},
    TROPHY_CAVE_X: {mapping: X_MAPPING},
    FOREST_50P_X: {mapping: X_MAPPING},
    MAGIC_CAVE_X: {mapping: X_MAPPING},
    FOREST_100P_X: {mapping: X_MAPPING},
    HEART_CLIFF_X: {mapping: X_MAPPING},
    LOST_WOODS_1_X: {mapping: X_MAPPING},
    BUBBLE_CLIFF_X: {mapping: X_MAPPING},
    EX_LIFE_SWAMP_1_X: {mapping: X_MAPPING},
    RED_JAR_CEM_X: {mapping: X_MAPPING},
    PARAPA_CAVE_N_X: {mapping: X_MAPPING},
    PARAPA_CAVE_S_X: {mapping: X_MAPPING},
    JUMP_CAVE_N_X: {mapping: X_MAPPING},
    JUMP_CAVE_S_X: {mapping: X_MAPPING},
    CAVE_200P_X: {mapping: X_MAPPING},
    MEDICINE_CAVE_X: {mapping: X_MAPPING},
    HEART_CAVE_X: {mapping: X_MAPPING},
    FAIRY_CAVE_HOLE_X: {mapping: X_MAPPING},
    FAIRY_CAVE_X: {mapping: X_MAPPING},
    LIFE_TOWN_BRIDGE_NS_X: {mapping: X_MAPPING},
    LIFE_TOWN_BRIDGE_EW_X: {mapping: X_MAPPING},
    DM_BRIDGE_EXIT_W_X: {mapping: X_MAPPING},
    DM_BRIDGE_EXIT_E_X: {mapping: X_MAPPING},
    MEDICINE_CAVE_FAIRY_X: {mapping: X_MAPPING},
    RED_JAR_SWAMP_X: {mapping: X_MAPPING},
    LIFE_TOWN_FAIRY_X: {mapping: X_MAPPING},
    LOST_WOODS_2_X: {mapping: X_MAPPING},
    LOST_WOODS_3_X: {mapping: X_MAPPING},
    LOST_WOODS_4_X: {mapping: X_MAPPING},
    LOST_WOODS_5_X: {mapping: X_MAPPING},
    P2_RED_JAR_X: {mapping: X_MAPPING},
    RED_JAR_BEACH_X: {mapping: X_MAPPING},
    EX_LIFE_BEACH_X: {mapping: X_MAPPING},
    RAFT_DOCK_X: {skip: 8, mapping: X_MAPPING},
    DM_ENTRANCE_X: {mapping: X_MAPPING},
    DM_EXIT_X: {mapping: X_MAPPING},
    KINGS_TOMB_X: {mapping: X_MAPPING},
    SHIELD_TOWN_X: {mapping: X_MAPPING},
    JUMP_TOWN_X: {skip: 1, mapping: X_MAPPING},
    LIFE_TOWN_S_X: {mapping: X_MAPPING},
    LIFE_TOWN_N_X: {mapping: X_MAPPING},
    BAGUS_CABIN_X: {mapping: X_MAPPING},
    FAIRY_TOWN_X: {mapping: X_MAPPING},
    P1_X: {mapping: X_MAPPING},
    P2_X: {mapping: X_MAPPING},
    P3_X: {mapping: X_MAPPING},
    NORTH_CASTLE_MN: {offset: 0x46AD, mapping: MN_MAPPING},
    TROPHY_CAVE_MN: {mapping: MN_MAPPING},
    FOREST_50P_MN: {mapping: MN_MAPPING},
    MAGIC_CAVE_MN: {mapping: MN_MAPPING},
    FOREST_100P_MN: {mapping: MN_MAPPING},
    HEART_CLIFF_MN: {mapping: MN_MAPPING},
    LOST_WOODS_1_MN: {mapping: MN_MAPPING},
    BUBBLE_CLIFF_MN: {mapping: MN_MAPPING},
    EX_LIFE_SWAMP_1_MN: {mapping: MN_MAPPING},
    RED_JAR_CEM_MN: {mapping: MN_MAPPING},
    PARAPA_CAVE_N_MN: {mapping: MN_MAPPING},
    PARAPA_CAVE_S_MN: {mapping: MN_MAPPING},
    JUMP_CAVE_N_MN: {mapping: MN_MAPPING},
    JUMP_CAVE_S_MN: {mapping: MN_MAPPING},
    CAVE_200P_MN: {mapping: MN_MAPPING},
    MEDICINE_CAVE_MN: {mapping: MN_MAPPING},
    HEART_CAVE_MN: {mapping: MN_MAPPING},
    FAIRY_CAVE_HOLE_MN: {mapping: MN_MAPPING},
    FAIRY_CAVE_MN: {mapping: MN_MAPPING},
    LIFE_TOWN_BRIDGE_NS_MN: {mapping: MN_MAPPING},
    LIFE_TOWN_BRIDGE_EW_MN: {mapping: MN_MAPPING},
    DM_BRIDGE_EXIT_W_MN: {mapping: MN_MAPPING},
    DM_BRIDGE_EXIT_E_MN: {mapping: MN_MAPPING},
    MEDICINE_CAVE_FAIRY_MN: {mapping: MN_MAPPING},
    RED_JAR_SWAMP_MN: {mapping: MN_MAPPING},
    LIFE_TOWN_FAIRY_MN: {mapping: MN_MAPPING},
    LOST_WOODS_2_MN: {mapping: MN_MAPPING},
    LOST_WOODS_3_MN: {mapping: MN_MAPPING},
    LOST_WOODS_4_MN: {mapping: MN_MAPPING},
    LOST_WOODS_5_MN: {mapping: MN_MAPPING},
    P2_RED_JAR_MN: {mapping: MN_MAPPING},
    RED_JAR_BEACH_MN: {mapping: MN_MAPPING},
    EX_LIFE_BEACH_MN: {mapping: MN_MAPPING},
    RAFT_DOCK_MN: {skip: 8, mapping: MN_MAPPING},
    DM_ENTRANCE_MN: {mapping: MN_MAPPING},
    DM_EXIT_MN: {mapping: MN_MAPPING},
    KINGS_TOMB_MN: {mapping: MN_MAPPING},
    SHIELD_TOWN_MN: {mapping: MN_MAPPING},
    JUMP_TOWN_MN: {skip: 1, mapping: MN_MAPPING},
    LIFE_TOWN_S_MN: {mapping: MN_MAPPING},
    LIFE_TOWN_N_MN: {mapping: MN_MAPPING},
    BAGUS_CABIN_MN: {mapping: MN_MAPPING},
    FAIRY_TOWN_MN: {mapping: MN_MAPPING},
    P1_MN: {mapping: MN_MAPPING},
    P2_MN: {mapping: MN_MAPPING},
    P3_MN: {mapping: MN_MAPPING},
    NORTH_CASTLE_WN: {offset: 0x46EC, mapping: WN_MAPPING},
    TROPHY_CAVE_WN: {mapping: WN_MAPPING},
    FOREST_50P_WN: {mapping: WN_MAPPING},
    MAGIC_CAVE_WN: {mapping: WN_MAPPING},
    FOREST_100P_WN: {mapping: WN_MAPPING},
    HEART_CLIFF_WN: {mapping: WN_MAPPING},
    LOST_WOODS_1_WN: {mapping: WN_MAPPING},
    BUBBLE_CLIFF_WN: {mapping: WN_MAPPING},
    EX_LIFE_SWAMP_1_WN: {mapping: WN_MAPPING},
    RED_JAR_CEM_WN: {mapping: WN_MAPPING},
    PARAPA_CAVE_N_WN: {mapping: WN_MAPPING},
    PARAPA_CAVE_S_WN: {mapping: WN_MAPPING},
    JUMP_CAVE_N_WN: {mapping: WN_MAPPING},
    JUMP_CAVE_S_WN: {mapping: WN_MAPPING},
    CAVE_200P_WN: {mapping: WN_MAPPING},
    MEDICINE_CAVE_WN: {mapping: WN_MAPPING},
    HEART_CAVE_WN: {mapping: WN_MAPPING},
    FAIRY_CAVE_HOLE_WN: {mapping: WN_MAPPING},
    FAIRY_CAVE_WN: {mapping: WN_MAPPING},
    LIFE_TOWN_BRIDGE_NS_WN: {mapping: WN_MAPPING},
    LIFE_TOWN_BRIDGE_EW_WN: {mapping: WN_MAPPING},
    DM_BRIDGE_EXIT_W_WN: {mapping: WN_MAPPING},
    DM_BRIDGE_EXIT_E_WN: {mapping: WN_MAPPING},
    MEDICINE_CAVE_FAIRY_WN: {mapping: WN_MAPPING},
    RED_JAR_SWAMP_WN: {mapping: WN_MAPPING},
    LIFE_TOWN_FAIRY_WN: {mapping: WN_MAPPING},
    LOST_WOODS_2_WN: {mapping: WN_MAPPING},
    LOST_WOODS_3_WN: {mapping: WN_MAPPING},
    LOST_WOODS_4_WN: {mapping: WN_MAPPING},
    LOST_WOODS_5_WN: {mapping: WN_MAPPING},
    P2_RED_JAR_WN: {mapping: WN_MAPPING},
    RED_JAR_BEACH_WN: {mapping: WN_MAPPING},
    EX_LIFE_BEACH_WN: {mapping: WN_MAPPING},
    RAFT_DOCK_WN: {skip: 8, mapping: WN_MAPPING},
    DM_ENTRANCE_WN: {mapping: WN_MAPPING},
    DM_EXIT_WN: {mapping: WN_MAPPING},
    KINGS_TOMB_WN: {mapping: WN_MAPPING},
    SHIELD_TOWN_WN: {mapping: WN_MAPPING},
    JUMP_TOWN_WN: {skip: 1, mapping: WN_MAPPING},
    LIFE_TOWN_S_WN: {mapping: WN_MAPPING},
    LIFE_TOWN_N_WN: {mapping: WN_MAPPING},
    BAGUS_CABIN_WN: {mapping: WN_MAPPING},
    FAIRY_TOWN_WN: {mapping: WN_MAPPING},
    P1_WN: {mapping: WN_MAPPING},
    P2_WN: {mapping: WN_MAPPING},
    P3_WN: {mapping: WN_MAPPING}
}

const EAST_HYRULE_MAP_RANDO_OFFSET      = 0xB480;
const EAST_HYRULE_MAP_VANILLA_OFFSET    = 0x9056;
const EAST_HYRULE_MAP_LENGTH            = 0x936F - 0x9056;

const EAST_HYRULE_LOCATION_MAPPINGS = {
    FIRE_TOWN_FOREST_500P_BAG_Y: {offset: 0x862F, mapping: Y_MAPPING},
    P6_500P_BAG_Y: {mapping: Y_MAPPING},
    WILSON_FENCE_1_Y: {mapping: Y_MAPPING},
    WILSON_FENCE_2_Y: {mapping: Y_MAPPING},
    WILSON_FENCE_3_Y: {mapping: Y_MAPPING},
    WILSON_FENCE_4_Y: {mapping: Y_MAPPING},
    THUNDER_TOWN_N_BRIDGE_Y: {mapping: Y_MAPPING},
    THUNDER_TOWN_E_BRIDGE_Y: {mapping: Y_MAPPING},
    REFLECT_TOWN_CLIFF_1_Y: {mapping: Y_MAPPING},
    REFLECT_TOWN_CLIFF_2_Y: {mapping: Y_MAPPING},
    P5_HEART_Y: {mapping: Y_MAPPING},
    FIRE_TOWN_CAVE_EXIT_Y: {mapping: Y_MAPPING},
    FIRE_TOWN_CAVE_ENTRACE_Y: {mapping: Y_MAPPING},
    FIRE_TOWN_CAVE_500P_BAG_Y: {mapping: Y_MAPPING},
    THUNDER_TOWN_CAVE_500P_BAG_Y: {mapping: Y_MAPPING},
    SPELL_TOWN_CAVE_ENTRANCE_Y: {mapping: Y_MAPPING},
    SPELL_TOWN_CAVE_EXIT_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_CAVE_1_EXIT_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_CAVE_1_ENTRANCE_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_CAVE_2_EXIT_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_CAVE_2_ENTRANCE_Y: {mapping: Y_MAPPING},
    THUNDER_TOWN_SWAMP_LIFE_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_BATTLE_EX_Y: {mapping: Y_MAPPING},
    P5_500P_BAG_Y: {mapping: Y_MAPPING},
    FIRE_TOWN_RED_JAR_Y: {mapping: Y_MAPPING},
    DAZZLE_LIFE_Y: {mapping: Y_MAPPING},
    P6_HEART_Y: {mapping: Y_MAPPING},
    FIRE_TOWN_FAIRY_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_500P_BAG_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_RED_JAR_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_BATTLE_3_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_BATTLE_2_Y: {mapping: Y_MAPPING},
    DEATH_VALLEY_BATTLE_1_Y: {mapping: Y_MAPPING},
    MAZE_ISLAND_BRIDGE_Y: {skip: 7, mapping: Y_MAPPING},
    RAFT_DOCK_Y: {mapping: Y_MAPPING},
    FIRE_TOWN_Y: {skip: 3, mapping: Y_MAPPING},
    REFLECT_TOWN_Y: {skip: 1, mapping: Y_MAPPING},
    SPELL_TOWN_Y: {skip: 1, mapping: Y_MAPPING},
    THUNDER_TOWN_Y: {skip: 1, mapping: Y_MAPPING},
    P5_Y: {mapping: Y_MAPPING},
    P6_Y: {mapping: Y_MAPPING},
    GP_Y: {mapping: Y_MAPPING},
    FIRE_TOWN_FOREST_500P_BAG_X: {offset: 0x866E, mapping: X_MAPPING},
    P6_500P_BAG_X: {mapping: X_MAPPING},
    WILSON_FENCE_1_X: {mapping: X_MAPPING},
    WILSON_FENCE_2_X: {mapping: X_MAPPING},
    WILSON_FENCE_3_X: {mapping: X_MAPPING},
    WILSON_FENCE_4_X: {mapping: X_MAPPING},
    THUNDER_TOWN_N_BRIDGE_X: {mapping: X_MAPPING},
    THUNDER_TOWN_E_BRIDGE_X: {mapping: X_MAPPING},
    REFLECT_TOWN_CLIFF_1_X: {mapping: X_MAPPING},
    REFLECT_TOWN_CLIFF_2_X: {mapping: X_MAPPING},
    P5_HEART_X: {mapping: X_MAPPING},
    FIRE_TOWN_CAVE_EXIT_X: {mapping: X_MAPPING},
    FIRE_TOWN_CAVE_ENTRACE_X: {mapping: X_MAPPING},
    FIRE_TOWN_CAVE_500P_BAG_X: {mapping: X_MAPPING},
    THUNDER_TOWN_CAVE_500P_BAG_X: {mapping: X_MAPPING},
    SPELL_TOWN_CAVE_ENTRANCE_X: {mapping: X_MAPPING},
    SPELL_TOWN_CAVE_EXIT_X: {mapping: X_MAPPING},
    DEATH_VALLEY_CAVE_1_EXIT_X: {mapping: X_MAPPING},
    DEATH_VALLEY_CAVE_1_ENTRANCE_X: {mapping: X_MAPPING},
    DEATH_VALLEY_CAVE_2_EXIT_X: {mapping: X_MAPPING},
    DEATH_VALLEY_CAVE_2_ENTRANCE_X: {mapping: X_MAPPING},
    THUNDER_TOWN_SWAMP_LIFE_X: {mapping: X_MAPPING},
    DEATH_VALLEY_BATTLE_EX_X: {mapping: X_MAPPING},
    P5_500P_BAG_X: {mapping: X_MAPPING},
    FIRE_TOWN_RED_JAR_X: {mapping: X_MAPPING},
    DAZZLE_LIFE_X: {mapping: X_MAPPING},
    P6_HEART_X: {mapping: X_MAPPING},
    FIRE_TOWN_FAIRY_X: {mapping: X_MAPPING},
    DEATH_VALLEY_500P_BAG_X: {mapping: X_MAPPING},
    DEATH_VALLEY_RED_JAR_X: {mapping: X_MAPPING},
    DEATH_VALLEY_BATTLE_3_X: {mapping: X_MAPPING},
    DEATH_VALLEY_BATTLE_2_X: {mapping: X_MAPPING},
    DEATH_VALLEY_BATTLE_1_X: {mapping: X_MAPPING},
    MAZE_ISLAND_BRIDGE_X: {skip: 7, mapping: X_MAPPING},
    RAFT_DOCK_X: {mapping: X_MAPPING},
    FIRE_TOWN_X: {skip: 3, mapping: X_MAPPING},
    REFLECT_TOWN_X: {skip: 1, mapping: X_MAPPING},
    SPELL_TOWN_X: {skip: 1, mapping: X_MAPPING},
    THUNDER_TOWN_X: {skip: 1, mapping: X_MAPPING},
    P5_X: {mapping: X_MAPPING},
    P6_X: {mapping: X_MAPPING},
    GP_X: {mapping: X_MAPPING},
    FIRE_TOWN_FOREST_500P_BAG_MN: {offset: 0x86AD, mapping: MN_MAPPING},
    P6_500P_BAG_MN: {mapping: MN_MAPPING},
    WILSON_FENCE_1_MN: {mapping: MN_MAPPING},
    WILSON_FENCE_2_MN: {mapping: MN_MAPPING},
    WILSON_FENCE_3_MN: {mapping: MN_MAPPING},
    WILSON_FENCE_4_MN: {mapping: MN_MAPPING},
    THUNDER_TOWN_N_BRIDGE_MN: {mapping: MN_MAPPING},
    THUNDER_TOWN_E_BRIDGE_MN: {mapping: MN_MAPPING},
    REFLECT_TOWN_CLIFF_1_MN: {mapping: MN_MAPPING},
    REFLECT_TOWN_CLIFF_2_MN: {mapping: MN_MAPPING},
    P5_HEART_MN: {mapping: MN_MAPPING},
    FIRE_TOWN_CAVE_EXIT_MN: {mapping: MN_MAPPING},
    FIRE_TOWN_CAVE_ENTRACE_MN: {mapping: MN_MAPPING},
    FIRE_TOWN_CAVE_500P_BAG_MN: {mapping: MN_MAPPING},
    THUNDER_TOWN_CAVE_500P_BAG_MN: {mapping: MN_MAPPING},
    SPELL_TOWN_CAVE_ENTRANCE_MN: {mapping: MN_MAPPING},
    SPELL_TOWN_CAVE_EXIT_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_CAVE_1_EXIT_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_CAVE_1_ENTRANCE_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_CAVE_2_EXIT_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_CAVE_2_ENTRANCE_MN: {mapping: MN_MAPPING},
    THUNDER_TOWN_SWAMP_LIFE_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_BATTLE_EX_MN: {mapping: MN_MAPPING},
    P5_500P_BAG_MN: {mapping: MN_MAPPING},
    FIRE_TOWN_RED_JAR_MN: {mapping: MN_MAPPING},
    DAZZLE_LIFE_MN: {mapping: MN_MAPPING},
    P6_HEART_MN: {mapping: MN_MAPPING},
    FIRE_TOWN_FAIRY_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_500P_BAG_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_RED_JAR_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_BATTLE_3_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_BATTLE_2_MN: {mapping: MN_MAPPING},
    DEATH_VALLEY_BATTLE_1_MN: {mapping: MN_MAPPING},
    MAZE_ISLAND_BRIDGE_MN: {skip: 7, mapping: MN_MAPPING},
    RAFT_DOCK_MN: {mapping: MN_MAPPING},
    FIRE_TOWN_MN: {skip: 3, mapping: MN_MAPPING},
    REFLECT_TOWN_MN: {skip: 1, mapping: MN_MAPPING},
    SPELL_TOWN_MN: {skip: 1, mapping: MN_MAPPING},
    THUNDER_TOWN_MN: {skip: 1, mapping: MN_MAPPING},
    P5_MN: {mapping: MN_MAPPING},
    P6_MN: {mapping: MN_MAPPING},
    GP_MN: {mapping: MN_MAPPING},
    FIRE_TOWN_FOREST_500P_BAG_WN: {offset: 0x86EC, mapping: WN_MAPPING},
    P6_500P_BAG_WN: {mapping: WN_MAPPING},
    WILSON_FENCE_1_WN: {mapping: WN_MAPPING},
    WILSON_FENCE_2_WN: {mapping: WN_MAPPING},
    WILSON_FENCE_3_WN: {mapping: WN_MAPPING},
    WILSON_FENCE_4_WN: {mapping: WN_MAPPING},
    THUNDER_TOWN_N_BRIDGE_WN: {mapping: WN_MAPPING},
    THUNDER_TOWN_E_BRIDGE_WN: {mapping: WN_MAPPING},
    REFLECT_TOWN_CLIFF_1_WN: {mapping: WN_MAPPING},
    REFLECT_TOWN_CLIFF_2_WN: {mapping: WN_MAPPING},
    P5_HEART_WN: {mapping: WN_MAPPING},
    FIRE_TOWN_CAVE_EXIT_WN: {mapping: WN_MAPPING},
    FIRE_TOWN_CAVE_ENTRACE_WN: {mapping: WN_MAPPING},
    FIRE_TOWN_CAVE_500P_BAG_WN: {mapping: WN_MAPPING},
    THUNDER_TOWN_CAVE_500P_BAG_WN: {mapping: WN_MAPPING},
    SPELL_TOWN_CAVE_ENTRANCE_WN: {mapping: WN_MAPPING},
    SPELL_TOWN_CAVE_EXIT_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_CAVE_1_EXIT_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_CAVE_1_ENTRANCE_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_CAVE_2_EXIT_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_CAVE_2_ENTRANCE_WN: {mapping: WN_MAPPING},
    THUNDER_TOWN_SWAMP_LIFE_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_BATTLE_EX_WN: {mapping: WN_MAPPING},
    P5_500P_BAG_WN: {mapping: WN_MAPPING},
    FIRE_TOWN_RED_JAR_WN: {mapping: WN_MAPPING},
    DAZZLE_LIFE_WN: {mapping: WN_MAPPING},
    P6_HEART_WN: {mapping: WN_MAPPING},
    FIRE_TOWN_FAIRY_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_500P_BAG_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_RED_JAR_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_BATTLE_3_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_BATTLE_2_WN: {mapping: WN_MAPPING},
    DEATH_VALLEY_BATTLE_1_WN: {mapping: WN_MAPPING},
    MAZE_ISLAND_BRIDGE_WN: {skip: 7, mapping: WN_MAPPING},
    RAFT_DOCK_WN: {mapping: WN_MAPPING},
    FIRE_TOWN_WN: {skip: 3, mapping: WN_MAPPING},
    REFLECT_TOWN_WN: {skip: 1, mapping: WN_MAPPING},
    SPELL_TOWN_WN: {skip: 1, mapping: WN_MAPPING},
    THUNDER_TOWN_WN: {skip: 1, mapping: WN_MAPPING},
    P5_WN: {mapping: WN_MAPPING},
    P6_WN: {mapping: WN_MAPPING},
    GP_WN: {mapping: WN_MAPPING}
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