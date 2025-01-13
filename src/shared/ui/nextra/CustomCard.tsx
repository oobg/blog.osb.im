import { Cards } from "nextra/components";
import NextraIcon from "../../../../public/assets/nextra-icon/icons";

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
}: CustomCardProps): JSX.Element {
	const filteredMeta = Object.keys(_meta).filter((key) => key !== "*");

	return (
		<Cards>
			{filteredMeta.map((key, index) => {
				const metaItem = _meta[key];

				if (!metaItem) return null;

				return (
					<Cards.Card
						key={index}
						title={metaItem.title}
						href={`/posts/${href}/${key}`}
						icon={<NextraIcon name={iconName} extension={iconExtension} width={width} height={height} />}
						children=""
						arrow
					/>
				);
			})}
		</Cards>
	);
}