import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { MainPage } from "./component/MainPage";


class App extends React.Component {
    render() {
        return (
            <ChakraProvider>
                <MainPage />
            </ChakraProvider>
        );
    }
}

render(<App />, document.getElementById("root"));
