import { Tax, TaxState } from "@models";
import { taxesTypes } from "@types";

const initialState:TaxState = {
    "taxes": [],
    "inputFields": [],
    "loading": false
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case taxesTypes.TAXES_OK: 
            return {
                ...state,
                taxes: action.payload.taxes,
                loading: false
            }
        case taxesTypes.TAXES_REQUESTED: 
            return {
                ...state,
                loading: true
            }
        case taxesTypes.SUBMISSION_FORM_REQUESTED: 
            return {
                ...state,
                loading: true
            }
        case taxesTypes.SUBMISSION_FORM_OK: 
            return {
                ...state,
                inputFields: action.payload.inputFields,
                loading: false
            }
        case taxesTypes.SUBMISSION_CREATE_REQUESTED: 
            return {
                ...state,
                loading: true
            }
        case taxesTypes.SUBMISSION_CREATE_OK: 
            return {
                ...state,
                taxes: addSubmission(state, action),
                loading: false
            }
        default:
            return {
                ...state,
                loading: false
            }
    }
} 

const addSubmission = (state:TaxState, action:any) => {
    return state.taxes.map((tax:Tax) => {
        if(tax?.id !== action.payload.taxId) {
            return tax;
        } else {
            let submissions = tax?.submissions || [];
            submissions.push(action.payload.data);
            return {...tax, submissions}
        }
    });
}