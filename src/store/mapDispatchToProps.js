import { bindActionCreators } from 'redux';
import ROUTE_TO_NEXT_PAGE from './actionCreators/route_to_next_page';

/**
 * @function mapDispatchToProps
 * @param {string} component 
 * @returns {function} function mapDispatchToProps для задоного компонента
 * @summary Генерирует и возвращает mapDispatchToProps для каждого компонента
 * @summary передаёт в компонент методы для обновления необходимого поля в store
 * @summary вызов mapDispatchToProps приведет к вызову dispatch и обновлению соответствующего поля
 */
function mapDispatchToProps(component) {
	switch (component) {
		case "NavigationOption": return function (dispatch) {
			return {
				change_activePage: bindActionCreators(ROUTE_TO_NEXT_PAGE, dispatch)
			};
		};
		case "SignIn": return function (dispatch) {
			return {
				change_activePage: bindActionCreators(ROUTE_TO_NEXT_PAGE, dispatch)
			};
		};
		default: return undefined;
	}
}

export default mapDispatchToProps; 