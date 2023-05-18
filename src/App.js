import React from "react"
import GlobalStyle from "./styles/global"
import Header from "./components/header";
import Resume from "./components/header/Resume";
import Form from "./components/Form";

const App = () => {
    return (
    <>
        <Header />
        <Resume />
        <Form />
        <GlobalStyle />
    </>
    );
};

export default App