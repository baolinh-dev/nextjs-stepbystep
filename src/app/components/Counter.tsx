type CounterProps = {
  initialCount: number;
};

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2>Giá trị ban đầu: {initialCount}</h2>
    </div>
  );
};

export default Counter;
