export const GET_CONTENT = '[template] GET_CONTENT';
export const GET_CONTENT_SUCCESS = '[template] GET_CONTENT_SUCCESS';
export const DROP_CONTENT = '[template] DROP_CONTENT';

export function getDataSuccess(data){
    return {
        type:GET_CONTENT,
        data
    }
}

export function dropElement(data){
    return {
        type: DROP_CONTENT,
        data
    }
}