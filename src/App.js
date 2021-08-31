import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUtensils,
	faDollarSign,
	faExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { Menu } from "./components/Menu";
import { Inicio } from "./components/Inicio";

import "./App.css";
import Precios from "./components/Precios";

function App() {
	const handleScrollClick = (e) => {
		e.preventDefault();
		const target = e.target.getAttribute("href");

		const location = document.querySelector(target);

		window.scrollTo({
			left: 0,
			top: location !== null ? location.offsetTop - 100 : 0,
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
								Platillos <FontAwesomeIcon icon={faUtensils} />
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
								Acerca de nosostros <FontAwesomeIcon icon={faExclamation} />
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
				<section className="precios" id="precios">
					<Precios />
				</section>
			</Container>
			<Container fluid>
				<section className="acerca" id="acerca"></section>
			</Container>
		</>
	);
}

export default App;
