import {
    ChangeEvent,
    InputHTMLAttributes,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { NumberInputButton, NumberInputContainer } from './styles';

interface INumberInput extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    handleChange?: (value: number) => void;
}

export function NumberInput({
    type = 'text',
    handleChange,
    ...rest
}: INumberInput) {
    const [value, setValue] = useState(1);

    const handleChangeNumber = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (event?.target.value) {
                if (isNaN(Number(event.target.value))) {
                    return setValue(0);
                } else {
                    setValue(Number(event.target.value));
                }
            }
        },
        [setValue],
    );

    const handleDecrease = useCallback(() => {
        setValue((prev) => {
            if (prev > 0) {
                return prev - 1;
            }
            return prev;
        });
    }, []);

    const handleIncrease = useCallback(() => {
        setValue((prev) => prev + 1);
    }, []);

    useEffect(() => {
        handleChange && handleChange(value);
    }, [value, handleChange]);

    return (
        <NumberInputContainer>
            <input
                type={type}
                {...rest}
                value={value}
                onChange={handleChangeNumber}
                pattern="^[0-9]+$"
            />
            <NumberInputButton type="button" onClick={handleIncrease}>
                +
            </NumberInputButton>
            <NumberInputButton type="button" onClick={handleDecrease}>
                -
            </NumberInputButton>
        </NumberInputContainer>
    );
}
