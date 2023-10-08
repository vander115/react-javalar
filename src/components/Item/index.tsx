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

    const [color, setColor] = useState('#59595900');

    const itemPosition = new Position(x, y);

    const generateColor = useCallback(() => {
        setColor('#59595900');

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
    }, [planets, java]);

    useEffect(() => {
        setColor('#59595900');
        generateColor();
    }, [planets]);

    return (
        <ItemContainer color={color}>
            <span>
                {x},{y}
            </span>
        </ItemContainer>
    );
}
