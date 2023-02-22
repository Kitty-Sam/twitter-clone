export interface LoginModalPropsType {
  isOpen: boolean;
  renderBackdrop: (values: any) => JSX.Element;
  close: () => void;
  registerOpen: () => void;
}
