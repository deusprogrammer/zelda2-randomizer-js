const OVERWORLD_SMALL_OBJECTS = {
    0x0: {name: "headstone",                    height: 1, width: 1, type: "wide"},
    0x1: {name: "cross",                        height: 1, width: 1, type: "wide"},
    0x2: {name: "angled cross",                 height: 1, width: 1, type: "wide"},
    0x3: {name: "tree stump",                   height: 2, width: 1, type: "tall", solid: true},
    0x4: {name: "stone table",                  height: 1, width: 1, type: "wide", solid: true},
    0x5: {name: "zelda",                        height: 1, width: 2, type: "wide"},
    0x6: {name: "zelda",                        height: 1, width: 2, type: "wide"},
    0x7: {name: "pit",                          height: 1, width: 1, type: "wide"},
    0x8: {name: "cloud",                        height: 1, width: 1, type: "wide"},
    0x9: {name: "cloud",                        height: 1, width: 1, type: "wide"},
    0xA: {name: "cloud",                        height: 1, width: 1, type: "wide"},
    0xB: {name: "cloud",                        height: 1, width: 1, type: "wide"},
    0xC: {name: "cloud",                        height: 1, width: 1, type: "wide"},
    0xD: {name: "cloud",                        height: 1, width: 1, type: "wide"},
    0xE: {name: "cloud",                        height: 1, width: 1, type: "wide"},
    0xF: {name: "cloud",                        height: 1, width: 1, type: "wide"},
}

const OVERWORLD_LARGE_OBJECTS = [
{
    0x1: { name: "",                            height: 2, width: 1, type: "wide", solid: true},
    0x2: { name: "forest ceiling",              height: 2, width: 1, type: "wide"},
    0x3: { name: "forest ceiling",              height: 2, width: 1, type: "wide"},
    0x4: { name: "curtains",                    height: 2, width: 1, type: "wide"},
    0x5: { name: "forest ceiling",              height: 1, width: 1, type: "wide"},
    0x6: { name: "handy glove block",           height: 1, width: 1, type: "wide", solid: true},
    0x7: { name: "horizontal pit",              height: 1, width: 1, type: "wide"},
    0x8: { name: "single weed",                 height: 1, width: 1, type: "wide"},
    0x9: { name: "two weeds",                   height: 1, width: 1, type: "wide"},
    0xA: { name: "north castle steps",          height: 1, width: 1, type: "wide"},
    0xB: { name: "background bricks",           height: 1, width: 1, type: "wide"},
    0xC: { name: "volcano background",          height: 1, width: 1, type: "wide"},
    0xD: { name: "handy glove block",           height: 1, width: 1, type: "tall", solid: true},
    0xE: { name: "background tree",             height: 1, width: 1, type: "tall"},
    0xF: { name: "column",                      height: 1, width: 1, type: "tall"},
}, {
    0x1: { name: "",                            height: 2, width: 1, type: "wide"},
    0x2: { name: "rock floor",                  height: 2, width: 1, type: "wide", solid: true},
    0x3: { name: "rock ceiling",                height: 2, width: 1, type: "wide", solid: true},
    0x4: { name: "bridge",                      height: 2, width: 1, type: "wide", solid: true},
    0x5: { name: "cave blocks",                 height: 1, width: 1, type: "wide", solid: true},
    0x6: { name: "handy glove blocks",          height: 1, width: 1, type: "wide", solid: true},
    0x7: { name: "collapsing bridge",           height: 1, width: 1, type: "wide", solid: true},
    0x8: { name: "single weed",                 height: 1, width: 1, type: "wide"},
    0x9: { name: "two weeds",                   height: 1, width: 1, type: "wide"},
    0xA: { name: "horizontal pit",              height: 1, width: 1, type: "wide"},
    0xB: { name: "background bricks",           height: 1, width: 1, type: "wide"},
    0xC: { name: "volcano background",          height: 1, width: 1, type: "wide"},
    0xD: { name: "handy glove block",           height: 1, width: 1, type: "tall", solid: true},
    0xE: { name: "rock floor",                  height: 2, width: 1, type: "wide", solid: true},
    0xF: { name: "stone spire",                 height: 2, width: 1, type: "tall", solid: true},
}
]

const TOWN_SMALL_OBJECTS = {
    0x1: { name: "open door grass",             height: 4, width: 1, type: "tall"},
    0x2: { name: "closed door grass",           height: 4, width: 1, type: "tall"},
    0x3: { name: "open door h bricks",          height: 4, width: 1, type: "tall"},
    0x4: { name: "open door v bricks",          height: 4, width: 1, type: "tall"},
    0x5: { name: "stone table",                 height: 1, width: 1, type: "wide"},
    0x6: { name: "chair",                       height: 1, width: 1, type: "wide"},
    0x7: { name: "?",                           height: 1, width: 1, type: "wide"},
    0x8: { name: "cloud",                       height: 1, width: 1, type: "wide"},
    0x9: { name: "table",                       height: 1, width: 1, type: "wide"},
    0xA: { name: "bench",                       height: 1, width: 1, type: "wide"},
    0xB: { name: "cross",                       height: 1, width: 1, type: "wide"},
    0xC: { name: "cloud",                       height: 1, width: 1, type: "wide"},
    0xD: { name: "cloud",                       height: 1, width: 1, type: "wide"},
    0xE: { name: "cloud",                       height: 1, width: 1, type: "wide"},
    0xF: { name: "cloud",                       height: 1, width: 1, type: "wide"},
}

const TOWN_LARGE_OBJECTS = [
{
    0x1: { name: "",                            height: 2, width: 1, type: "wide", solid: true},
    0x2: { name: "cross thatched roof",         height: 2, width: 1, type: "wide", solid: true},
    0x3: { name: "gray vertical roof",          height: 2, width: 1, type: "wide", solid: true},
    0x4: { name: "green vertical roof",         height: 2, width: 1, type: "wide", solid: true},
    0x5: { name: "brick building",              height: 1, width: 1, type: "wide", toGround: true},
    0x6: { name: "white building",              height: 1, width: 1, type: "wide", toGround: true},
    0x7: { name: "grass building",              height: 1, width: 1, type: "wide", toGround: true},
    0x8: { name: "white brick wall",            height: 1, width: 1, type: "wide", solid: true},
    0x9: { name: "log building",                height: 1, width: 1, type: "wide"},
    0xA: { name: "brown windows square",        height: 2, width: 1, type: "wide"},
    0xB: { name: "gray windows round",          height: 2, width: 1, type: "wide"},
    0xC: { name: "brown windows round",         height: 2, width: 1, type: "wide"},
    0xD: { name: "blue bricks",                 height: 2, width: 1, type: "tall", solid: true},
    0xE: { name: "column",                      height: 2, width: 1, type: "tall"},
    0xF: { name: "castle background bricks",    height: 1, width: 1, type: "tall"},
}
]

const PALACE_SMALL_OBJECTS = {
    0x1: { name: "window",                      height: 2, width: 1, type: "tall"},
    0x2: { name: "rightward unicorn",           height: 1, width: 1, type: "tall"},
    0x3: { name: "leftward wolf",               height: 1, width: 1, type: "tall"},
    0x4: { name: "crystal statue",              height: 4, width: 4, type: "tall"},
    0x5: { name: "crystal statue",              height: 4, width: 4, type: "wide"},
    0x6: { name: "locked door",                 height: 2, width: 1, type: "wide"},
    0x7: { name: "locked door",                 height: 2, width: 1, type: "wide"},
    0x8: { name: "cloud",                       height: 1, width: 1, type: "wide"},
    0x9: { name: "small cloud",                 height: 1, width: 1, type: "wide"},
    0xA: { name: "ironknuckle statue",          height: 2, width: 1, type: "wide"},
    0xB: { name: "small cloud",                 height: 1, width: 1, type: "wide"},
    0xC: { name: "small cloud",                 height: 1, width: 1, type: "wide"},
    0xD: { name: "small cloud",                 height: 1, width: 1, type: "wide"},
    0xE: { name: "small cloud",                 height: 1, width: 1, type: "wide"},
    0xF: { name: "small cloud",                 height: 1, width: 1, type: "wide"},
}

const PALACE_LARGE_OBJECTS = [
{
    0x1: { name: "horizontal pit",              height: 2, width: 1, type: "wide", solid: true},
    0x2: { name: "horizontal bricks",           height: 2, width: 1, type: "wide", solid: true},
    0x3: { name: "breakable blocks",            height: 2, width: 1, type: "wide", solid: true},
    0x4: { name: "steel blocks",                height: 2, width: 1, type: "wide", solid: true},
    0x5: { name: "breaking bridge",             height: 1, width: 1, type: "wide", solid: true},
    0x6: { name: "breakable blocks",            height: 1, width: 1, type: "wide", solid: true},
    0x7: { name: "horizontal bricks",           height: 1, width: 1, type: "wide", solid: true},
    0x8: { name: "curtains",                    height: 1, width: 1, type: "wide", solid: true},
    0x9: { name: "breakable blocks",            height: 1, width: 1, type: "wide", solid: true},
    0xA: { name: "horizontal bricks",           height: 2, width: 1, type: "wide", solid: true},
    0xB: { name: "breakable blocks",            height: 2, width: 1, type: "wide", solid: true},
    0xC: { name: "walk-thru bricks",            height: 2, width: 1, type: "wide"},
    0xD: { name: "breakable blocks",            height: 2, width: 1, type: "tall", solid: true},
    0xE: { name: "pit",                         height: 2, width: 1, type: "tall"},
    0xF: { name: "horizontal pit",              height: 1, width: 1, type: "tall"},
}
]

const SMALL_OBJECTS = [
    OVERWORLD_SMALL_OBJECTS,
    OVERWORLD_SMALL_OBJECTS,
    OVERWORLD_SMALL_OBJECTS,
    OVERWORLD_SMALL_OBJECTS,
    TOWN_SMALL_OBJECTS,
    PALACE_SMALL_OBJECTS,
    PALACE_SMALL_OBJECTS,
    PALACE_SMALL_OBJECTS
]

const LARGE_OBJECT_SETS = [
    OVERWORLD_LARGE_OBJECTS,
    OVERWORLD_LARGE_OBJECTS,
    OVERWORLD_LARGE_OBJECTS,
    OVERWORLD_LARGE_OBJECTS,
    TOWN_LARGE_OBJECTS,
    PALACE_LARGE_OBJECTS,
    PALACE_LARGE_OBJECTS,
    PALACE_LARGE_OBJECTS
]

exports.SMALL_OBJECTS = SMALL_OBJECTS;
exports.LARGE_OBJECT_SETS = LARGE_OBJECT_SETS;