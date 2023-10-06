import React from "react";

const wait = async (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

function App() {
  const [message, setMessage] = React.useState<string | undefined>(undefined);

  const handleClick = async () => {
    setMessage("Where's the pickled peppers Peter Piper picked?");
    await wait(3000);
    setMessage("She sells sea shells on the sea shore");
    await wait(3000);
    setMessage("Making Betty Botter's bitter batter better");
  };

  return (
    <>
      <h2>App A</h2>
      <div aria-live="polite" role="status">
        {message}
      </div>
      <button type="button" onClick={handleClick}>
        Press me for series of announcements.
      </button>
    </>
  );
}

export default App;
