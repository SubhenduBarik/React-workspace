import { VISIBILITY_FILTERS } from '../Constants';

const InitialFilter = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = InitialFilter, actions) => {
    switch (actions.type) {
        case 'SET_FILTER': {
            return VISIBILITY_FILTERS[actions.payload];
        }
        default: return state;
    }
}

export default visibilityFilter;