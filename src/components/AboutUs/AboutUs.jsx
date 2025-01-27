import { Outlet, Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="links">
        <li>
          <Link to="us-story">Nuestra historia</Link>
        </li>
        <li>
          <Link to="us-mission">Nuestra misión</Link>
        </li>
      </ul>
      <p>Aquí puedes encontrar más información sobre nuestro sitio.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
