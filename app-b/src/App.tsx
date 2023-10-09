import React from "react";

const wait = async (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

function App() {
  const [message, setMessage] = React.useState("Loading.");

  const announce = async () => {
    await wait(5000);
    setMessage("This is app B.");
    await wait(3000);
    setMessage("App B still here.");
    await wait(3000);
    setMessage("Hello, are you there?");
  };

  React.useEffect(() => {
    announce();
  }, []);

  return (
    <>
      <h2>App B</h2>
      <div aria-live="polite" role="status">
        {message}
      </div>
    </>
  );
}

export default App;
