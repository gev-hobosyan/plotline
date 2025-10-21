import ErrorSection from "./components/ErrorSection";

const NotFound = () => {
	return (
		<>
			<ErrorSection error="Page Not Found" errorCode={404} />
		</>
	);
};

export default NotFound;