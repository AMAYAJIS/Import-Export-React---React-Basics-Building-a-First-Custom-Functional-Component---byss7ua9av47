import React, { Component, useState } from "react";
import Heading from "./components/Heading";
import InputQuery from "./components/InputQuery";
import SubHeading from "./components/SubHeading";
import SubmitButton from "./components/SubmitButton ";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  );
};
export default App;


