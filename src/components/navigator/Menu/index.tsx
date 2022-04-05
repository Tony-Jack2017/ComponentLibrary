import React from 'react';

export interface ApisMenu {}

const ApisMenu: React.ForwardRefRenderFunction<unknown, ApisMenu> = (
  props,
  ref,
) => {
  return (
    <ul className="apis-menu">
      <li>test1</li>
      <li>test2</li>
      <li>test3</li>
    </ul>
  );
};

export default ApisMenu;
