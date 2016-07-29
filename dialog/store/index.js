import {createReducerStore} from 'lib/store';
import {actions as ActionTypes} from './constants';
import i18n from 'lib/mixins/i18n';

const initialState = { };

const Store = createReducerStore(function(state, payload) {
	let stateChanges;
	const { action } = payload;


  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      stateChanges = Object.assign({}, state, {
        // isGlobalSettingFetching: true
      });
      break;
    }
  return Object.assign({}, state, stateChanges);
}, initialState);

export default Store;
