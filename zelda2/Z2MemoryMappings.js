const Y_MAPPING = {
    POS:        0b01111111,
    EXTERNAL:   0b10000000
}

const X_MAPPING = {
    POS:        0b00111111,
    CAVE_SEG:   0b01000000,
    RESERVED:   0b100000000
}

const MN_MAPPING = {
    POS:        0b00111111,
    H_POS_ENT:  0b11000000
}

const WN_MAPPING = {
    POS: 0b00011111,
    FLAGS: 0b11100000
}

const WEST_HYRULE = {
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

exports.WEST_HYRULE = WEST_HYRULE;