import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as fromUser from '../../store/users';
import { AppState } from '../../store';
import ManualPage from '../../components/pages/ManualPage/ManualPage';

function mapStateToProps(state: AppState) {
  return {
    isLoggedIn: fromUser.getIsLoggedIn(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export type TPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManualPage);