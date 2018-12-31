const isEmptyObj = val => {
    for(let key in val) {
        if(val.hasOwnProperty(key))
            return false;
    }
    return true;
};

export default isEmptyObj;