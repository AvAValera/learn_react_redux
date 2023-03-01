import {searchByCountry} from "../../config";

export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';
export const SET_CLEAR_DETAILS = '@@details/SET_CLEAR_DETAILS';

const setCountry = country => ({
    type: SET_COUNTRY,
    payload: country
})
const setLoading = () => ({
    type: SET_LOADING,
})
const setError = err => ({
    type: SET_ERROR,
    payload: err
})
export const setClearDetails = () => ({
    type: SET_CLEAR_DETAILS,
})

export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLoading());
    client.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch(err => dispatch(setError(err.message)));
}