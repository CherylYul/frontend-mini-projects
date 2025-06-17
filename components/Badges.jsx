import React from "react";
import classnames from "classnames";

export default function Badges({
  children,
  className,
  color,
  size,
  shape,
  ...rest
}) {
  const allClasses = classnames(
    color && color,
    size && `badge-${size}`,
    shape && `badge-${shape}`,
    className,
  );
  return (
    <div className={allClasses} {...rest}>
      {children}
    </div>
  );
}
