import { Order } from "../models/Order";
import { Rule, RuleResult } from "./Rule";
import TwoCoursesRule from "./AtLeastTwoCoursesRule";
import OneCheesecakeRule from "./OnePieceOfCakeLeftRule";
import PierreWaiterRule from "./PierreWaiterRule";

export default class RuleExecutor {
    static rules: Rule[] = [
        new TwoCoursesRule(),
        new OneCheesecakeRule(),
        new PierreWaiterRule(),
    ];

    static apply(orders: Order[]): RuleResult[] {
        const rulesCheckResults: RuleResult[] = [];

        this.rules.forEach((rule: Rule) => {
            const ruleResult = rule.check(orders);
            rulesCheckResults.push(ruleResult);
        });

        return rulesCheckResults;
    }
}
