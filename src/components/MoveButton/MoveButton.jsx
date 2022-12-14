import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./MoveButton.css";

const MoveButton = ({ direction, handleSlide, className }) => {
	return (
		<button
			className={`move-button ${className && className}`}
			onClick={handleSlide}
			style={{
				padding: "0.7rem 1rem",
				borderRadius: "100%",
				cursor: "pointer",
				border: "none",
				fontSize: "20px",
				backgroundColor: "white",
			}}
		>
			<FontAwesomeIcon
				icon={direction === "right" ? faAngleRight : faAngleLeft}
			/>
		</button>
	);
};

export default MoveButton;
