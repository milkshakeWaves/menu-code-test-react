import { Order } from "../models/Order";
import { Dish } from "../models/Dish";
import { Rule, RuleResult } from "./Rule";

const PRAWN_COCKTAIL_ID = 4;
const SALMON_FILLET_ID = 7;

export default class PierreWaiterRule implements Rule {
    check(orders: Order[]): RuleResult {
        for (let i = 0; i < orders.length; ++i) {
            const orderCheck = orders[i].filter(
                (dish: Dish) =>
                    dish.id === PRAWN_COCKTAIL_ID ||
                    dish.id === SALMON_FILLET_ID
            );

            if (orderCheck.length === 2) {
                return {
                    ok: false,
                    message: `Diner ${
                        i + 1
                    }, you cannot choose prawn cocktail and salmon fillet in the same meal!`,
                };
            }
        }

        return {
            ok: true,
        };
    }
}
