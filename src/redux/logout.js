import React from "react";
import { connect } from "react-redux";

import { logout } from "./redux/actions"

const Logout = ({user,logout}) => {
  return (
    <button className="btn btn-danger" onClick={() => logout()}>
      Logout {user.username}
    </button>
  );
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
// const mapStateToProps = state => ({
//   user: state.auth.user
// });
const mapStateToProps = ({user}) => ({user});
export default connect(mapStateToProps,mapDispatchToProps)(Logout)