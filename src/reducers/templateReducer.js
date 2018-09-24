import * as templateAction from '../template_builder/actions/templateAction';

const templateReducer = (state = [], action) => {
    switch(action.type) {
        case templateAction.GET_CONTENT:
            return state.concat([action.data]);
        default:
            return state;
    }
};
export default templateReducer;