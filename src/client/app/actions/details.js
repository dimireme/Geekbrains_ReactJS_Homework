import { createAction } from 'redux-actions';

/* Загрузка конкретного покемона */

export const loadDetailsStart   = createAction('LOAD_DETAILS_START');
export const loadDetailsSuccess = createAction('LOAD_DETAILS_SUCCESS');
export const loadDetailsFailure = createAction('LOAD_DETAILS_FAILURE');
export const hideDetailsSuccess = createAction('HIDE_DETAILS_SUCCESS');

export const loadDetails = (dispatch) => (pokemon) => {
	const { details, id, detailsSource } = pokemon;
	dispatch(loadDetailsStart(id));
	if(!details) {
		fetch(detailsSource)
			.then(res => res.json())
			.then(details => {
				dispatch(loadDetailsSuccess({id, details}));
			})
		.catch(err => {
			dispatch(loadDetailsFailure({id, err}));
		});
	}
};

export const hideDetails = (dispatch) => (id) => {
	dispatch(hideDetailsSuccess(id));
};
