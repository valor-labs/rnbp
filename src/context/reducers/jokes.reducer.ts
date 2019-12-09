import { ADD_JOKE, REMOVE_JOKES } from '../actions/jokes.actions';

export function jokesReducer(state: any[], action: any) {
    switch (action.type) {
        case ADD_JOKE:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_JOKES:
            return [];
        default:
            return state;
    }
}
