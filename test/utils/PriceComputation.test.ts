import { describe } from "mocha";
import { expect } from "chai";
import { computeCombinedOrderPrice } from "../../src/utils/PriceComputation";
import { Order } from "../../src/component/MainPage";

describe("PriceComputationTest", () => {
    it("return 0 if the orders are empty", () => {
        const firstOrder: Order = [];
        const secondOrder: Order = [];

        const price = computeCombinedOrderPrice(firstOrder, secondOrder);

        expect(price).to.equal(0);
    });

    it("computes correctly the price when the first dish is added", () => {
        const firstOrder: Order = [
            {
                id: 1,
                name: "Soup",
                price: 3,
            },
        ];
        const secondOrder: Order = [];

        const price = computeCombinedOrderPrice(firstOrder, secondOrder);

        expect(price).to.equal(3);
    });

    it("computes correctly the price for two orders", () => {
        const firstOrder: Order = [
            {
                id: 1,
                name: "Soup",
                price: 3,
            },
            {
                id: 4,
                name: "Prawn cocktail",
                price: 6,
            },
            {
                id: 11,
                name: "Cheesecake",
                price: 4,
            },
        ];
        const secondOrder: Order = [
            {
                id: 6,
                name: "Meatballs",
                price: 11.5,
            },
            {
                id: 8,
                name: "Vegetarian lasagna",
                price: 12,
            },
            {
                id: 9,
                name: "Sticky toffee",
                price: 18,
            },
        ];

        const price = computeCombinedOrderPrice(firstOrder, secondOrder);

        expect(price).to.equal(54.5);
    });
});
