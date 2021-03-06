import React from 'react';
import NavWrapper from './containers/NavWrapper';
import { NavLink } from 'react-router-dom';
export default class Nav extends React.Component {
  render() {
    const { isOpen } = this.props;
    console.log('Nav is open', isOpen);
    const NavClass = isOpen ? 'open' : 'nav';
    return (
      <NavWrapper className={NavClass}>
        <ul className={NavClass}>
          <li>
            <div className={(NavClass && 'logox') || 'Open'}>
              <NavLink className={NavClass} activeClassName="activex" to="/Home">
                <h1 className="menu-h1">
                  Fabian<span className="z">Z</span>von
                </h1>
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink
              className={NavClass}
              onUpdate={() => window.scrollTo(0, 0)}
              activeClassName="activex"
              to="/MyDay"
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink className={NavClass} activeClassName="activex" to="/Contact">
              Contact
            </NavLink>
          </li>

          <div className="social-nav">
            <a href="https://www.facebook.com/fabian.quinonez.35">
              <span className="fab fa-facebook" />
            </a>
            <a href="https://twitter.com/FabianZvon">
              <span className="fab fa-twitter" />
            </a>

            <a href="https://www.instagram.com/fabianzvon/">
              <span className="fab fa-instagram" />
            </a>
            <a href="mailto:quinonezfabian@yahoo.com">
              <span className="fas fa-at" />
            </a>
          </div>
        </ul>
      </NavWrapper>
    );
  }
}
