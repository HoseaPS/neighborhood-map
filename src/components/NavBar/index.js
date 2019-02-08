import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class NavBar extends Component {
  static propTypes = {
    OnToogleSidebar: PropTypes.func.isRequired,
  };

  state = { isActive: false };

  toogleButton = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    const { OnToogleSidebar } = this.props;
    const { isActive } = this.state;

    return (
      <div className="navbar">
        <button
          type="button"
          className="sidebarLink"
          onClick={() => this.toogleButton() || OnToogleSidebar()}
        >
          <FontAwesomeIcon icon={isActive ? faArrowLeft : faBars} />
        </button>
        <div className="title">Pontos de alimentação na vizinhança</div>
      </div>
    );
  }
}

export default NavBar;
