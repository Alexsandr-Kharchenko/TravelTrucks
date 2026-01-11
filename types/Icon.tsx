import React from 'react';

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={{ color }}
      aria-hidden="true"
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
};
