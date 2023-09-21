import { useCallback, useEffect, useState } from 'react';
import { Position } from '../../classes/Position';
import { ItemContainer } from './styles';
import { usePlanet } from '../../hooks/planets';

interface IItemsProps {
    x: number;
    y: number;
}

export function Item({ x, y }: IItemsProps) {
    const { java, planets } = usePlanet();

    const [color, setColor] = useState('lightgray');

    const itemPosition = new Position(x, y);

    const generateColor = useCallback(() => {
        java.forEach((element) => {
            if (
                element.getX() == itemPosition.getX() &&
                element.getY() == itemPosition.getY()
            ) {
                setColor('red');
            }
        });

        planets.forEach((planet) => {
            if (
                planet.getPosition().getX() == itemPosition.getX() &&
                planet.getPosition().getY() == itemPosition.getY()
            ) {
                setColor(planet.getColor());
            }
        });
    }, []);

    useEffect(() => {
        generateColor();
    }, []);

    return (
        <ItemContainer color={color}>
            {x},{y}
        </ItemContainer>
    );
}
