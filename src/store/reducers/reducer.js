import ROUTE_TO_NEXT_PAGE from '../actions/route_to_next_page';
import initialState from '../initialState';

/**
 * @function reducer
 * @param {object} object Текущее состояние
 * @param {object} object Обьект события
 * @returns {object}
 * @summary Возвращает новое (следующее) состояние хранилище
 */
function reducer(state = initialState.activePage, action) {
    switch(action.type) {
        case ROUTE_TO_NEXT_PAGE: return { activePage: action.activePage };
        
        default: return { activePage: state };
    }
}

export default reducer;