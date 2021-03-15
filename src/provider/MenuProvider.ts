import { RestaurantMenu } from "../models/RestaurantMenu";
import menuList from "../../menu-data";

export const emptyMenu: RestaurantMenu = {
    starters: [],
    mains: [],
    desserts: [],
};

export default (): RestaurantMenu => {
    return menuList;
};
