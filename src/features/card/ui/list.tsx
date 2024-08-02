import React from 'react';
import List from "@/shared/ui/mainCard/list";
import Card from "@/shared/ui/mainCard/card";

const CardList: React.FC = () => {
	return (
		<List>
			{cards.map((card, index) => (
				<Card key={index} {...card} />
			))}
		</List>
	);
}

export default CardList;

const cards = [
	{
		imageSrc: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "random card image",
		title: "UI/UX Review Check",
		description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\""
	},
	{
		imageSrc: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "random card image",
		title: "UI/UX Review Check",
		description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\""
	},
	{
		imageSrc: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "random card image",
		title: "UI/UX Review Check",
		description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\""
	},
	{
		imageSrc: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "random card image",
		title: "UI/UX Review Check",
		description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\""
	},
	{
		imageSrc: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "random card image",
		title: "UI/UX Review Check",
		description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\""
	},
	{
		imageSrc: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "random card image",
		title: "UI/UX Review Check",
		description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\""
	},
	{
		imageSrc: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
		imageAlt: "random card image",
		title: "UI/UX Review Check",
		description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\""
	},
];