import React, { createContext } from "react";
import { data, data1 } from "./App";
function Child() {
  const Name = createContext(data);
  const Gender = createContext(data1);
  return (
    <>
      <data.Provider value={Name}>
        <data.Provider value={Gender}>
          <compa />
        </data.Provider>
      </data.Provider>
    </>
  );
}
export default Child;
