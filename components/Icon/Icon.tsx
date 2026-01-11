import React from 'react';

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={className}
      aria-hidden="true"
      style={{
        display: 'block',
        flexShrink: 0,
        color: color,
      }}
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
};
