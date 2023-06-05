export interface Submission {
    name: string;
    surname: string;
    age: string;
}

export interface Tax {
    id: string;
    name: string;
    year: string;
    submissions?: Submission[];
}

export interface InputField {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    maxLength: string;
}