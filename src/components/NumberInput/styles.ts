import styled from 'styled-components';

export const NumberInputContainer = styled.label`
    display: flex;
    height: 2.5rem;
    gap: 0.5rem;

    input {
        background: none;
        border-radius: 0.25rem;
        width: 5rem;
        outline: none;
        border: 2px solid white;
        box-shadow: 10px 0px 15px 0px rgba(0, 0, 0, 0.15),
            7px -2px 7px 0px rgba(255, 255, 255, 0.57) inset;

        color: white;
        font-weight: bold;
        padding: 0 0.5rem;
    }
`;

export const NumberInputButton = styled.button`
    height: 100%;
    width: 2.5rem;
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    box-shadow: 10px 0px 15px 0px rgba(0, 0, 0, 0.15),
        7px -2px 7px 0px rgba(255, 255, 255, 0.57) inset;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    border: 2px solid white;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        filter: brightness(0.9);
    }
`;
