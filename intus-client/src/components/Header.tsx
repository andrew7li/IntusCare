import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar variant="light" expand="lg" className="header">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo_IntusCare.svg"
          width="300"
          className="d-inline-block align-top ms-3"
        />
      </Navbar.Brand>
    </Navbar>
  );
}
