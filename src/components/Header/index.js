import './style.css';
import { HamburgerIcon, PlusIcon } from '../../icons';

const Header = () => {
  return(
    <div className="header-container">
      <div className="ham-icon">
        <HamburgerIcon />
      </div>
      <div className="main-text">New chat</div>
      <div className="plus-icon">
        <PlusIcon />
      </div>
    </div>
  )
}

export default Header;