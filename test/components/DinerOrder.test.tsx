import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import { Center, MenuButton, MenuList } from "@chakra-ui/react";
import { DinerOrder } from "../../src/component/DinerOrder";
import { Dish } from "../../src/models/Dish";
import { ListItem } from "../../src/container/ListItem";
import sinon from "sinon";

import { configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("DinerOrder component test", () => {
    const name = "fake-name";
    const currentEmptyOrder: Dish[] = [];
    const currentOrder: Dish[] = [
        {
            id: 5,
            name: "Steak",
            price: 18,
        },
    ];
    const menu = {
        starters: [
            {
                id: 1,
                name: "Soup",
                price: 3,
            },
        ],
        mains: [
            {
                id: 5,
                name: "Steak",
                price: 18,
            },
        ],
        desserts: [
            {
                id: 10,
                name: "Tiramisu",
                price: 4.5,
            },
        ],
    };
    const addItemToOrder = sinon.mock();
    const removeItemFromOrder = sinon.mock();

    it("should render the name on top of the menu", () => {
        const component = shallow(
            <DinerOrder
                name={name}
                currentOrder={currentEmptyOrder}
                menu={menu}
                addItemToOrder={addItemToOrder}
                removeItemFromOrder={removeItemFromOrder}
            />
        );

        const centerComponent = component.find(Center).get(0);
        const centerTextName = centerComponent.props.children;

        expect(centerTextName).to.equal(name);
    });

    it("should render all three menu categories", () => {
        const component = shallow(
            <DinerOrder
                name={name}
                currentOrder={currentEmptyOrder}
                menu={menu}
                addItemToOrder={addItemToOrder}
                removeItemFromOrder={removeItemFromOrder}
            />
        );

        const dinerOrderComponents = component.find(MenuButton);
        const startersLabel = dinerOrderComponents.get(0).props.children;
        const mainsLabel = dinerOrderComponents.get(1).props.children;
        const dessertsLabel = dinerOrderComponents.get(2).props.children;

        expect(dinerOrderComponents).to.have.lengthOf(Object.keys(menu).length);
        expect(startersLabel).to.equal("starters");
        expect(mainsLabel).to.equal("mains");
        expect(dessertsLabel).to.equal("desserts");
    });

    it("should render all dishes in menu", () => {
        const component = shallow(
            <DinerOrder
                name={name}
                currentOrder={currentEmptyOrder}
                menu={menu}
                addItemToOrder={addItemToOrder}
                removeItemFromOrder={removeItemFromOrder}
            />
        );

        const dinerOrderComponents = component.find(ListItem);

        expect(dinerOrderComponents).to.have.lengthOf(3);
    });

    it("should pass down the correct menu selection from the order", () => {
        const component = shallow(
            <DinerOrder
                name={name}
                currentOrder={currentOrder}
                menu={menu}
                addItemToOrder={addItemToOrder}
                removeItemFromOrder={removeItemFromOrder}
            />
        );

        const dinerOrderComponents = component.find(MenuList);
        const startersDishesProps = dinerOrderComponents.get(0).props
            .children[0];
        const mainsDishesProps = dinerOrderComponents.get(1).props.children[0];

        expect(startersDishesProps.props.isSelected).to.equal(false);
        expect(mainsDishesProps.props.isSelected).to.equal(true);
    });
});
