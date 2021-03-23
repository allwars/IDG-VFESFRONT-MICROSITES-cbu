/* thnks to: https://gist.github.com/Salakar/1d7137de9cb8b704e48a */

/**
 * Simple is object check.
 * @param item
 * @returns {boolean}
 */
const isObject = (item) => {
    return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
};


/**
 * Deep merge two objects.
 * @param target
 * @param source
 */

const mergeDeep = (target, source) => {
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!target[key] || !isObject(target[key])) {
                    target[key] = source[key];
                }
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        });
    }
    return target;
};

export default mergeDeep;
