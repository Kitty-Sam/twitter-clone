export interface RegisterModalPropsType {
  isOpen: boolean;
  renderBackdrop: (values: any) => JSX.Element;
  close: () => void;
  loginOpen: () => void;
}

export interface RegisterInputsType {
  firstName: string;
  lastName: string;
  username: string;
  location: string;
  password: string;
}
