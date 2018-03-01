import { FETCH_POKEMON } from '../actions';

const INITIAL_STATE = {
	data: null,
	errMessage: null,
};

export default function pokeData(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_POKEMON:
			return !action.error
				? { ...state, data: action.payload, errMessage: null }
				: {
						...state,
						data: null,
						errMessage: 'We could not find the pokemon you are looking for, try again!',
					};
		default:
			return state;
	}
}
