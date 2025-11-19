import LoadingSpinner from "@/app/components/sections/LoadingSpinner";

const Loading = () => {
	return (
		<>
			<div className="h-screen flex items-center justify-center">
				<LoadingSpinner contentType="movies" />
			</div>
		</>
	);
};

export default Loading;