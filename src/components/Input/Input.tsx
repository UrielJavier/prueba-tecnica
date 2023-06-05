import { FC, ReactElement } from "react";
import inputStyle from './Input.module.css';

interface Input extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    mode?: 'primary' | 'seconday';
    children?: ReactElement;
    label?: string;
}

const Input:FC<Input> = ({
    type = 'text',
    label,
    mode = 'primary',
    children,
    ...props
}) => {
    return(
    <label className={inputStyle.label}>
        <p className={inputStyle.textLabel}>{label}</p>
        <input {...props} type={type} className={inputStyle[mode]}>{children}</input>
    </label>)
}

export default Input;