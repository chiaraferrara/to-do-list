import React, { createContext, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Completed from "./Completed";
import Categories from "./Categories";


  export const MyContext = createContext({});



function HomePage({ completedPage }: any) {

  const [upload, setUpload] = useState(false);


  if (completedPage === false) {
    return (
      <MyContext.Provider value={{
        upload, setUpload: () => setUpload(!upload)}}>
        <Form />
        <Tasks/>
        <Categories />
      </MyContext.Provider>
    );
  } else {
    return <Completed />;
  }
}

export default HomePage;
