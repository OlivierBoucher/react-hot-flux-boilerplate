/**
 * Created by olivier on 2016-03-26.
 */

import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils';

export default class AbstractStore extends ReduceStore {

    constructor(){
        super();
        if (new.target === AbstractStore) {
            throw new TypeError("Cannot construct AbstractStore instances directly");
        }
    }

    getInitialState() {
        return new Immutable.Map();
    }
}