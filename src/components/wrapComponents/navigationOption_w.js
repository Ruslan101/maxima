import { connect } from 'react-redux';
import NavigationOption from '../Layout/navigationOption';
import MapDispatchToProps from '../../store/mapDispatchToProps';
import mapStateToProps from '../../store/mapStateToProps'; 

/**
 * @kind class NavigationOption_w
 * @summary возвращает React component обертку для NavigationOption
 * @summary связывает mapStateToProps и mapDispatchToProps с компонентом и передает необходимые поля и методы в него
 */
const NavigationOption_w = connect(mapStateToProps("NavigationOption"), MapDispatchToProps("NavigationOption"))(NavigationOption);

export default NavigationOption_w;