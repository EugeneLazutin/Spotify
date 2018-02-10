export const getNextTrack = (list = [], current = {}) => {
    let index = getIndex(list, current);

    if (index !== -1) {
        do {
            if(index === list.length - 1) {
                index = -1;
            }
        } while(!list[++index].preview_url);
        return list[index];
    }
};

export const getPrevTrack = (list = [], current = {}) => {
    let index = getIndex(list, current);

    if (index !== -1) {
        do {
            if(index === 0) {
                index = list.length;
            }
        } while(!list[--index].preview_url);
        return list[index];
    }
};

const getIndex = (list, current) => {
    if(!current || !current.id) {
        return -1;
    }
    return list.findIndex(item => item.id === current.id);
};
