export interface IButtonProps {
	children: any;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IButtonState {
	withRipple: boolean;
}