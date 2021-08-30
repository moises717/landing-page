import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/img/1.jpg";
import img2 from "./assets/img/2.jpg";
import img3 from "./assets/img/4.jpg";

import "./App.css";

function App() {
	const handleScrollClick = (e) => {
		e.preventDefault();
		const target = e.target.getAttribute("href");
		const location = document.querySelector(target).offsetTop;
		console.log(target);
		window.scrollTo({
			left: 0,
			top: location - 66,
		});
	};
	const handleScrollClickTop = (e) => {
		e.preventDefault();

		window.scrollTo({
			left: 0,
			top: 0,
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
					<Navbar.Brand href="#inicio" onClick={handleScrollClickTop}>
						<div className="logo">
							<span className="logo__title">PUPUSAS</span>
							<small className="logo__subtitle">La gran sultana</small>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								href="#comidas"
								onClick={handleScrollClick}
								className="navbar_light__links">
								Comidas
							</Nav.Link>
							<Nav.Link
								href="#precios"
								className="navbar_light__links"
								onClick={handleScrollClick}>
								Precios
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link
								href="#deets"
								className="navbar_light__links"
								onClick={handleScrollClick}>
								Acerca
							</Nav.Link>
							<Nav.Link
								eventKey={2}
								href="#memes"
								className="navbar_light__links">
								Contacto
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container>
				<section className="inicio" id="inicio">
					<div className="inicio__left-content">
						<h1>Las mejores pupusas del pais</h1>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
						quisquam doloribus obcaecati quam in consequuntur repellat aut
						cumque itaque nam repellendus, nemo doloremque voluptatibus eveniet
						vel ipsum quaerat! Sint, mollitia.
					</div>

					<div className="inicio__rigth-content">
						<Carousel>
							<Carousel.Item className="c-item">
								<img className="d-block w-100" src={img1} alt="First slide" />
							</Carousel.Item>
							<Carousel.Item className="c-item">
								<img className="d-block w-100" src={img2} alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item className="c-item">
								<img className="d-block w-100" src={img3} alt="Third slide" />
							</Carousel.Item>
						</Carousel>
					</div>
				</section>
				<section className="comidas" id="comidas">
					hola
				</section>
				<section className="precios" id="precios"></section>
				<section className="acerca" id="acerca"></section>
				<section className="contacto" id="contacto"></section>
			</Container>
		</>
	);
}

export default App;
