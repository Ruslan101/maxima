/**
 * @function mapStateToProps
 * @argument {string} string название компонента 
 * @returns {function} function mapStateToProps для задоного компонента
 * @summary Генерирует и возвращает mapStateToProps для каждого компонента
 * @summary mapStateToProps вызывается всякий раз, когда происходит обновление store
 * @summary mapStateToProps передаёт необходимые свойства из store в компонент
 * @summary возвращает поля из store на обновление которых данный компонент должен реагировать
 */
function mapStateToProps(component) {
	switch (component) {
		case "Main": {
			return function (state) {
				return {
					activePage: state.activePage
				};
			}
		}
		case "NavigationOption": {
			return function (state) {
				return {
					activePage: state.activePage
				};
			}
		}
		default: return undefined;
	}
}

export default mapStateToProps;