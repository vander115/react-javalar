import styled from 'styled-components';

interface IItemContainer {
    color: string;
}

export const ItemContainer = styled.div<IItemContainer>`
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
    background: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 0px 15px 0px rgba(0, 0, 0, 0.15),
        8px -2px 10px 0px rgba(255, 255, 255, 0.57) inset;
    transition: all 0.2s ease;

    span {
        font-size: 0.75rem;
        font-weight: bold;
        color: white;
    }
`;
