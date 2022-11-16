const LAST_BIT_MASK = 1 >>> 0;

const littleEndianConvert = (buffer) => {
    let n = 0;
    for (let i = buffer.length - 1; i >= 0; i--) {
        n = (n << 8) + buffer[i];
    }
    return n;
}

const bigEndianConvert = (buffer) => {
    let n = 0;
    for (let i = 0; i < buffer.length; i++) {
        n = (n << 8) + buffer[i];
    }
    return n;
}

const maskBits = (bytes, mask) => {
    let maskedValue = mask & bytes;
    while ((mask & LAST_BIT_MASK) == 0) {
        maskedValue = maskedValue >>> 1;
        mask = mask >>> 1;
    }

    return maskedValue;
}

const rebuildByte = (map, object) => {
    
};

const generateMemoryMap = (map, start = 0) => {
    let offset = start;
    let memoryMap = {};
    for (let key in map) {
        let value = map[key];

        if (!value.size) {
            value.size = 1;
        }

        if (value.offset) {
            offset = start + value.offset;
        } else if (value.skip) {
            offset = offset + value.skip;
        }

        memoryMap[key] = offset.toString(16);

        offset += value.size;
    }

    return memoryMap;
}

const hexArrayExtractor = (objDesc, buffer, start = 0, end = null) => {
    let extracted = [];

    if (!end) {
        end = start + buffer.length;
    }

    for (let offset = start, i = 0; offset < end; offset += objDesc.size, i++) {
        let bytes = buffer.slice(offset, offset + objDesc.size);
        let data = littleEndianConvert(bytes);

        if (objDesc.mapping) {
            data = byteMaskExtractor(objDesc.mapping, data);
            if (objDesc.expand) {
                extracted[i] = data;
                continue;
            }
        }

        extracted[i] = data;
    }

    return extracted;
}

const hexExtractor = (map, buffer, start = 0) => {
    let offset = start;
    let extracted = {};
    for (let key in map) {
        let value = map[key];

        if (!value.size) {
            value.size = 1;
        }

        if (value.offset) {
            offset = start + value.offset;
        } else if (value.skip) {
            offset = offset + value.skip;
        }

        let bytes = buffer.slice(offset, offset + value.size);
        let data = littleEndianConvert(bytes);

        offset += value.size;

        if (value.mapping) {
            data = byteMaskExtractor(value.mapping, data);
            if (value.expand) {
                extracted = {...extracted, ...data};
                continue;
            }
        }

        extracted[key] = data;
    }

    return extracted;
}

const byteMaskExtractor = (fieldMap, bytes) => {
    let fields = {};
    bytes = bytes >>> 0;
    for (let key in fieldMap) {
        let mask = fieldMap[key];
        fields[key] = maskBits(bytes, mask);
    }
    return fields;
}

exports.maskBits = maskBits;
exports.generateMemoryMap = generateMemoryMap;
exports.hexExtractor = hexExtractor;
exports.hexArrayExtractor = hexArrayExtractor;
exports.byteMaskExtractor = byteMaskExtractor;
exports.bigEndianConvert = bigEndianConvert;
exports.littleEndianConvert = littleEndianConvert;