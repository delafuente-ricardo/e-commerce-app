import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './customButton.module.scss';
import { capitalize } from 'lodash';

interface ICustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary' | 'primary';
  fullwidth?: boolean;
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  variant,
  fullwidth,
  ...props
}) => {
  let buttonStyles = classnames(
    styles.button,
    variant ? `is${capitalize(variant)}` : null,
    fullwidth ? ' isFullwidth' : null
  );
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

CustomButton.defaultProps = {
  variant: 'secondary',
  fullwidth: false,
};

export default CustomButton;
