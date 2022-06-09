import { useCounter } from "./hooks/use-counter";

const App: React.FC = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button data-testid="decrement" onClick={() => decrement()}>
        -
      </button>
      <span data-testid="count">{count}</span>
      <button data-testid="increment" onClick={() => increment()}>
        +
      </button>
    </div>
  );
};

export default App;
