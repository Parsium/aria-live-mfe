import React from "react";

function App() {
  const [message, setMessage] = React.useState<string | undefined>(undefined);

  const handleClick = () => setMessage("This is a message from app B.");

  return (
    <>
      <h2>App B</h2>
      <div aria-live="polite" role="status">
        {message}
      </div>
      <button type="button" onClick={handleClick}>
        Trigger me
      </button>
    </>
  );
}

export default App;
