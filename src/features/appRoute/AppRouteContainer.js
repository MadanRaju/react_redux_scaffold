import { connect } from 'react-redux';

import AppRoute from './AppRoute';

const mapStateToProps = state => ({
    loginData: state.loginReducer.login,
});

export default connect(mapStateToProps)(AppRoute);
