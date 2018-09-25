import * as templateAction from '../template_builder/actions/templateAction';

const templateReducer = (state = {content: [{id:1,type:1,data:'haha'}]}, action) => {
    switch(action.type) {
        case templateAction.GET_CONTENT:
            return state.concat([action.data]);
        case templateAction.DROP_CONTENT:
            let newState = state;
            newState.content.push(action.data);
            return newState;    
        default:
            return state;
    }
};
export default templateReducer;