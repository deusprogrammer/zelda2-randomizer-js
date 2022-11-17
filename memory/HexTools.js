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

const byteMaskExtractor = (fieldMap, bytes) => {
    let fields = {};
    bytes = bytes >>> 0;
    for (let key in fieldMap) {
        let mask = fieldMap[key];
        fields[key] = maskBits(bytes, mask);
    }
    return fields;
}

const hexArrayExtractor = (objDesc, buffer, start = 0, end = null) => {
    let extracted = [];

    if (!end) {
        end = start + buffer.length;
    }

    if (!objDesc.size) {
        objDesc.size = 1;
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
        let {expand, mapping, fields, size, offset: offsetOverride} = map[key];

        if (!size) {
            size = 1;
        }

        if (offsetOverride) {
            offset = start + offsetOverride;
        }

        let bytes = buffer.slice(offset, offset + size);
        data = littleEndianConvert(bytes);

        if (mapping) {
            data = byteMaskExtractor(mapping, data);
            offset += size;
            if (expand) {
                extracted = {...extracted, ...data};
                continue;
            }
        } else if (fields) {
            data = {};
            for (let {name, size, relOffset, mask} of fields) {
                let fieldSize = size || 1;
                let fieldOffset = offset + relOffset;

                let fieldBytes = buffer.slice(fieldOffset, fieldOffset + fieldSize);
                fieldBytes = littleEndianConvert(fieldBytes);
                data[name] = maskBits(fieldBytes, mask);
            }
        }

        offset += size;
        extracted[key] = data;
    }

    return extracted;
}

exports.maskBits = maskBits;
exports.hexExtractor = hexExtractor;
exports.hexArrayExtractor = hexArrayExtractor;
exports.byteMaskExtractor = byteMaskExtractor;
exports.bigEndianConvert = bigEndianConvert;
exports.littleEndianConvert = littleEndianConvert;