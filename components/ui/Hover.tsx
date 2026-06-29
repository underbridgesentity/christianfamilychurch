"use client";

import { CSSProperties, ElementType, ReactNode, useState } from "react";

type HoverProps = {
  as?: ElementType;
  style?: CSSProperties;
  hoverStyle?: CSSProperties;
  children?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

/**
 * Recreates the prototype's `style-hover` behaviour: merge `hoverStyle` over
 * `style` while the pointer is over the element. Works for any tag.
 */
export function Hover({
  as,
  style,
  hoverStyle,
  children,
  ...rest
}: HoverProps) {
  const Tag = (as || "div") as ElementType;
  const [hover, setHover] = useState(false);
  return (
    <Tag
      style={{ ...style, ...(hover && hoverStyle ? hoverStyle : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
