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

const hexExtractor = (map, buffer, valueTransform = null, start = 0) => {
    let offset = start;
    let extracted = {};
    for (key in map) {
        let value = map[key];

        if (!value.size) {
            value.size = 1;
        }

        if (value.offset) {
            offset = start + value.offset;
        } else if (value.skip) {
            offset = offset + value.skip;
        }

        console.log(`${key}(${offset.toString(16)})`);

        let bytes = buffer.slice(offset, offset + value.size);
        let data = littleEndianConvert(bytes);

        if (value.mapping) {
            data = byteMaskExtractor(value.mapping, data);
        }

        if (valueTransform) {
            data = valueTransform(data);
        }

        extracted[key] = data;

        offset += value.size;
    }

    return extracted;
}

const byteMaskExtractor = (fieldMap, bytes) => {
    let fields = {};
    bytes = bytes >>> 0;
    for (key in fieldMap) {
        let mask = fieldMap[key];
        fields[key] = maskBits(bytes, mask);
    }
    return fields;
}

exports.maskBits = maskBits;
exports.hexExtractor = hexExtractor;
exports.byteMaskExtractor = byteMaskExtractor;