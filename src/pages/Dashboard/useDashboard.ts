import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taxesActions } from "../../redux/actions/actions";
import { useNavigate } from "react-router";
import { State, TaxState } from "@models";

export const useDashboard = () => {
    const dispatch = useDispatch();
    const state: TaxState = useSelector<State>(state => state.taxState) as TaxState;
    const navigate = useNavigate();

    useEffect(() => {
        if (state['taxes'].length === 0) dispatch(taxesActions.getTaxes())
    }, [])

    const handleNewSubmission = (id: string) => {
        navigate(`/dashboard/${id}`)
    }

    const handleViewSubmissions = () => {
        navigate(`/dashboard/submissions`)
    }

    return {handleNewSubmission, handleViewSubmissions, state}
}