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

  //TODO. SVG 처리 고민 - DongJae

  return (
    <div className={classList.join(" ")} {...props}>
      {icons !== undefined ? (
        icons
      ) : (
        <svg
          className="mx-auto my-2"
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.94365 8.44365C12.9227 4.46462 18.4254 2 24.5 2C30.5746 2 36.0773 4.46462 40.0564 8.44365C44.0354 12.4227 46.5 17.9254 46.5 24C46.5 30.0746 44.0354 35.5773 40.0564 39.5564C36.0773 43.5354 30.5746 46 24.5 46C18.4254 46 12.9227 43.5354 8.94365 39.5564C4.96462 35.5773 2.5 30.0746 2.5 24C2.5 17.9254 4.96462 12.4227 8.94365 8.44365ZM24.5 6C19.5289 6 15.0316 8.01253 11.7721 11.2721C8.51253 14.5316 6.5 19.0289 6.5 24C6.5 28.9711 8.51253 33.4684 11.7721 36.7279C15.0316 39.9875 19.5289 42 24.5 42C29.4711 42 33.9684 39.9875 37.2279 36.7279C40.4875 33.4684 42.5 28.9711 42.5 24C42.5 19.0289 40.4875 14.5316 37.2279 11.2721C33.9684 8.01253 29.4711 6 24.5 6Z"
            fill="#999"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.5 37C25.8807 37 27 35.8807 27 34.5C27 33.1193 25.8807 32 24.5 32C23.1193 32 22 33.1193 22 34.5C22 35.8807 23.1193 37 24.5 37Z"
            fill="#999"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.5 10C25.6046 10 26.5 10.8954 26.5 12V28C26.5 29.1046 25.6046 30 24.5 30C23.3954 30 22.5 29.1046 22.5 28V12C22.5 10.8954 23.3954 10 24.5 10Z"
            fill="#999"
          />
        </svg>
      )}
      <p className="font-medium text-gray-500">{description}</p>
    </div>
  );
};

export default Empty;
