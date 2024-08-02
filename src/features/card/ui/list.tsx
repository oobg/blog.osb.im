import React from 'react';
import dataList from "@/features/card/data";
import List from "@/shared/ui/mainCard/list";
import Card from "@/shared/ui/mainCard/card";
import CardImage from "@/shared/ui/mainCard/image";
import CardContent from "@/shared/ui/mainCard/content";
import StackTag from "@/shared/ui/mainCard/stack";
import ALink from "@/shared/ui/mainCard/alink";

interface CardProps {
	imageSrc: string;
	imageAlt?: string;
	title: string;
	description: string;
	stack: Array<string>;
	gitLink?: string;
	readLink?: string;
	goToLink?: string;
}

interface CardListProps {
	cards: CardProps[];
}

const CardList: React.FC<CardListProps> = () => {
	return (
		<List>
			{dataList.map(({imageSrc, imageAlt, title, description, stack, gitLink, readLink, goToLink}, index) => (
				<Card key={index}>
					<CardImage imageSrc={imageSrc} imageAlt={imageAlt}/>
					<div className="p-4 pt-2 pb-1">
						<CardContent title={title} description={description}/>
						<div className="flex flex-wrap gap-2 mt-2 mb-2">
							{stack.map((stackItem, index) => (
								<StackTag key={index}>{stackItem}</StackTag>
							))}
						</div>
					</div>
					<hr className="border-gray-500"/>
					<div className="flex gap-3 px-4 py-2">
						{gitLink !== "#" && <ALink href={gitLink}>Git</ALink>}
						{readLink !== "#" && <ALink href={readLink}>Read</ALink>}
						{goToLink !== "#" && <ALink href={goToLink}>Go To</ALink>}
					</div>
				</Card>
			))}
		</List>
	);
}

export default CardList;