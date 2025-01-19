import { ReactNode } from "react";
import { Cards } from "nextra/components";
import NextraIcon from "/public/assets/nextra-icon/icons";

interface IMetaItem {
	title: string;
}

interface IMeta {
	[key: string]: IMetaItem | undefined;
}

interface CustomCardProps {
	_meta: IMeta;
	href: string;
	iconName: string;
	iconExtension?: string | undefined;
	width?: number | undefined;
	height?: number | undefined;
}

export default function CustomCard({
	_meta,
	href,
	iconName,
	iconExtension = undefined,
	width = undefined,
	height = undefined,
}: CustomCardProps): ReactNode {
	const filteredMeta: string[] = Object.keys(_meta).filter((key: string): boolean => key !== "*");

	return (
		<Cards>
			{filteredMeta.map((key: string, index: number): ReactNode => {
				const metaItem: IMetaItem | undefined = _meta[key];

				if (!metaItem) return <></>;

				const CardIcon: ReactNode = (
					<NextraIcon
						name={iconName}
						extension={iconExtension}
						width={width}
						height={height}
					/>
				);

				return (
					<Cards.Card
						key={index}
						title={metaItem.title}
						href={`/posts/${href}/${key}`}
						icon={CardIcon}
						arrow
					/>
				);
			})}
		</Cards>
	);
}