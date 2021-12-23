import React from 'react';
import './index.css';

interface Button {
  title: string;
  background: string;
  type: 'primary' | 'plain';
  size: 'mini' | 'small' | 'primary' | 'medium' | 'large';
}

export default ({ title = 'Click Me', background = 'transport' }: Button) => (
  <button className={'btn'} style={{ background: background }}>
    {title}
    {background}
  </button>
);
