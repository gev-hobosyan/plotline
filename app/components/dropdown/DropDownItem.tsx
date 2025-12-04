import React, { ReactNode } from 'react';

interface Props {
	children: string | ReactNode;
	onClick?: () => void;
	className?: string;
}

const DropDownItem = ({ children, onClick, className }: Props) => {
	return (
		<>
			<li className={`cursor-pointer ${className}`} onClick={onClick}>{children}</li>
		</>
	);
};

export default DropDownItem;