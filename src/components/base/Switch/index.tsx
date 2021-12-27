import * as React from 'react';
import './index.css';
import classNames from 'classnames';

export interface SwitchProps {
  checked: boolean;
  size: 'large' | 'default' | 'small';
  type: 'square' | 'default' | 'line';
  onClick: React.MouseEventHandler;
  onChange: React.FormEventHandler;
}

const Switch = React.forwardRef<unknown, Partial<SwitchProps>>((props, ref) => {
  const {
    size = 'default',
    type = 'default',
    onClick,
    onChange,
    checked,
    children,
  } = props;

  const classes = classNames(
    { [`tc-switch-checked`]: checked },
    { [`tc-switch-size-${size}`]: size !== 'default' },
    { [`tc-switch-size-${type}`]: size !== 'default' },
    'tc-switch',
  );

  return (
    <button
      type="button"
      role="switch"
      className={classes}
      onChange={onChange}
      onClick={onClick}
    >
      <div></div>
    </button>
  );
});

export default Switch;
