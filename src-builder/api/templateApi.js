import {Api} from './Api'

const BASE_URL = 'http://mbuilder.local/';

const getContent = () => {
    return Api.get('template/content');
};

const getData = () => {
    return Api.get(BASE_URL + 'getData');
};

const TemplateApi = {getContent, getData};

export {TemplateApi}