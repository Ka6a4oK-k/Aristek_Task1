export const groupBy = (arr, key) => {
    if (arr === undefined){
        return new Error ('Array is not provided')
    }
    if (key === undefined){
        return new Error ('Key is not provided')
    }
    if (!arr.some(currValue => currValue[key])){
        return {}
    }
    return arr.reduce((groups, currValue) => {
        (groups[currValue[key]] = groups[currValue[key]] || []).push(currValue);
        return groups;
    }, {});
};