interface Props {
	top?: string,
	bottom?: string,
	left?: string,
	right?: string,
	size?: number,
	contentType?: "movies" | "books"
	z?: string
}

const BlurCircle = ({
	top = "auto",
	bottom = "auto",
	left = "auto",
	right = "auto",
	size = 58,
	contentType = "movies",
	z = "-z-50"
}: Props) => {
	return (
		<>
			<div className={`absolute ${z} h-${size} w-${size} aspect-square rounded-full ${contentType === "movies" ? "bg-m-primary/30" : "bg-b-primary/50"} blur-3xl`} style={{ top: top, bottom: bottom, left: left, right: right }}>
			</div>
		</>
	);
};

export default BlurCircle;