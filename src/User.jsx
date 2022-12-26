import react from "react";
import { Hoc } from "./Hoc";
const User = ({ name }) => {
  return (
    <>
      <h1>my name is:{name}</h1>
    </>
  );
};
export default Hoc(User);
