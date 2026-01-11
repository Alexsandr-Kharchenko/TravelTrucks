import React from 'react';

type IconProps = {
  name: string; // імʼя іконки без "icon-"
  size?: number; // розмір іконки (width / height)
  color?: string; // колір (опціонально)
  className?: string; // css class
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
      style={color ? { color } : undefined}
      aria-hidden="true"
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
};
