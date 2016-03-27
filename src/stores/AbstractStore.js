/**
 * Created by olivier on 2016-03-26.
 */

import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils';

export default class AbstractStore extends ReduceStore<Immutable.Map> {

    constructor(){
        if (new.target === AbstractStore) {
            throw new TypeError("Cannot construct AbstractStore instances directly");
        }
    }

    getInitialState() {
        return new Immutable.Map({});
    }
}