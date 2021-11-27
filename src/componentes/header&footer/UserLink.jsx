import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const UserLink = ({ user, handleLogout }) => {
  return (
    <>
      <div className="container-psd">
        <div className="avatarContainer">
          <img className="img-avatar" src={user.avatar} alt="Avatar" />
          <p>{user.name}</p>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="bg-transparent"
              id="dropdown-basic"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/profile">Perfil</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/" onClick={handleLogout}>
                  Salir
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default UserLink;
