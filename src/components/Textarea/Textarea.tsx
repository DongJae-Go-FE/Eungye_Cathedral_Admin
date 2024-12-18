import { FC, TextareaHTMLAttributes } from "react";

const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...props
}) => {
  return (
    <textarea
      className="w-full resize-none rounded-md border p-2"
      rows={3}
      {...props}
    />
  );
};

export default Textarea;
