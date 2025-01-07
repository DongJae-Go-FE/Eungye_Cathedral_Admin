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
          width={14}
          height={14}
          color={start === 1 ? "#eee" : "#111"}
          aria-hidden
        >
          <use href="icons/outlined/arrows.svg#Outlined/Arrows/double-left" />
        </svg>
      </button>
      <button
        type="button"
        className={btnArrowStyle}
        disabled={start === 1}
        onClick={handlePrev}
      >
        <svg
          width={14}
          height={14}
          color={start === 1 ? "#eee" : "#111"}
          aria-hidden
        >
          <use href="icons/outlined/arrows.svg#Outlined/Arrows/left" />
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
          width={14}
          height={14}
          color={start === 1 ? "#eee" : "#111"}
          aria-hidden
        >
          <use href="icons/outlined/arrows.svg#Outlined/Arrows/right" />
        </svg>
      </button>
      <button
        type="button"
        className={btnArrowStyle}
        disabled={start + max > total}
        onClick={handleLast}
      >
        <svg
          width={14}
          height={14}
          color={start === 1 ? "#eee" : "#111"}
          aria-hidden
        >
          <use href="icons/outlined/arrows.svg#Outlined/Arrows/double-right" />
        </svg>
      </button>
    </div>
  );
}
