import { SET_PATIENTS } from "../actions/patientActions";

const initialState = {
    patients: [],
};

const rootReducer = (state= initialState, action)=>{
    switch(action.type){
        case SET_PATIENTS: 
            return {...state, patients: action.payload};
        default: return state;
    }
}

export default rootReducer;