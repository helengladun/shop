import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ContactFormContainer from "../../containers/forms/ContactFormContainer";
// import Form from "../../components/SignIn/FormDialog";

const Header = () => {
  return (
      <header className="header">
        <nav className="nav header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              Item 1
            </li>
            <li className="nav__item">
              Item 2
            </li>
            <li className="nav__item">
              Item 3
            </li>
          </ul>
        </nav>
        <Link to='/signin'>Sign in</Link>

        {/*<Form show={this.state.isOpen}*/}
              {/*onClose={this.closePopup}>*/}
          {/*<h1>test</h1>*/}
          {/*<ContactFormContainer />*/}
        {/*</Form>*/}
      </header>
  );
};

export default Header;
