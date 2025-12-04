import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}

const SelectElement = ({ children, className, onClick }: Props) => {
	return (
		<>
			<div className={`${className} px-2.5 py-1 border rounded-full cursor-pointer`} onClick={onClick}>
				{children}
			</div>
		</>
	);
};

export default React.memo(SelectElement);