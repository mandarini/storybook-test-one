import Chip, { ChipProps } from '@material-ui/core/Chip';

interface PropsWithClassName {
  className?: string;
}

export interface ButtonProps extends PropsWithClassName {
  disabled?: boolean;
  primary?: boolean;
  onClick?(event: React.MouseEvent): void;
}

export interface ITagColorProps {
  backgroundColor?: string;
  textColor?: string;
}

export interface ITagProps extends ChipProps, ITagColorProps {
  showTooltip?: boolean;
}

export function Button(props: React.PropsWithChildren<ITagProps>) {
  const { backgroundColor, textColor, className, label, showTooltip, ...rest } =
    props;
  return <button disabled={showTooltip}>{label}</button>;
}
