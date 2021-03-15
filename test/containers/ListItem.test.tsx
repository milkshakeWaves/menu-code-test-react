import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";
import { ListItem } from "../../src/container/ListItem";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { Flex } from "@chakra-ui/layout";

configure({ adapter: new Adapter() });
describe("ListItem component test", () => {
    const name = "fake-name";
    const price = 2;
    const isSelected = true;
    const isNotSelected = false;
    const onItemClick = () => {};

    it("should have a div with text showing name and price formatted", () => {
        const component = mount(
            <ListItem
                name={name}
                price={price}
                isSelected={isSelected}
                onItemClick={onItemClick}
            />
        );

        const divComponent = component.find("div");

        expect(divComponent.text()).to.equal(`${name}, ${price}€`);
    });

    it("should be color green if selected", () => {
        const GREEN_COLOR_CODE = "green.200";
        const component = shallow(
            <ListItem
                name={name}
                price={price}
                isSelected={isSelected}
                onItemClick={onItemClick}
            />
        );

        const flexComponent = component.find(Flex).get(0);
        const { props } = flexComponent;

        expect(props.bg).to.equal(GREEN_COLOR_CODE);
    });

    it("should be color white if not selected", () => {
        const WHITE_COLOR_CODE = "white";
        const component = shallow(
            <ListItem
                name={name}
                price={price}
                isSelected={isNotSelected}
                onItemClick={onItemClick}
            />
        );

        const flexComponent = component.find(Flex).get(0);
        const { props } = flexComponent;
        
        expect(props.bg).to.equal(WHITE_COLOR_CODE);
    });
});
