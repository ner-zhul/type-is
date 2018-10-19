/**
 * 定义了一系列类型
 */
const type = {
    undefined: 'undefined',
    null: 'null',
    int: 'int',
    float: 'float',
    nan: 'NaN',
    string: 'string',
    boolean: 'boolean',
    function: 'function',
    array: 'array',
    object: 'object',
    unknown: 'unknown',
    infinity: 'Infinity',
};

/**
 * 获取一个变量的类型
 * @param value 要获取类型的变量
 * @returns {string} 类型
 */
function getType(value) {
    /**
     * js六大数据类型：number、string、object、Boolean、null、undefined
     *
     * number：包括数字和 NaN，数字可能是整数或者浮点数
     * string： 由单引号或双引号来说明，如"string"
     * object: 这个我也很难解释的说。就是除了上面五种之外的类型
     * Boolean: 就是true和false啦
     * null: 故名思久，null就是没有，什么也不表示
     * undefined：未定义，就是你创建一个变量后却没给它赋值~
     *
     * typeof 除了可以判断数据类型还可以判断function类型
     */
    switch (typeof value) {
    case 'number':
        if (Number.isNaN(value)) {
            return type.nan;
        } if (Number.isFinite(value)) {
            return type.infinity;
        } if (Number.isInteger(value)) {
            return type.int;
        }
        return type.float;
    case 'string':
        return type.string;
    case 'object':
        if (value === null) {
            return type.null;
        } if (value instanceof Array) {
            return type.array;
        }
        return type.object;
    case 'boolean':
        return type.boolean;
    case 'undefined':
        return type.undefined;
    case 'function':
        return type.function;
    default:
        return type.unknown;
    }
}

function isUndefined(value) {
    return getType(value) === type.undefined;
}
function isNull(value) {
    return getType(value) === type.null;
}
function isInt(value) {
    return getType(value) === type.int;
}
function isFloat(value) {
    return getType(value) === type.float;
}
function isNan(value) {
    return getType(value) === type.nan;
}
function isString(value) {
    return getType(value) === type.string;
}
function isBoolean(value) {
    return getType(value) === type.boolean;
}
function isFunction(value) {
    return getType(value) === type.function;
}
function isArray(value) {
    return getType(value) === type.array;
}
function isObjectExceptArray(value) {
    return getType(value) === type.object;
}
function isUnknown(value) {
    return getType(value) === type.unknown;
}
function isInfinity(value) {
    return getType(value) === type.infinity;
}
function isNumber(value) {
    return [type.int, type.float, type.infinity, type.nan].includes(getType(value));
}
function isUndefinedOrNull(value) {
    return [type.undefined, type.null].includes(getType(value));
}
function isObject(value) {
    return [type.array, type.object].includes(getType(value));
}

export default {
    type,
    getType,
    // base
    isUndefined,
    isNull,
    isInt,
    isFloat,
    isNan,
    isString,
    isBoolean,
    isFunction,
    isArray,
    isObjectExceptArray,
    isUnknown,
    isInfinity,
    // extra
    isNumber,
    isUndefinedOrNull,
    isObject,
};
