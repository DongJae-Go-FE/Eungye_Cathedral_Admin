import { FC, HTMLAttributes, ReactElement } from "react";

export type HUIInputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  icons?: ReactElement;
  description?: string;

  /**
   * @default "md"
   */
  size?: Exclude<HUIInputSize, "xs" | "sm" | "xl">;
}

const Empty: FC<Props> = ({
  icons,
  description = "Description",
  // size = "md",
  className,
  ...props
}) => {
  const classList = ["text-center", "position-center"];

  if (className) {
    classList.push(className);
  }

  return (
    <div className={classList.join(" ")} {...props}>
      {icons !== undefined ? (
        icons
      ) : (
        <svg
          width={40}
          height={40}
          color="#999"
          className="mx-auto my-2"
          aria-hidden
        >
          <use href="icons/outlined/character.svg#Outlined/Character/attention" />
        </svg>
      )}
      <p className="text-body01m text-gray-500">{description}</p>
    </div>
  );
};

export default Empty;
