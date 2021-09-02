import { connect } from 'react-redux';
import Main from '../Layout/main';
import mapStateToProps from '../../store/mapStateToProps';

/**
 * @kind class Main_w
 * @summary возвращает React component обертку для Main
 * @summary связывает mapStateToProps и mapDispatchToProps с компонентом и передает необходимые поля и методы в него
 */
const Main_w = connect(mapStateToProps("Main"), null)(Main);

export default Main_w;