export const GET_CONTENT = '[template] GET_CONTENT';
export const GET_CONTENT_SUCCESS = '[template] GET_CONTENT_SUCCESS';

export function getDataSuccess(data){
    return {
        type:GET_CONTENT,
        data
    }
}