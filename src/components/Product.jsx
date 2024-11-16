import PropTypes from 'prop-types';
import {Fragment} from "react";

Product.propTypes = {
	name: PropTypes.string.isRequired,
	imgUrl: PropTypes.string,
	price: PropTypes.number.isRequired,
};

export default function Product({
	                                imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
	                                name,
	                                price,
                                }) {
	return (
		<Fragment>
			<h2>{name}</h2>
			<img src={imgUrl} alt={name} width="480"/>
			<p>Price: {price} credits</p>
		</Fragment>
	);
};
