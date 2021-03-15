import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { MainPage } from "../../src/component/MainPage";
import Adapter from "enzyme-adapter-react-16";
import { Flex } from "@chakra-ui/react";

import { configure } from "enzyme";
import { DinerOrder } from "../../src/component/DinerOrder";

configure({ adapter: new Adapter() });

describe("MainPage component test", () => {
    const ZERO_BILL_TEXT = "Tot: 0 €";

    it("should render two DinerOrder components", () => {
        const component = shallow(<MainPage />);

        const dinerOrderComponents = component.find(DinerOrder);

        expect(dinerOrderComponents).to.have.lengthOf(2);
    });

    it("should display the starting price of 0€", () => {
        const component = shallow(<MainPage />);

        const flexComponents = component.find(Flex);
        const { props } = flexComponents.get(2);

        expect(props.children.join("")).to.equal(ZERO_BILL_TEXT);
    });
});
