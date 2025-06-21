import React, { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonClass = cva("border  px-6 rounded-full font-medium h-9", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white/60 text-white bg-transparent",
    },
  },
});

function Button(
  props: {
    variant: "primary" | "secondary";
  } & HTMLAttributes<HTMLButtonElement>
) {

  const {variant, className, ...otherProps} = props
  return (
    <button
      className={buttonClass({
        variant,
        className,
      })}
      {...otherProps}
    />
  );
}

export default Button;
