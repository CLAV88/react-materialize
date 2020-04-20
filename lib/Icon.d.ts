import * as React from "react";

export interface IconProps {
  left?: boolean;
  center?: boolean;
  right?: boolean;
  tiny?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  children?: string;
  className?: string;
}

/**
 * React Materialize: Icon
 */
declare const Icon: React.FC<IconProps>;

export default Icon;
