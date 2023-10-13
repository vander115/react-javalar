import { Planet } from './Planet';
import CSharpIcon from '../../assets/planet-icons/csharp.svg';

export class CSharp extends Planet {
    constructor() {
        super('C#', 5, 1, 4.0, 'purple', CSharpIcon);
    }
}
