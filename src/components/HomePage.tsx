import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Completed from "./Completed";

function HomePage({ completedPage }: any) {
  if (completedPage === false) {
    return (
      <>
        <Form />
        <Tasks />
      </>
    );
  } else {
    return <Completed />;
  }
}

export default HomePage;
