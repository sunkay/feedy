import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import $ from "jquery";

class Header extends React.Component {
  componentDidMount() {
    $(".dropdown-button").dropdown();
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">one</a>
          </li>
          <li>
            <a href="#!">two</a>
          </li>
          <li className="divider" />
          <li>
            <a href="#!">three</a>
          </li>
        </ul>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="left brand-logo"
            >
              Feedy
            </Link>
            <ul className="right">
              {this.renderContent()}
              <li>
                <a
                  className="dropdown-button"
                  href="#!"
                  data-activates="dropdown1"
                >
                  Dropdown<i className="material-icons right">
                    arrow_drop_down
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
