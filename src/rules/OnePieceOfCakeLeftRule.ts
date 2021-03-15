import { Order } from "../models/Order";
import { Dish } from "../models/Dish";
import { Rule, RuleResult } from "./Rule";

const CHEESECACKE_CODE = 11;

export default class OnePieceOfCakeLeftRule implements Rule {
    check(orders: Order[]): RuleResult {
        let numberOfCheesecakePieces = 0;

        for (const order of orders) {
            numberOfCheesecakePieces += order.filter(
                (currDish: Dish) => currDish.id === CHEESECACKE_CODE
            ).length;
        }

        const checkResult = numberOfCheesecakePieces <= 1;

        return {
            ok: checkResult,
            message: checkResult ? "" : "Only one piece of cake left",
        };
    }
}
