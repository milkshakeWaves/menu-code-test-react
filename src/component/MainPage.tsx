import React, { useState } from "react";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import fetchMenu from "../provider/MenuProvider";
import { DinerOrder } from "./DinerOrder";
import { Text } from "@chakra-ui/react";
import RuleExecutor from "../rules/RuleExecutor";
import { RuleResult } from "src/rules/Rule";
import { computeCombinedOrderPrice } from "../utils/PriceComputation";
import { Dish } from "src/models/Dish";
import { Order } from "src/models/Order";

const initialOrder: Order = [];

export const MainPage: React.FC = ({}) => {
    const [firstOrder, setFirstOrder] = useState(initialOrder);
    const [secondOrder, setSecondOrder] = useState(initialOrder);
    const [menu] = useState(fetchMenu());

    const addItemToOrder = (
        dish: Dish,
        setOrder: React.Dispatch<React.SetStateAction<Order>>
    ) => {
        setOrder((prevOrder) => [...prevOrder, dish]);
    };

    const removeItemFromOrder = (
        dish: Dish,
        setOrder: React.Dispatch<React.SetStateAction<Order>>
    ) => {
        setOrder((prevOrder) =>
            prevOrder.filter((currentDish: Dish) => currentDish.id !== dish.id)
        );
    };

    const onConfirmClick = (firstOrder: Order, secondOrder: Order) => {
        const checkResult = RuleExecutor.apply([firstOrder, secondOrder]);
        const errorMessages = checkResult.filter(
            (ruleResult: RuleResult) => !ruleResult.ok
        );

        if (errorMessages.length >= 1) {
            alert(errorMessages[0].message);
        } else {
            setFirstOrder(initialOrder);
            setSecondOrder(initialOrder);
            alert("Order placed, enjoy your meal!");
        }
    };

    return (
        <Box>
            <Center mt={8}>
                <Text fontSize="xl">Menu Test</Text>
            </Center>
            <Flex justify="space-around">
                <DinerOrder
                    name="Diner 1"
                    menu={menu}
                    currentOrder={firstOrder}
                    addItemToOrder={(dish: Dish) =>
                        addItemToOrder(dish, setFirstOrder)
                    }
                    removeItemFromOrder={(dish: Dish) =>
                        removeItemFromOrder(dish, setFirstOrder)
                    }
                />
                <DinerOrder
                    name="Diner 2"
                    menu={menu}
                    currentOrder={secondOrder}
                    addItemToOrder={(dish: Dish) =>
                        addItemToOrder(dish, setSecondOrder)
                    }
                    removeItemFromOrder={(dish: Dish) =>
                        removeItemFromOrder(dish, setSecondOrder)
                    }
                />
            </Flex>

            <Flex justify="center" mt={12}>
                <Button
                    bg="telegram.400"
                    mr={4}
                    onClick={() => onConfirmClick(firstOrder, secondOrder)}
                >
                    Confirm
                </Button>
            </Flex>
            <Flex mr={12} justify="flex-end">
                Tot: {computeCombinedOrderPrice(firstOrder, secondOrder)} €
            </Flex>
        </Box>
    );
};
