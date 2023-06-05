import { FC } from "react";
import { Button, Input } from "@components";
import { useTaxForm } from "./useTaxForm";
import { Tax, InputField } from "@models";

const TaxForm: FC = () => {

    const {state, taxId, submissionData, setSubmissionData, handleSubmit} = useTaxForm();

    return (<>
        <p>{state?.taxes?.filter((tax:Tax) => tax.id === taxId)[0].name}</p>
        <form onSubmit={handleSubmit}>
            {state?.inputFields?.map((inputField:InputField) => {
                return (
                    <Input
                        key={inputField.id}
                        label={inputField.label}
                        required
                        type={inputField.type}
                        name={inputField.id}
                        placeholder={inputField.placeholder}
                        {...(inputField?.maxLength ? { maxLength: Number(inputField.maxLength) } : {})}
                        value={submissionData?.[inputField.id] || ''}
                        onChange={e => setSubmissionData((prev: any) => ({ ...prev, [inputField.id]: e.target.value }))}
                    />
                );
            })}
            <Button type="submit">
                <p>Send</p>
            </Button>
        </form>
    </>)
}

export default TaxForm;