import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";

import CartInstance from "../CartInstance/CartInstance";
import ImgContainer from "../ImgContainer/ImgContainer";
import Loader from "../Loader/Loader";

import "./ItemDetail.css";

function ItemDetail({ item, loading }) {
	const [count, setCount] = useState(1);
	const [stock, setStock] = useState(item.stock);

	const { addItem, getItemCount } = useContext(cartContext);

	const onCountChange = (count) => {
		setCount(count);
	};
	const onAddToCart = () => {
		addItem(item, count);
		setStock(stock - count);
		setCount(1);
	};

	useEffect(() => {
		onCountChange(count);
		setStock(item.stock - getItemCount(item.id));
	}, [count, item.stock, item.id, getItemCount]);

	return (
		<article
			className="detail-item"
			style={loading ? { display: "flex", justifyContent: "center" } : {}}
		>
			{loading ? (
				<Loader />
			) : (
				<React.Fragment>
					<ImgContainer imgs={item.img} alt={item.title} />
					<div className="detail-description">
						<h2 className="detail-description__title">{item.title}</h2>
						<div className="detail-description__price-box">
							<h4 className="detail-description__price">
								${new Intl.NumberFormat().format(item.price)}
							</h4>
							<h4 className="detail-description__cuotas">
								en 12x $
								{new Intl.NumberFormat().format(
									((item.price * 1.25) / 12).toFixed(2),
								)}
							</h4>
							<Link>Ver los medios de pago</Link>
						</div>

						<div className="detail-description__data">
							<p>{item.description}</p>
						</div>
					</div>
					<CartInstance
						stock={stock}
						initial={1}
						price={item.price}
						count={count}
						handleFunctions={[onCountChange, onAddToCart]}
						selled={item.selled && item.selled}
					/>
				</React.Fragment>
			)}
		</article>
	);
}

export default ItemDetail;
