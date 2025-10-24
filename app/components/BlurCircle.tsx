interface Props {
	top?: string,
	bottom?: string,
	left?: string,
	right?: string,
}

const BlurCircle = ({
	top = "auto",
	bottom = "auto",
	left = "auto",
	right = "auto"
}: Props) => {
	return (
		<>
			<div className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-m-primary/30 blur-3xl" style={{ top: top, bottom: bottom, left: left, right: right }}>
			</div>
		</>
	);
};

export default BlurCircle;