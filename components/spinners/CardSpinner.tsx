const CardSpinner = () => (
  <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-6 lg:mt-16">
    {Array(6)
      .fill(0)
      .map((_, j) => (
        <div className="h-36 rounded-md bg-bg2 animate-pulse" key={j}></div>
      ))}
  </div>
);

export default CardSpinner;
