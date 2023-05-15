import { Action } from '@ngrx/store'
import { ActionTypes } from '../actions'

export const initialState = 0

export function counterReducer(state = initialState, action: Action) {
	switch (action.type) {
		case ActionTypes.Increment:
			return state + 1
		case ActionTypes.Decrement:
			return state - 1
		case ActionTypes.Reset:
			return (state = 0)
		default:
			return state
	}
}
