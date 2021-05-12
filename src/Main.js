import { useContext, useEffect } from "react";
import { context } from "./context";

const Main = (props) => {
  const data = useContext(context);
  useEffect(() => {
    console.log(props.parentRef.current.style);
    setTimeout(() => {
      props.parentRef.current.style.backgroundColor = "pink";
    }, 3000);
    setTimeout(() => (data.current.style.color = "red"), 1000);
  }, []);
  return (
    <>
      <h1 ref={props.refAttr}> child component</h1>
    </>
  );
};

export default Main;
