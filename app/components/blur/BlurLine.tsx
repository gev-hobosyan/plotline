interface Props {
	contentType?: "movies" | "books"
}

const BlurLine = ({ contentType = "movies" }: Props) => {
	return (
		<>
			<div className={`absolute -z-50 h-15 w-full ${contentType === "movies" ? 'bg-m-primary/30' : 'bg-b-primary/30'} blur-3xl`} style={{ top: 0 }}>
			</div>
		</>
	);
};

export default BlurLine;