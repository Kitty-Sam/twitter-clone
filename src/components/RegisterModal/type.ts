export interface RegisterModalPropsType {
  isOpen: boolean;
  renderBackdrop: (values: any) => JSX.Element;
  close: () => void;
  loginOpen: () => void;
}
