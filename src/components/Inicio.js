import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img4 from "../assets/img/4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Inicio = () => {
	return (
		<>
			<div className="inicio__left-content">
				<h1>Las mejores pupusas del pais</h1>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
				quisquam doloribus obcaecati quam in consequuntur repellat aut cumque
				itaque nam repellendus, nemo doloremque voluptatibus eveniet vel ipsum
				quaerat! Sint, mollitia.
				<div className="inicio__left-content-footer">
					<h4 className="inicio__contact-title">Pedidos a</h4>
					<span> {<FontAwesomeIcon icon={faPhone} />} 85871053</span>
					<span> {<FontAwesomeIcon icon={faPhone} />} 82681145</span>
				</div>
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
						<img className="d-block w-100" src={img4} alt="Third slide" />
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
};
