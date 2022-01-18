import React from 'react';
import './index.scss';
import classNames from 'classnames';

export interface BaseProgressBarProps {
  shape: 'round' | 'straight';
  type: 'primary' | 'striped' | 'flicker';
  background: string;
  percent: number;
}

const BaseProgress: React.ForwardRefRenderFunction<
  unknown,
  BaseProgressBarProps
> = (props, ref) => {
  const { shape = 'straight', type = 'primary', background, percent } = props;

  const container_classes = classNames('progress-bar-container', {
    [`progress-bar-${shape}`]: shape !== 'straight' ? true : false,
  });

  const groove_classes = classNames('progress-bar-groove', {
    [`progress-bar-${type}`]: type !== 'primary' ? true : false,
  });

  return (
    <div className={container_classes}>
      <div className={groove_classes}>
        <div
          className="progress-bar"
          style={{
            width: `${percent}%`,
            height: '100%',
            background: background,
          }}
        ></div>
      </div>
      <span style={{ marginLeft: '10px' }}>{percent}%</span>
    </div>
  );
};

const ProgressBar = React.forwardRef<unknown, BaseProgressBarProps>(
  BaseProgress,
);

export default ProgressBar;
