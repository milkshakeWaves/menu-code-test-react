import { describe, before } from "mocha";
import { expect } from "chai";
import AtLeastTwoCoursesRule from "../../src/rules/AtLeastTwoCoursesRule";
import { Order } from "../../src/component/MainPage";
import { Rule } from "../../src/rules/Rule";

describe("AtLeastTwoCoursesRuleTest", () => {
    let atLeastTwoCoursesRule: Rule;
    before(() => {
        atLeastTwoCoursesRule = new AtLeastTwoCoursesRule();
    });

    it("returns ok if at least two courses have been ordered and one is from main category", () => {
        const firstOrder: Order = [
            {
                id: 3,
                name: "Bruschetta",
                price: 4.5,
            },
            {
                id: 6,
                name: "Meatballs",
                price: 11.5,
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

        const ruleResponse = atLeastTwoCoursesRule.check([
            firstOrder,
            secondOrder,
        ]);

        expect(ruleResponse.ok).to.equal(true);
    });

    it("returns false with proper error message if at least one of the diner has ordered less than 2 dishes", () => {
        const firstOrder: Order = [
            {
                id: 11,
                name: "Cheesecake",
                price: 4,
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

        const ruleResponse = atLeastTwoCoursesRule.check([
            firstOrder,
            secondOrder,
        ]);

        expect(ruleResponse.ok).to.equal(false);
        expect(ruleResponse.message).to.equal(
            "Dinner 1, please, have at least two courses."
        );
    });

    it("returns false with proper error message if more than 1 dish has been ordered but no dish is from the main category", () => {
        const firstOrder: Order = [
            {
                id: 9,
                name: "Sticky toffee",
                price: 18,
            },
            {
                id: 10,
                name: "Tiramisu",
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

        const ruleResponse = atLeastTwoCoursesRule.check([
            firstOrder,
            secondOrder,
        ]);

        expect(ruleResponse.ok).to.equal(false);
        expect(ruleResponse.message).to.equal('Dinner 1, please, have at least one dish from main category.')
    });
});
