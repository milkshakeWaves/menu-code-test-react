import { Flex } from "@chakra-ui/react";
import React from "react";

interface ListItemProps {
    name: string;
    price: number;
    isSelected: boolean;
    onItemClick: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
    name,
    price,
    isSelected,
    onItemClick,
}) => {
    return (
        <Flex
            borderWidth="1px"
            borderRadius="lg"
            h={8}
            bg={isSelected ? "green.200" : "white"}
            onClick={() => onItemClick()}
            cursor="pointer"
            justify="center"
            mt={2}
            mb={2}
        >
            {name}, {price}€
        </Flex>
    );
};
