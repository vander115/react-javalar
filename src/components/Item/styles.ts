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
    font-size: 0.75rem;
    color: black;

    span {
        mix-blend-mode: revert;
    }
`;
