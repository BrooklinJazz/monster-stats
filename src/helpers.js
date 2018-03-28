export const convAbilityScoreToMod = (score) => {
    return parseInt((score - 10) / 2)
}

export const isUndefined = (value) => {
    return value === 'undefined'
}

export const checkIndexIsEven = (n) => {
    return n % 2 == 0;
}