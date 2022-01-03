import { useEffect, useState } from "react"
import { Form } from "./Form"
import { RecipeList } from "./List";
import { ShowRecipe } from "./ShowRecipe";
import { Box, Container } from '@chakra-ui/react'

export const Main = () => {
    const [recipe, setRecipe] = useState([]);
    const [recipeDet, setRecipeDet] = useState([]);
    const [titleFil, setTitleFil] = useState("");

    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = () => {
        fetch("http://localhost:3002/recipe")
        .then((data) => data.json())
        .then((res) => {
            setRecipe(res);
        });
    }

    const handleData = (data) => {
        const recipeData = {
            title: data.title,
            ingredients: data.ingredients,
            time: data.time,
            image: data.image,
            instructions: data.instructions
        }
        fetch("http://localhost:3002/recipe", {
            method: "POST",
            body: JSON.stringify(recipeData),
            headers: {
                "content-type":"application/json"
            }
        })
        .then(() => {
            getRecipe();
        })
    }

    const showAll = (id) => {
        fetch(`http://localhost:3002/recipe?id=${id}`)
        .then((data) => data.json())
        .then((res) => {
            setRecipeDet(res);
        });
    }

    const showTitle = (e) => {
        setTitleFil(e.target.value);
    }

    const showRecipe = () => {
        console.log(titleFil);
        fetch(`http://localhost:3002/recipe?title=${titleFil}`)
        .then((data) => data.json())
        .then((res) => {
            setRecipe(res);
        });
    }

    const resetRecipe = () => {
        getRecipe();
    }

    const sortTime = () => {
        fetch("http://localhost:3002/recipe")
        .then((data) => data.json())
        .then((res) => {
            let req = res.sort((a, b) => {
                return +a.time - +b.time;
            });
            setRecipe(req);
        });
    }

    return (
        <div>
            <Container display='flex' ml={280} mt={20}>
                <Box width='400px' borderRadius={10} background='#93FFD8'>
                    <Form getData={handleData} />
                </Box>

                <Box background='#FF865E' ml={20} width='400px' maxH={350} borderRadius={10} overflow='scroll' overflowX='hidden'>
                    <Box mt={10}>
                        <input onChange={showTitle} type='text' placeholder="Search recipe" />
                        <button onClick={showRecipe} >Search</button>
                    </Box>
                    <Box mt={5}>
                        <button onClick={resetRecipe}>Show All</button>
                        <button onClick={sortTime}>Sort Time</button>
                    </Box>
                    {recipe.map((e) => (
                        <RecipeList {...e} showAll={showAll} />
                    ))}
                </Box>
            </Container>

            <Box background='#B4B897' width='820px' borderRadius={10} ml={280} mt={10} height={280}>
                {recipeDet.map((e) => (
                    <ShowRecipe {...e} />
                ))}
            </Box>
            
        </div>
    )
} 