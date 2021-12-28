import * as React from 'react';
import classNames from 'classnames';
import './index.css';

export interface TagBaseProps {
  type: 'icon' | 'close' | 'plain' | 'translucence';
  color: string;
}

const Tag = React.forwardRef<unknown, Partial<TagBaseProps>>((props, ref) => {
  const { type = 'plain', children } = props;

  const classes = classNames('tc-tag', {
    [`tc-tag-${type}`]: type !== 'plain',
  });

  return <span className={classes}>{children}</span>;
});

export default Tag;
