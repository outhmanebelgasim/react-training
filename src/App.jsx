import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Button from "./components/Button";
import Card from "./components/Card";
import Greeting from "./props/Greeting";
import IfElseRendring from "./props/IfElseRendring";
import Logical from "./props/Logical";
import Notification from "./props/Notification";
import Dashboard from "./props/Dashboard";
import Fruits from "./props/Fruits";
import Users from "./components/Users";
import Alert from "./components/Alert";
import Counter from "./hooks/Counter.jsx";
import DigitalCounter from "./hooks/DigitalCounter.jsx";
import InputHandler from "./hooks/InputHandler.jsx";
import Form from "./hooks/Form.jsx";
import ColorPicker from "./hooks/ColorPicker.jsx";
import UpdateObject from "./updates/UpdateObject.jsx";
import UpdateArray from "./updates/UpdateArray.jsx";
import ArrayObject from "./updates/ArrayObject.jsx";
import ToDoList from "./updates/ToDoList.jsx";
import WindowResize from "./updates/WindowResize.jsx";
import DigitalClock from "./hooks/DigitalClock.jsx";
import ComponentA from "./hooks/ComponentA.jsx";
import UseRefTest from "./hooks/UseRefTest.jsx";
import FocusInput from "./hooks/FocusInput.jsx";

function App() {
  return (
    <>
      {/* <Header />
      <Home />
      <About />
      <Contact />
      <Services />
      <Button /> */}
      {/* <Card /> */}
      {/* <Greeting name="Outhmane" age="21" isGraduate={true} />
      <Greeting /> */}
      {/* <Footer /> */}

      {/* <IfElseRendring name="Outhmane" /> */}
      {/* <Logical name="outhmane" age={21} /> */}
      {/* <Notification /> */}
      {/* <Dashboard isLoggedIn={false} username={"outhmane"} /> */}
      {/* <Fruits /> */}
      {/* <Users /> */}
      {/* <Alert /> */}
      {/* <Counter /> */}

      {/* <DigitalCounter /> */}
      {/* <InputHandler /> */}
      {/* <Form /> */}
      {/* <ColorPicker /> */}
      {/* <UpdateObject /> */}
      {/* <UpdateArray /> */}
      {/* <ArrayObject /> */}
      {/* <ToDoList /> */}
      {/* <WindowResize /> */}
      {/* <DigitalClock /> */}
      {/* <ComponentA /> */}
      {/* <UseRefTest /> */}
      <FocusInput />
    </>
  );
}

export default App;
