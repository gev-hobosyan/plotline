import SectionPart from "./SectionPart";

interface Props {
	contentType: "movies" | "books"
}

const HomeSection = ({ contentType }: Props) => {
	return (
		<>
			<div className="py-4 px-10 max-md:px-5 overflow-hidden">
				<SectionPart contentType={contentType} href={`recommend`} title="Recommended for you" />
				<SectionPart contentType={contentType} href={`my-${contentType}`} title={`My ${contentType[0].toUpperCase() + contentType.slice(1, contentType.length)}`} />
			</div>
		</>
	);
};

export default HomeSection;