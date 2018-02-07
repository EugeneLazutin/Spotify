export const getNextTrack = (list = [], current = {}) => {
    let index = getIndex(list, current);

    if (index !== -1) {
        if(++index === list.length) {
            return list[0];
        }
        return list[index];
    }
};

export const getPrevTrack = (list = [], current = {}) => {
    let index = getIndex(list, current);

    if (index !== -1) {
        if(index === 0) {
            return list[list.length - 1];
        }
        return list[--index];
    }
};

const getIndex = (list, current) => {
    if(!current || !current.id) {
        return -1;
    }
    return list.findIndex(item => item.id === current.id);
};
