import React from 'react';
import classNames from 'classnames';

export interface ApisDividerProp {
  type?: string;
}

const ApisDivider: React.ForwardRefRenderFunction<unknown, ApisDividerProp> = (
  props,
  ref,
) => {
  const { type = 'horizontal' } = props;

  const classes = classNames([{ 'apis-divider': true }]);

  return <div className={classes}></div>;
};

export default ApisDivider;
