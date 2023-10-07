import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ type = 'button', children, ...rest }: IButton) {
    return (
        <ButtonContainer type={type} {...rest}>
            <span>{children}</span>
        </ButtonContainer>
    );
}
