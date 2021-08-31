import React from "react";

const Precios = () => {
	return (
		<>
			<h2 className="title-section">Precios </h2>
			<hr />
			<div className="precios-container">
				<br />
				<div className="precios__items">
					<div className="precios__items-left">
						<h5>AMPLIA VARIEDAD DE PUPUSAS</h5>
						<ul>
							<li>Pupusa de pollo C$40</li>
							<li>Pupusa de chicharron C$50</li>
							<li>Pupusa de revuelta C$50</li>
							<li>Pupusa de cerdo C$40</li>
							<li>Pupusa de queso C$30</li>
						</ul>
						<h5>COMBOS</h5>
						<ul>
							<li>
								<b>COMBO #1 (FAMILIAR)</b>{" "}
								<li>(8) pupusas + (2) gaseosas C$300</li>
							</li>
							<li>
								<b>COMBO #2 (PARA COMPARTIR)</b> <li>(3) pupusas C$100</li>
							</li>
							<li>
								<b>COMBO #3 </b> <li>(2) pupusas + Te frio C$100</li>
							</li>
						</ul>
					</div>
					<div className="precios__items-right">
						<h5>PLATOS PARA COMPARTIR</h5>
						<ul>
							<li>Totones con queso y pico de gallo C$120</li>
							<li>Totones mixtos y pico de gallo C$160</li>
							<li>
								(6) Canastillas de platano rellenas de carne y queso mozzarella
								C$180
							</li>
							<li>
								Tostones burguer: filete de res, queso mozzarella, lechuga y
								tomate C$120
							</li>
							<li>
								Filete de res en fajitas salteadas acompañadas con tostones y
								ensalada C$160
							</li>
							<li>
								Lomo de cerdo en fajitas salteadas acompañadas con tostones y
								ensalada C$140
							</li>
						</ul>
						<h5>BEBIDAS</h5>
						<ul>
							<li>Cacao C$35</li>
							<li>Agua purificada C$30</li>
							<li>HI C' manzana C$25</li>
							<li>Te frio C$25</li>
							<li>Refresco naturales C$25</li>
							<li>Jugo de naranja C$25</li>
							<li>Gaseosa 12 onzas C$30</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Precios;
