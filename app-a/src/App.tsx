import React from "react";

const wait = async (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

function App() {
  const [message, setMessage] = React.useState("Loading.");

  const announce = async () => {
    await wait(5000);
    setMessage("Where's the pickled peppers Peter Piper picked?");
    await wait(3000);
    setMessage("She sells sea shells on the sea shore");
    await wait(3000);
    setMessage("Making Betty Botter's bitter batter better");
  };

  React.useEffect(() => {
    announce();
  }, []);

  return (
    <>
      <h2>App A</h2>
      <div aria-live="polite" role="status">
        {message}
      </div>
    </>
  );
}

export default App;
