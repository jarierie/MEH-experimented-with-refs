import React from "react";
import Main from "./Main";
import { useRef, useEffect } from "react";
import { context } from "./context";

function App() {
  const ref = useRef(null);
  const childRef = React.createRef();

  useEffect(() => {
    console.log(childRef);
  }, []);
  return (
    <context.Provider value={ref}>
      <div className='App'>
        <header ref={ref} className='App-header'>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <Main refAttr={childRef} parentRef={ref} />
      </div>
    </context.Provider>
  );
}

export default App;
