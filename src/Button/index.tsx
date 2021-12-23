import React from 'react';
import './index.css';
import classNames from 'classnames';

// 基础按钮属性
export interface BaseButtonProps {
  background: string;
  type: 'primary' | 'plain';
  size: 'mini' | 'small' | 'primary' | 'medium' | 'large';
}

//TODO 链接按钮

//TODO 原生按钮（type: button, submit, reset）

//按钮属性
export type ButtonProps = Partial<BaseButtonProps>;

//真正的按钮（没有ref）
const InteralButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref,
) => {
  const {
    type = 'primary',
    size = 'primary',
    background,

    //React独有的
    children,
  } = props;

  const classes = classNames(
    'tc-btn',
    {
      [`tc-btn-size-${size}`]: size !== 'primary' && size,
      [`tc-btn-type-${type}`]: type !== 'primary' && type,
    },
    'btn',
  );

  const kids = children ? children : 'Click Me';

  return <button className={classes}>{kids}</button>;
};

const Button = React.forwardRef<unknown, ButtonProps>(InteralButton);

export default Button;
