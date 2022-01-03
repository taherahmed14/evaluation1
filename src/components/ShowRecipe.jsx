import { Heading, Text } from '@chakra-ui/react'

export const ShowRecipe = ({ id, title, ingredients, time, instructions }) => {
    return (
        <div>
            <Heading p={10} pb={0}>{title}</Heading>
            <Text>{ingredients}</Text>
            <Text>Cooking Time: {time}:00</Text>
            <Text fontSize={14} padding={20} pt={0}>{instructions}</Text>
        </div>
    )
};