import Image from "react-bootstrap/Image";
import imgfoo from "../assets/img/footerimg.svg";

export const Acerca = () => {
	return (
		<>
			<div className="fo-lef">
				<Image src={imgfoo} fluid />
			</div>
			<div className="fo-right">
				<h3>PUPUSAS LA GRAN SULTANA</h3>
				<h5>Antogitos y mas</h5>
				<p>visítanos y con gusto te atenderemos.</p>
				<a
					href="https://www.facebook.com/NicaCode"
					target="_blank"
					rel="noreferrer">
					<span className="contacr-dev">Contactar al desarrolador</span>
				</a>
			</div>
		</>
	);
};
