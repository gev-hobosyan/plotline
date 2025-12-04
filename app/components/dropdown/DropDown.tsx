import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { ReactNode, useState } from 'react';

interface Props {
	children: ReactNode[];
	className?: string;
}

const DropDown = ({ children, className }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div className={`relative w-full p-5 ${className}`}>
			<button className={`absolute z-30 inline-flex items-center justify-between text-white ${isOpen ? "bg-none" : "bg-m-primary/20"}  rounded-full border-m-dark border text-sm px-4 py-2.5 focus:outline-none left-5 right-5 cursor-pointer`} onClick={() => setIsOpen(prev => !prev)}>
				{children[0]}

				<ChevronDown className={`w-4 h-4 ms-1.5 -me-0.5 ${isOpen ? " rotate-x-180" : "rotate-x-0"} transition`} />
			</button>

			<div className={`absolute border border-m-dark left-5 right-5 border-t-0 rounded-t-3xl rounded-b-3xl ${isOpen ? "pt-12 pb-3 px-4 max-h-none" : "max-h-0 p-0 border-0"} transition-transform bg-m-primary/20`}>
				<ul className={isOpen ? "" : "hidden"}>
					{children.slice(1, children.length)}
				</ul>
			</div>
		</div>
	);
};



export default React.memo(DropDown);