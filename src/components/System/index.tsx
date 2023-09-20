import { useMemo } from 'react';
import { SystemContainer, SystemItensRow } from './styles';
import { Item } from '../Item';

export function System() {
    const matriz = useMemo(
        () => new Array(16).fill(0).map(() => new Array(17).fill(0)),
        [],
    );

    return (
        <SystemContainer>
            {matriz.map((row, rowIndex) => (
                <SystemItensRow>
                    {row.map((_, itemIndex) => (
                        <Item
                            key={`${rowIndex}-${itemIndex}`}
                            x={rowIndex}
                            y={itemIndex}
                        />
                    ))}
                </SystemItensRow>
            ))}
        </SystemContainer>
    );
}
