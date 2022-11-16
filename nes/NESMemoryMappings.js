const NES_HEADER_MAP = {
    NES_HEADER: {
        size: 4
    },
    PRG_ROM_SIZE: {    },
    CHR_ROM_SIZE: {    },
    FLAGS6: {
        expand: true,
        mapping: {
            MIRRORING:          0b00000001,
            BATTERY:            0b00000010,
            TRAINER:            0b00000100,
            IGNORE_MIRRORING:   0b00001000,
            LOWER_MAPPER_NR:    0b11110000
        }
    },
    FLAGS7: {
        expand: true,
        mapping: {
            VS_UNI_SYS:         0b00000001,
            PLAY_CHOICE:        0b00000010,
            NES_2_0:            0b00001100,
            UPPER_MAPPER_NR:    0b11110000
        }
    },
    FLAGS8: {
        expand: true,
        mapping: {
            PRG_RAM_SIZE:       0b11111110
        }
    },
    FLAGS9: {
        expand: true,
        mapping: {
            TV_SYSTEM:          0b00000001,
            RESERVED:           0b11111110
        }
    },
    FLAGS10: {
        expand: true,
        mapping: {
            TV_SYSTEM:          0b00000011,
            PRG_RAM:            0b00010000,
            BUS_CONF:           0b00100000
        }
    },
    PADDING: {
        size: 4
    }
}

exports.NES_HEADER_MAP = NES_HEADER_MAP;