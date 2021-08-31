import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUtensils,
	faBars,
	faDollarSign,
	faIdCard,
	faExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { Menu } from "./components/Menu";
import { Inicio } from "./components/Inicio";

import "./App.css";

function App() {
	const handleScrollClick = (e) => {
		console.log(e);
		e.preventDefault();
		const target = e.target.getAttribute("href");

		const location = document.querySelector(target);

		window.scrollTo({
			left: 0,
			top: location !== null ? location.offsetTop - 66 : 0,
		});
	};

	return (
		<>
			<Navbar
				className="navbar_light"
				collapseOnSelect
				sticky="top"
				expand="lg"
				bg="light"
				variant="light">
				<Container>
					<Navbar.Brand>
						<Nav.Link href="#inicio" onClick={handleScrollClick}>
							<div className="logo">
								<span className="logo__title">
									PUPUSAS <FontAwesomeIcon icon={faUtensils} />
								</span>
								<small className="logo__subtitle">La gran sultana</small>
							</div>
						</Nav.Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								href="#comidas"
								onClick={handleScrollClick}
								className="navbar_light__links">
								Menu <FontAwesomeIcon icon={faBars} />
							</Nav.Link>
							<Nav.Link
								href="#precios"
								className="navbar_light__links"
								onClick={handleScrollClick}>
								Precios <FontAwesomeIcon icon={faDollarSign} />
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link
								href="#acerca"
								className="navbar_light__links"
								onClick={handleScrollClick}>
								Acerca <FontAwesomeIcon icon={faExclamation} />
							</Nav.Link>
							<Nav.Link
								eventKey={2}
								href="#contacto"
								onClick={handleScrollClick}
								className="navbar_light__links">
								Contacto <FontAwesomeIcon icon={faIdCard} />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container>
				<section className="inicio" id="inicio">
					<Inicio />
				</section>
				<section className="comidas" id="comidas">
					<Menu />
				</section>
				<section className="precios" id="precios"></section>
				<section className="acerca" id="acerca"></section>
				<section className="contacto" id="contacto"></section>
			</Container>
		</>
	);
}

export default App;
