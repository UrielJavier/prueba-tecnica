import { FC, ReactElement } from "react";
import buttonStyle from './Button.module.css';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode?: 'primary' | 'seconday';
    children: ReactElement;
    className?: string;
}

const Button:FC<Button> = ({
    mode = 'primary',
    children,
    className,
    ...props
}:Button) => {
    return <button {...props} className={`${buttonStyle[mode]} ${className}`}>{children}</button>;
};

export default Button;