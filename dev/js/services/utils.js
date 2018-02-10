import axios from 'axios';
import { cookieTokenName } from '../constants/app';
import { getCookie, setCookie, removeCookie } from './cookieService';
import { getHashParams } from './locationService';

export const contains = (string, subString) => {
    const s = string.toLowerCase();
    const subS = subString.toLowerCase();
    if (s.includes) {
        return s.includes(subS);
    }
    if (s.contains) {
        return s.contains(subS);
    }
    return s === subS;
};

export const saveToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setCookie(cookieTokenName, token);
};

export const removeToken = () => {
    axios.defaults.headers.common['Authorization'] = '';
    removeCookie(cookieTokenName);
};

export const getToken = () => {
    return getHashParams().access_token || getCookie(cookieTokenName);
};

export const fixModal = () => {
    $('.modal-backdrop').appendTo('.content-body');
    $('body').removeClass('modal-open').css('padding-right', '');
};

export const getOffsetLeft = (elem) => {
    let left = 0;
    while (elem) {
        left = left + elem.offsetLeft;
        elem = elem.offsetParent;
    }

    return Math.round(left);
};
