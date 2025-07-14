import './NavBar.css';
import logo from '../Images/Logo.png';

const DEFAULT_AVATAR = 'https://i.pravatar.cc/40?img=3'; // Imagen preventiva

function NavBar({ avatarUrl }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo Donaciones Seguras" className="navbar-logo" />
        <div className="navbar-title">
          <span className="navbar-title-top">DONACIONES</span>
          <span className="navbar-title-bottom">SEGURAS</span>
        </div>
      </div>
      <div className="navbar-right">
        <img
          src={avatarUrl || DEFAULT_AVATAR}
          alt="Avatar usuario"
          className="navbar-avatar"
        />
      </div>
    </nav>
  );
}

export default NavBar;
