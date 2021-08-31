import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";
import img8 from "../assets/img/8.jpg";

export const Menu = () => {
	return (
		<>
			<h2 className="title-section">MENU </h2>
			<Row xs={1} md={2} className="g-4">
				<Col>
					<Card>
						<Card.Img variant="top" src={img5} />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={img6} />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={img7} />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={img8} />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};
