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
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="mx-auto my-2"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.22183 4.22183C6.21134 2.23231 8.96271 1 12 1C15.0373 1 17.7887 2.23231 19.7782 4.22183C21.7677 6.21134 23 8.96271 23 12C23 15.0373 21.7677 17.7887 19.7782 19.7782C17.7887 21.7677 15.0373 23 12 23C8.96271 23 6.21134 21.7677 4.22183 19.7782C2.23231 17.7887 1 15.0373 1 12C1 8.96271 2.23231 6.21134 4.22183 4.22183ZM12 3C9.51444 3 7.26581 4.00626 5.63604 5.63604C4.00626 7.26581 3 9.51444 3 12C3 14.4856 4.00626 16.7342 5.63604 18.364C7.26581 19.9937 9.51444 21 12 21C14.4856 21 16.7342 19.9937 18.364 18.364C19.9937 16.7342 21 14.4856 21 12C21 9.51444 19.9937 7.26581 18.364 5.63604C16.7342 4.00626 14.4856 3 12 3Z"
            fill="#999999"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5596 12.6904 16 12 16C11.3096 16 10.75 16.5596 10.75 17.25C10.75 17.9404 11.3096 18.5 12 18.5Z"
            fill="#999999"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 5C12.5523 5 13 5.44772 13 6L13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L11 6C11 5.44772 11.4477 5 12 5Z"
            fill="#999999"
          />
        </svg>
      )}
      <p className="text-body01b text-gray-500">{description}</p>
    </div>
  );
};

export default Empty;
