import { describe } from "mocha";
import { expect } from "chai";
import RuleExecutor from "../../src/rules/RuleExecutor";
import { Order } from "../../src/models/Order";

describe("RuleExecutorTest", () => {
    it("returns one ruleResult per rule when its apply method is called", () => {
        const firstOrder: Order = [
            {
                id: 3,
                name: "Bruschetta",
                price: 4.5,
            },
        ];
        const secondOrder: Order = [
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

        const rulesCheckResponse = RuleExecutor.apply([
            firstOrder,
            secondOrder,
        ]);

        expect(rulesCheckResponse).to.have.lengthOf(RuleExecutor.rules.length);
    });
});
