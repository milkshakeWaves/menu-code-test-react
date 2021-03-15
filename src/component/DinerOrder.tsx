import {
    Button,
    Center,
    Flex,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react";
import React from "react";
import { Dish } from "../models/Dish";
import { RestaurantMenu } from "../models/RestaurantMenu";
import { Order } from "../models/Order";
import { ListItem } from "../container/ListItem";

interface DinerOrderProps {
    name: string;
    menu: RestaurantMenu;
    currentOrder: Order;
    addItemToOrder: (dish: Dish) => void;
    removeItemFromOrder: (dish: Dish) => void;
}

export const DinerOrder: React.FC<DinerOrderProps> = ({
    name,
    menu,
    currentOrder,
    addItemToOrder,
    removeItemFromOrder,
}) => {
    return (
        <Flex
            h="65vh"
            w="80vh"
            justify="space-evenly"
            align="center"
            direction="column"
            borderWidth="1px"
            borderRadius="lg"
        >
            <Center>{name}</Center>
            {Object.keys(menu).map(
                (courseCategoryName: string, courseKey: number) => (
                    <Menu key={courseKey}>
                        <MenuButton w="40vh" as={Button}>
                            {courseCategoryName}
                        </MenuButton>
                        <MenuList mt={2} mb={2}>
                            {menu[courseCategoryName].map((dish: Dish) => {
                                const isSelected = currentOrder.some(
                                    (currentDish: Dish) =>
                                        currentDish.id === dish.id
                                );
                                return (
                                    <ListItem
                                        key={dish.id}
                                        name={dish.name}
                                        price={dish.price}
                                        onItemClick={
                                            isSelected
                                                ? () =>
                                                      removeItemFromOrder(dish)
                                                : () => addItemToOrder(dish)
                                        }
                                        isSelected={isSelected}
                                    />
                                );
                            })}
                        </MenuList>
                    </Menu>
                )
            )}
        </Flex>
    );
};
