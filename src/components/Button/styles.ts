import styled from 'styled-components';

export const ButtonContainer = styled.button`
    cursor: pointer;
    transition: all 0.2s ease;
    background: #29b8af;
    height: 100%;
    font-size: 1rem;
    padding: 0 0.5rem;
    color: white;
    font-weight: bold;
    box-shadow: 10px 0px 15px 0px rgba(0, 0, 0, 0.15),
        7px -2px 7px 0px rgba(255, 255, 255, 0.57) inset;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    border: 2px solid white;

    &:hover {
        filter: brightness(0.9);
    }
`;
