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
	contentType = "movies",
	z = "-z-50"
}: Props) => {

	// const root = useRef(null)
	// const scope = useRef<Scope>(null)

	// useEffect(() => {
	// 	scope.current = createScope({ root }).add(self => {
	// 		setInterval(() => {
	// 			animate(".circle", {
	// 				scale: [
	// 					{ to: 1.25, ease: "inOut", duration: 600 },
	// 					{ to: 1, duration: 600 },
	// 					// { to: 0.80, ease: 'in', duration: 600 },
	// 					// { to: 1, duration: 300 },
	// 				]
	// 			})
	// 		}, 1200)

	// 		return () => scope.current!.revert()
	// 	})
	// }, [])

	return (
		<>
			<div className={`circle absolute ${z} h-58 w-58 aspect-square rounded-full ${contentType === "movies" ? "bg-m-primary/30" : "bg-b-primary/50"} blur-3xl`} style={{ top: top, bottom: bottom, left: left, right: right }}>
			</div>
		</>
	);
};

export default BlurCircle;