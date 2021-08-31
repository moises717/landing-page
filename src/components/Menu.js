import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";
import img8 from "../assets/img/8.jpg";
import img9 from "../assets/img/9.png";
import img10 from "../assets/img/10.jpg";
import img11 from "../assets/img/11.jpg";
import img12 from "../assets/img/12.jpg";
import img13 from "../assets/img/13.jpg";
import img14 from "../assets/img/14.jpg";

export const Menu = () => {
	return (
		<>
			<h2 className="title-section">Platillos </h2>
			<hr />
			<Row xs={1} md={2} className="g-4">
				<Col>
					<Card>
						<Card.Img variant="top" src={img1} className="img-thumnail" />
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
						<Card.Img variant="top" src={img2} className="img-thumnail" />
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
						<Card.Img variant="top" src={img4} className="img-thumnail" />
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
						<Card.Img variant="top" src={img5} className="img-thumnail" />
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
						<Card.Img variant="top" src={img6} className="img-thumnail" />
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
						<Card.Img variant="top" src={img7} className="img-thumnail" />
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
						<Card.Img variant="top" src={img8} className="img-thumnail" />
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
						<Card.Img variant="top" src={img9} className="img-thumnail" />
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
						<Card.Img variant="top" src={img11} className="img-thumnail" />
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
