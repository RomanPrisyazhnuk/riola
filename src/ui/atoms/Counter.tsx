import type { FC } from "react";

interface CounterProps {
  title: string;
  description?: string;
  setCounter: (number: number) => void;
  value: number;
}

const Counter: FC<CounterProps> = ({
  title,
  description,
  setCounter,
  value,
}) => {
  return (
    <div className="flex justify-between items-center gap-8 text-textColor font-medium bg-gray-100  p-2 rounded-md">
      <div className="flex flex-col">
        <p>{title}</p>
        {description && <p>{description}</p>}
      </div>
      <div className="flex items-center justify-between min-w-[107px]">
        <button
          type="button"
          className="rounded-md w-8 h-8 flex justify-center items-center text-xl text-primary border-1 border-primary"
          onClick={() => setCounter(Math.max(0, value - 1))}
        >
          <span>-</span>
        </button>
        <p className="mx-4 text-lg font-semibold">{value}</p>
        <button
          type="button"
          className="bg-primary rounded-md w-8 h-8 flex justify-center items-center text-xl text-white"
          onClick={() => setCounter(value + 1)}
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
};
export default Counter;
