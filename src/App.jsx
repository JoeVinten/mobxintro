import React, { useState } from "react";

import { observer } from "mobx-react";

const App = () => {
  const [countState, setCountState] = useState(0);

  const decrease = () => setCountState(countState - 1);
  const increace = () => setCountState(countState + 1);

  const isNegative = () => (countState < 0 ? "Yes" : "No");
  return (
    <>
      Count: {countState} <hr />
      Is negative? {isNegative()}
      <hr />
      <button onClick={decrease}>Add</button>
      <button onClick={increace}>Subtract</button>
    </>
  );
};
observer(App);

export default observer(App);
