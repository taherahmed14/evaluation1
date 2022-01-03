import { Box, Container } from '@chakra-ui/react'

export const RecipeList = ({ id, title, ingredients, time, instructions, showAll }) => {
    
    return(
        <Box background='#A2D2FF' onClick={() =>  showAll(id)} className="card" _hover={{background: '#FEE440'}}>
            <div>{title}</div>
            <div>Time: {time}:00</div>
        </Box>
    )
}