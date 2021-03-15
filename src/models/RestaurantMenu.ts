import { Dish } from "./Dish";

export interface RestaurantMenu {
    [index: string]: Array<Dish>;
}