import { ChipProps } from '@material-ui/core/Chip';

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
