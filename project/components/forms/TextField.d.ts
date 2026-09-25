/** Rectangular text input with thin grey border, violet focus border, red error. */
export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  multiline?: boolean;
  /** error message; turns border red */
  error?: string;
  required?: boolean;
  name?: string;
  style?: React.CSSProperties;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
