import { Planet } from './Planet';
import RubyOnRailsIcon from '../../assets/planet-icons/ruby.svg';

export class RubyOnRails extends Planet {
    constructor() {
        super('Ruby on Rails', 3, 2, 48.0, '#E11F21', RubyOnRailsIcon);
    }
}
