import { connect } from 'react-redux';
import SignIn from '../Registration/sigIn';
import MapDispatchToProps from '../../store/mapDispatchToProps';

/**
 * @kind class SignIn_w
 * @summary возвращает React component обертку для SignIn
 * @summary связывает mapStateToProps и mapDispatchToProps с компонентом и передает необходимые поля и методы в него
 */
const SignIn_w = connect(null, MapDispatchToProps("SignIn"))(SignIn);

export default SignIn_w;