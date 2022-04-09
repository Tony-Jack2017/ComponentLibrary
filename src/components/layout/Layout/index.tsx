import React from 'react';
import classNames from 'classnames';
import './index.less';

export interface ApisLayoutProp {
  display: string;
}

const ApisLayout: React.ForwardRefRenderFunction<unknown, ApisLayoutProp> = (
  props,
  ref,
) => {
  const { display = 'flex', children } = props;

  const classes = classNames({
    [`apis-layout-${display}`]: true,
  });

  return <div className={classes}>{display}</div>;
};

export default ApisLayout;
