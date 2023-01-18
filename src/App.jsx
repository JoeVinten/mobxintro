import React from "react";
import { observer } from "mobx-react";

const App = ({ myCounter }) => {
  return (
    <React.Fragment>
      Count: {myCounter.count} <hr />
      Is negative? {myCounter.isNegative}
      <hr />
      <button onClick={myCounter.increase.bind(myCounter)}>Add</button>
      <button onClick={myCounter.decrease.bind(myCounter)}>Subtract</button>
    </React.Fragment>
  );
};
observer(App);

export default observer(App);
