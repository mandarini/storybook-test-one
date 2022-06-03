import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core';
import Chip, { ChipProps } from '@material-ui/core/Chip';

import styles from './two.module.css';

const useStyles = makeStyles(() => {
  return {
    background: {
      backgroundColor: (props: ITagColorProps) => props.backgroundColor,
    },
    text: {
      color: (props: ITagColorProps) => props.textColor,
    },
  };
});

export interface ITagColorProps {
  backgroundColor?: string;
  textColor?: string;
}

export interface ITagProps extends ChipProps, ITagColorProps {
  showTooltip?: boolean;
}

export const Tag: React.FC<ITagProps> = (props) => {
  const { backgroundColor, textColor, className, label, showTooltip, ...rest } =
    props;
  const classes = useStyles({ textColor, backgroundColor });

  return (
    <Chip
      data-test="tag"
      color="primary"
      size="small"
      {...rest}
      label={showTooltip ? <span title={label as string}>{label}</span> : label}
      className={classnames(
        'rnd-tag',
        styles['tag'],
        classes.text,
        classes.background,
        className
      )}
    />
  );
};
