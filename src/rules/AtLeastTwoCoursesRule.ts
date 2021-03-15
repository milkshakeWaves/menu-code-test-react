import { Order } from "../models/Order";
import { Dish } from "../models/Dish";
import { Rule, RuleResult } from "./Rule";

const MAIN_LOWER_BOUND = 5;
const MAIN_UPPER_BOUND = 8;

export default class AtLeastTwoCoursesRule implements Rule {
    check(orders: Order[]): RuleResult {
        for (let i = 0; i < orders.length; ++i) {
            const atLeastTwoCoursesCheck = orders[i].length >= 2;

            if (!atLeastTwoCoursesCheck) {
                return {
                    ok: false,
                    message: `Dinner ${
                        i + 1
                    }, please, have at least two courses.`,
                };
            }

            const atLeastOneCourseFromMainCategory = orders[i].some(
                (dish: Dish) =>
                    dish.id >= MAIN_LOWER_BOUND && dish.id <= MAIN_UPPER_BOUND
            );

            if (!atLeastOneCourseFromMainCategory) {
                return {
                    ok: false,
                    message: `Dinner ${
                        i + 1
                    }, please, have at least one dish from main category.`,
                };
            }
        }

        return {
            ok: true,
        };
    }
}
