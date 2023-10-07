import { InputHTMLAttributes } from 'react';
import { InputContainer } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
}

export function Input({ type = 'text', ...rest }: IInput) {
    return (
        <InputContainer>
            <input type={type} {...rest} />
        </InputContainer>
    );
}
