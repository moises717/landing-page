import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import img15 from "../assets/img/15.jpg";
import img16 from "../assets/img/16.jpg";
import img4 from "../assets/img/4.jpg";
import img7 from "../assets/img/7.jpg";
import img8 from "../assets/img/8.jpg";
import img9 from "../assets/img/9.png";

import img11 from "../assets/img/11.jpg";

export const Menu = () => {
	return (
		<>
			<h2 className="title-section">Platillos </h2>
			<hr />
			<Row xs={1} md={2} className="g-4">
				<Col>
					<Card>
						<Card.Img variant="top" src={img15} className="img-thumnail" />
						<Card.Body>
							<Card.Title>Tostones con queso</Card.Title>
							<Card.Text>
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={img16} className="img-thumnail" />
						<Card.Body>
							<Card.Title>Pupusa de queso</Card.Title>
							<Card.Text>
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={img4} className="img-thumnail" />
						<Card.Body>
							<Card.Title>Chimichanga</Card.Title>
							<Card.Text>
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={img16} className="img-thumnail" />
						<Card.Body>
							<Card.Title>Tula cuecho</Card.Title>
							<Card.Text>
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={img7} className="img-thumnail" />
						<Card.Body>
							<Card.Title>
								Alitas de pollo con tostones y pico de gallo
							</Card.Title>
							<Card.Text>
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col>
					<Card>
						<Card.Img variant="top" src={img8} className="img-thumnail" />
						<Card.Body>
							<Card.Title>Toston Burguer</Card.Title>
							<Card.Text>
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={img9} className="img-thumnail" />
						<Card.Body>
							<Card.Title>Canastas de platanos rellenas de carne</Card.Title>
							<Card.Text>
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={img11} className="img-thumnail" />
						<Card.Body>
							<Card.Title>Pupusa de chicharron</Card.Title>
							<Card.Text>
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
								<FontAwesomeIcon className="star" icon={faStar} />
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};
