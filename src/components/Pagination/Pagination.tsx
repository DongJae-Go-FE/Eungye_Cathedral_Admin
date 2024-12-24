"use client";

type PaginationType = {
  total: number;
  current: number;
  onChange?: (current: number) => void;
  numericOptions?: {
    max?: number;
  };
};
export default function Pagination({
  total = 1,
  current = 1,
  onChange,
  numericOptions = {
    max: 5,
  },
}: PaginationType) {
  const max = numericOptions.max || 5;
  const start = max * Math.floor((current - 1) / max) + 1;

  const handleFirst = () => {
    if (onChange) {
      if (current > 1) {
        onChange(1);
      }
    }
  };

  const handlePrev = () => {
    if (onChange) {
      if (start - max >= 1) {
        onChange(start - max);
      }
    }
  };

  const handleNext = () => {
    if (onChange) {
      if (start + max <= total) {
        onChange(start + max);
      }
    }
  };

  const handleLast = () => {
    if (onChange) {
      if (current < total) {
        onChange(total);
      }
    }
  };

  const handlePageClick = (page: number) => {
    if (onChange) {
      onChange(page);
    }
  };

  const btnArrowStyle = "rounded border border-gray-200 p-[9px]";

  return (
    <div className="flex h-8 items-center gap-x-2">
      <button
        type="button"
        className={btnArrowStyle}
        disabled={start === 1}
        onClick={handleFirst}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.41183 3.08785C7.63963 3.31565 7.63963 3.685 7.41183 3.9128L4.32431 7.00033L7.41183 10.0878C7.63963 10.3157 7.63963 10.685 7.41183 10.9128C7.18402 11.1406 6.81468 11.1406 6.58687 10.9128L3.08687 7.4128C2.85906 7.185 2.85906 6.81565 3.08687 6.58785L6.58687 3.08785C6.81468 2.86004 7.18402 2.86004 7.41183 3.08785Z"
            fill={start === 1 ? "#eee" : "#111"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9118 3.08785C11.1396 3.31565 11.1396 3.685 10.9118 3.9128L7.82431 7.00033L10.9118 10.0878C11.1396 10.3157 11.1396 10.685 10.9118 10.9128C10.684 11.1406 10.3147 11.1406 10.0869 10.9128L6.58687 7.4128C6.35906 7.185 6.35906 6.81565 6.58687 6.58785L10.0869 3.08785C10.3147 2.86004 10.684 2.86004 10.9118 3.08785Z"
            fill={start === 1 ? "#eee" : "#111"}
          />
        </svg>
      </button>
      <button
        type="button"
        className={btnArrowStyle}
        disabled={start === 1}
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5798 3.08785C8.8076 3.31565 8.8076 3.685 8.5798 3.9128L5.49228 7.00033L8.5798 10.0878C8.8076 10.3157 8.8076 10.685 8.5798 10.9128C8.35199 11.1406 7.98264 11.1406 7.75484 10.9128L4.25484 7.4128C4.02703 7.185 4.02703 6.81565 4.25484 6.58785L7.75484 3.08785C7.98264 2.86004 8.35199 2.86004 8.5798 3.08785Z"
            fill={start === 1 ? "#eee" : "#111"}
          />
        </svg>
      </button>
      <ul className="flex">
        {Array.from({ length: max }).map((_, index) => {
          if (start + index > total) {
            return null;
          }

          return (
            <li key={index}>
              <button
                type="button"
                className={`h-6 px-2 text-body03m ${start + index === current ? "text-gray-900" : "text-gray-500"}`}
                onClick={() => handlePageClick(start + index)}
              >
                {start + index}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className={btnArrowStyle}
        disabled={start + max > total}
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.42085 3.08785C5.64866 2.86004 6.01801 2.86004 6.24581 3.08785L9.74581 6.58785C9.97362 6.81565 9.97362 7.185 9.74581 7.4128L6.24581 10.9128C6.01801 11.1406 5.64866 11.1406 5.42085 10.9128C5.19305 10.685 5.19305 10.3157 5.42085 10.0878L8.50838 7.00033L5.42085 3.9128C5.19305 3.685 5.19305 3.31565 5.42085 3.08785Z"
            fill={start + max > total ? "#eee" : "#111"}
          />
        </svg>
      </button>
      <button
        type="button"
        className={btnArrowStyle}
        disabled={start + max > total}
        onClick={handleLast}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.08687 3.08785C3.31468 2.86004 3.68402 2.86004 3.91183 3.08785L7.41183 6.58785C7.63963 6.81565 7.63963 7.185 7.41183 7.4128L3.91183 10.9128C3.68402 11.1406 3.31468 11.1406 3.08687 10.9128C2.85906 10.685 2.85906 10.3157 3.08687 10.0878L6.17439 7.00033L3.08687 3.9128C2.85906 3.685 2.85906 3.31565 3.08687 3.08785Z"
            fill={start + max > total ? "#eee" : "#111"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.58687 3.08785C6.81468 2.86004 7.18402 2.86004 7.41183 3.08785L10.9118 6.58785C11.1396 6.81565 11.1396 7.185 10.9118 7.4128L7.41183 10.9128C7.18402 11.1406 6.81468 11.1406 6.58687 10.9128C6.35906 10.685 6.35906 10.3157 6.58687 10.0878L9.67439 7.00033L6.58687 3.9128C6.35906 3.685 6.35906 3.31565 6.58687 3.08785Z"
            fill={start + max > total ? "#eee" : "#111"}
          />
        </svg>
      </button>
    </div>
  );
}
