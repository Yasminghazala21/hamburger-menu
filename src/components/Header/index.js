// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="hamburger-header-bg-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          data-testid="hamburgerIconButton"
          className="hamburger-sign"
        >
          <GiHamburgerMenu />
        </button>
      }
    >
      {close => (
        <div className="popup-container">
          <button
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
          <ul className="modal-list-items">
            <li>
              <Link className="popup-item" to="/">
                <AiFillHome />
                <p className="item"> Home </p>
              </Link>
            </li>
            <li>
              <Link className="popup-item" to="/about">
                <BsInfoCircleFill />
                <p className="item"> About </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
