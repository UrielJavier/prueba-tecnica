import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { taxesActions } from "../../redux/actions/actions";
import { State, TaxState } from "@models";

export const useTaxForm = () => {
    const dispatch = useDispatch();
    const state: TaxState = useSelector<State>(state => state.taxState) as TaxState;
    const [submissionData, setSubmissionData] = useState<any>({});
    const { taxId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (taxId && state['inputFields'].length === 0) dispatch(taxesActions.getTaxForm(taxId))
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taxId) {
            dispatch(taxesActions.postSubmissionTax(taxId, submissionData));
            navigate(-1)
        }
    };

    return {state, taxId, submissionData, setSubmissionData, handleSubmit}
}