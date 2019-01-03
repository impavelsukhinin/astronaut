export interface ButtonProps {
	children: any;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface ButtonState {
	withRipple: boolean;
}