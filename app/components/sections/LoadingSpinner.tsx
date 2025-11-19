import React from 'react';

const LoadingSpinner = ({
	contentType
}: {
	contentType: "movies" | "books"
}) => {
	return (
		<>
			<div className={`animate-spin rounded-full h-7 w-7 border-b-2 ${contentType === "movies" ? "border-m-primary/50" : "border-b-primary/50"} mx-auto my-2`}></div>
		</>
	);
};

export default React.memo(LoadingSpinner);