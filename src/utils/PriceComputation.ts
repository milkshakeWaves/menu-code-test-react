import { Order } from "../models/Order";

const computeSingleOrderPrice = (order: Order): number => {
    const orderTotalPrice = order.reduce((acc, dish) => acc + dish.price, 0);
    return orderTotalPrice;
};

const computeCombinedOrderPrice = (
    firstOrder: Order,
    secondOrder: Order
): number => {
    const firstOrderPrice = computeSingleOrderPrice(firstOrder);
    const secondOrderPrice = computeSingleOrderPrice(secondOrder);

    return firstOrderPrice + secondOrderPrice;
};

export { computeCombinedOrderPrice };
