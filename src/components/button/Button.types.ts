export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  childern?: string;
  className?: string;
  variant?: string;
  iconLeftName?: string;
  iconRightName?: string;
}
