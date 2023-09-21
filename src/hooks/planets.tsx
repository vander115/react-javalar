import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
} from 'react';
import { Planet } from '../classes/Planet';
import { Position } from '../classes/Position';

interface IPlanetContext {
    planets: Planet[];
    java: Position[];
    handleMove(numberOfInstants?: number): void;
}

interface IPlanetProviderProps {
    children: ReactNode;
}

const PlanetContext = createContext<IPlanetContext>({} as IPlanetContext);

export function PlanetProvider({ children }: IPlanetProviderProps) {
    const java = [
        new Position(8, 7),
        new Position(8, 8),
        new Position(8, 9),
        new Position(7, 7),
        new Position(7, 8),
        new Position(7, 9),
    ];
    let planets = [
        new Planet('Python', 1, 4, 24.0, 'lightyellow'),
        new Planet('JavaScript', 2, 3, 10.0, 'yellow'),
        new Planet('Ruby on Rails', 3, 2, 48.0, 'red'),
        new Planet('PHP', 4, 2, 60.0, 'blue'),
        new Planet('C#', 5, 1, 4.0, 'purple'),
        new Planet('C++', 6, 2, 0.5, 'lightblue'),
        new Planet('C', 7, 10, 0.1, 'darkblue'),
    ];

    console.log(planets);

    const handleMove = useCallback((numberOfInstants: number) => {
        planets.forEach((planet) => {
            for (let i = 0; i < numberOfInstants; i++) {
                planet.moveOnePosition();
            }
        });
        console.log(planets);
    }, []);

    const value = useMemo(
        () => ({
            planets,
            java,
            handleMove,
        }),
        [planets, java],
    );

    return (
        <PlanetContext.Provider value={value}>
            {children}
        </PlanetContext.Provider>
    );
}

export function usePlanet(): IPlanetContext {
    const context = useContext(PlanetContext);

    if (!context) {
        throw new Error('usePlanet must be used within a AppProvider');
    }

    return context;
}
