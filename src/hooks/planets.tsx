import {
    Dispatch,
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

import { Planet } from '../classes/Planet/Planet';
import { Position } from '../classes/Position';
import { Python } from '../classes/Planet/Python';
import { JavaScript } from '../classes/Planet/JavaScript';
import { RubyOnRails } from '../classes/Planet/RubyOnRails';
import { PHP } from '../classes/Planet/PHP';
import { CSharp } from '../classes/Planet/CSharp';
import { CPlusPlus } from '../classes/Planet/CPlusPlus';
import { C } from '../classes/Planet/C';

interface IPlanetContext {
    planets: Planet[];
    java: Position[];
    handleMove(): void;
    numberOfInstants: number;
    setNumberOfInstants: Dispatch<React.SetStateAction<number>>;
}

interface IPlanetProviderProps {
    children: ReactNode;
}

const PlanetContext = createContext<IPlanetContext>({} as IPlanetContext);

export function PlanetProvider({ children }: IPlanetProviderProps) {
    const [numberOfInstants, setNumberOfInstants] = useState<number>(1);
    const [planets, setPlanets] = useState<Planet[]>([
        new Python(),
        new JavaScript(),
        new RubyOnRails(),
        new PHP(),
        new CSharp(),
        new CPlusPlus(),
        new C(),
    ]);
    const java = [
        new Position(8, 7),
        new Position(8, 8),
        new Position(8, 9),
        new Position(7, 7),
        new Position(7, 8),
        new Position(7, 9),
    ];

    const handleMove = useCallback(() => {
        setPlanets((oldPlanets) => {
            const newPlanets = oldPlanets.map((planet) => {
                planet.move(numberOfInstants);

                return planet;
            });
            return newPlanets;
        });
        console.log(planets);
    }, [numberOfInstants]);

    const value = useMemo(
        () => ({
            planets,
            java,
            handleMove,
            setNumberOfInstants,
            numberOfInstants,
        }),
        [planets, java, handleMove, setNumberOfInstants, numberOfInstants],
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
