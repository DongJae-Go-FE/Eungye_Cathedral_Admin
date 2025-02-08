import { FC, InputHTMLAttributes, RefObject } from "react";

type InputSize = "sm" | "md" | "lg" | "xLg";

export interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * @default "md"
   */
  size?: InputSize;
  ref?: RefObject<HTMLInputElement>;
}

const Input: FC<Props> = ({ size = "md", ref, ...props }) => {
  let sizeStyle;

  switch (size) {
    case "md": {
      sizeStyle = "h-10 w-full rounded-md border px-2 border-gray-200";
      break;
    }
    case "sm": {
      sizeStyle = "h-8 w-full rounded-md border px-1 border-gray-200";
      break;
    }
    case "lg": {
      sizeStyle = "h-12 w-full rounded-md border px-3 border-gray-200";
      break;
    }
    case "xLg": {
      sizeStyle = "h-14 w-full rounded-md border px-4 border-gray-200";
      break;
    }
  }

  const classList = [`${sizeStyle}`];

  return <input className={classList.join(" ")} ref={ref} {...props} />;
};

export default Input;
