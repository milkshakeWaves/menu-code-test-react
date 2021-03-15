import { describe, before } from "mocha";
import { expect } from "chai";
import PierreWaiterRule from "../../src/rules/PierreWaiterRule";
import { Order } from "../../src/models/Order";
import { Rule } from "../../src/rules/Rule";

describe("PierreWaiterRuleTest", () => {
    let pierreWaiterRule: Rule;
    before(() => {
        pierreWaiterRule = new PierreWaiterRule();
    });

    it("returns ok if no diner ordered prawn cocktails and salmon fillet in the same meal", () => {
        const firstOrder: Order = [
            {
                id: 4,
                name: "Prawn cocktail",
                price: 6,
            },
            {
                id: 6,
                name: "Meatballs",
                price: 11.5,
            },
        ];
        const secondOrder: Order = [
            {
                id: 7,
                name: "Salmon fillet",
                price: 14,
            },
            {
                id: 9,
                name: "Sticky toffee",
                price: 18,
            },
        ];

        const ruleResponse = pierreWaiterRule.check([firstOrder, secondOrder]);

        expect(ruleResponse.ok).to.equal(true);
        expect(ruleResponse.message).to.be.undefined;
    });

    it("returns false if at least one diner has ordered prawn cocktails and salmon fillet in the same meal", () => {
        const firstOrder: Order = [
            {
                id: 4,
                name: "Prawn cocktail",
                price: 6,
            },
            {
                id: 6,
                name: "Meatballs",
                price: 11.5,
            },
        ];
        const secondOrder: Order = [
            {
                id: 4,
                name: "Prawn cocktail",
                price: 6,
            },
            {
                id: 7,
                name: "Salmon fillet",
                price: 14,
            },
            {
                id: 9,
                name: "Sticky toffee",
                price: 18,
            },
        ];

        const ruleResponse = pierreWaiterRule.check([firstOrder, secondOrder]);

        expect(ruleResponse.ok).to.equal(false);
        expect(ruleResponse.message).to.equal(
            "Diner 2, you cannot choose prawn cocktail and salmon fillet in the same meal!"
        );
    });
});
