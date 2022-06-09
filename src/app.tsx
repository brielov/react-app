import { useCounter } from "./hooks/use-counter";

const App: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="inline-flex items-center gap-2">
      <button
        className="rounded bg-gray-200 px-2 py-1 text-gray-600"
        data-testid="decrement"
        onClick={() => decrement()}
      >
        -
      </button>
      <span className="tabular-nums text-gray-700" data-testid="count">
        {count}
      </span>
      <button
        className="rounded bg-gray-200 px-2 py-1 text-gray-600"
        data-testid="increment"
        onClick={() => increment()}
      >
        +
      </button>
      <button
        className="rounded bg-gray-200 px-2 py-1 text-gray-600"
        data-testid="reset"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
