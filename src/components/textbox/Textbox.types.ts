export interface ITextBox extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  type?: string;
  containerClassName?: string;
  placeholder?: string;

}
