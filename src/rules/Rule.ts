import { Order } from "../models/Order";

export type RuleResult = {
    ok: boolean;
    message?: string;
};

export interface Rule {
    check(orders: Order[]): RuleResult;
}
