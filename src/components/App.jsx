import Product from './Product';
import './App.css';
import {Fragment} from "react";


function createUUID() {
	return crypto.randomUUID()
}

let data = [
	{
	id: createUUID(),
	name: "Tacos With Lime",
	imgUrl: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
	price: 10.99,
}, {
	id: createUUID(),
	name: "Fries and Burger",
	imgUrl: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640",
	price: 14.29,
}
]


export default function App() {
	return <>
		<h1>Best selling</h1>
		
		{data.map(item => {
			return <Product {...item} key={item.id}/>
		})}
		
		<button onClick={() => {}} className="btn btn-primary">Create Product</button>
	
	</>;
}
