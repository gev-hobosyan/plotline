import ErrorSection from "./components/sections/ErrorSection";

export const metadata = {
	title: "Plotline - 404"
}

const NotFound = () => {
	return (
		<>
			<ErrorSection error="Page Not Found" errorCode={404} />
		</>
	);
};

export default NotFound;