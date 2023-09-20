import { useState } from 'react';
import { Position } from '../../classes/Position';
import { ItemContainer } from './styles';

interface IItemsProps {
    x: number;
    y: number;
}

export function Item({ x, y }: IItemsProps) {
    const [color, setColor] = useState('lightgray');
    const itemPosition = new Position(x, y);
    const javaPoint = [
        new Position(8, 7),
        new Position(8, 8),
        new Position(8, 9),
        new Position(7, 7),
        new Position(7, 8),
        new Position(7, 9),
    ];

    if (javaPoint.includes(itemPosition)) {
        setColor('red');
    }

    return (
        <ItemContainer color={color}>
            {x},{y}
        </ItemContainer>
    );
}
