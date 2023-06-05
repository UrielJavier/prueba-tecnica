import { taxesTypes } from "@types";

export const getTaxes = () => {
    return {
        type: taxesTypes.TAXES_REQUESTED
    }
};

export const getTaxForm = (taxId:string) => {
    return {
        type: taxesTypes.SUBMISSION_FORM_REQUESTED,
        taxId
    }
};

export const postSubmissionTax = (taxId:string, formData:object) => {
    return {
        type: taxesTypes.SUBMISSION_CREATE_REQUESTED,
        taxId,
        formData
    }
};