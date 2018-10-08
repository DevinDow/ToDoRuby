import React from "react"
import Lists from "./Lists";
const App = (props) => {

  console.log("App Component");
  console.log(props);

  return (
    <React.Fragment>
      <Lists />
    </React.Fragment>
  );
}

export default App
