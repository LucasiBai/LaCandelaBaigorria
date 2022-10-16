import { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./CustomSelect.css";

const CustomSelect = ({ items, children }) => {
	const [isOver, setIsOver] = useState(false);

	const mouseOver = (bool) => {
		setTimeout(() => {
			setIsOver(bool);
		}, 370);
	};

	return (
		<div
			onMouseEnter={() => mouseOver(true)}
			onMouseLeave={() => mouseOver(false)}
			className="custom-select"
		>
			<p className="custom-select--title">
				{children}{" "}
				<span style={{ fontSize: 10, color: "#f0f8ff94" }}>
					<FontAwesomeIcon icon={faAngleDown} />
				</span>
			</p>
			{isOver && (
				<span className="custom-select-box">
					<div className="triangulo-equilatero-bottom"></div>
					{items &&
						items.map((item) => (
							<Link key={item.title} to={item.link}>
								{item.icon && <FontAwesomeIcon icon={item.icon} />} {item.title}
							</Link>
						))}
				</span>
			)}
		</div>
	);
};

export default CustomSelect;
