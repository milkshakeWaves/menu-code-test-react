import { describe, before } from "mocha";
import { expect } from "chai";
import OnePieceOfCakeLeftRule from "../../src/rules/OnePieceOfCakeLeftRule";
import { Order } from "../../src/component/MainPage";
import { Rule } from "../../src/rules/Rule";

describe("OnePieceOfCakeLeftTest", () => {
    let onePieceOfCakeLeftRule: Rule;
    before(() => {
        onePieceOfCakeLeftRule = new OnePieceOfCakeLeftRule();
    });

    it("returns ok if no piece of cake has been ordered", () => {
        const firstOrder: Order = [
            {
                id: 6,
                name: "Meatballs",
                price: 11.5,
            },
        ];
        const secondOrder: Order = [
            {
                id: 9,
                name: "Sticky toffee",
                price: 18,
            },
        ];

        const ruleResponse = onePieceOfCakeLeftRule.check([
            firstOrder,
            secondOrder,
        ]);

        expect(ruleResponse.ok).to.equal(true);
    });

    it("returns ok if one piece of cake has been ordered", () => {
        const firstOrder: Order = [
            {
                id: 11,
                name: "Cheesecake",
                price: 4,
            },
        ];
        const secondOrder: Order = [
            {
                id: 9,
                name: "Sticky toffee",
                price: 18,
            },
        ];

        const ruleResponse = onePieceOfCakeLeftRule.check([
            firstOrder,
            secondOrder,
        ]);

        expect(ruleResponse.ok).to.equal(true);
    });

    it("returns false if more than one pieces of cake have been ordered", () => {
        const firstOrder: Order = [
            {
                id: 11,
                name: "Cheesecake",
                price: 4,
            },
        ];
        const secondOrder: Order = [
            {
                id: 11,
                name: "Cheesecake",
                price: 4,
            },
        ];

        const ruleResponse = onePieceOfCakeLeftRule.check([
            firstOrder,
            secondOrder,
        ]);

        expect(ruleResponse.ok).to.equal(false);
        expect(ruleResponse.message).to.equal("Only one piece of cake left");
    });
});
