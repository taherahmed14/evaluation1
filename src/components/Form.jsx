import { Box, SimpleGrid } from "@chakra-ui/react";
import { useRef, useState } from "react";
import "./Form.css";

export const Form = ({ getData }) => {
    const [formData, setForm] = useState({
        title: "",
        ingredients: "",
        time: "",
        image: "",
        instructions: ""
    });

    const file = useRef(null);

    const handleChange = (e) => {
        let { name, value, file } = e.target;
        setForm({...formData, [name] : value}, file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(formData);
    }

    const { image } = formData;
    return (
        <div>
            <h3>Add Recipe</h3>
            <SimpleGrid columns={1} spacing={30} padding={20}>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <input onChange={handleChange} name="title" type='text' placeholder="Enter Title" className="input"/>
                    </Box>
                    <Box>
                        <input onChange={handleChange} name="ingredients" type='text' placeholder="Enter ingredients" className="input"/>
                    </Box>
                    <Box>
                        <input onChange={handleChange} name="time" type='text' placeholder="Enter time" className="input"/>
                    </Box>
                    <Box>
                        <input onChange={handleChange} name="instructions" type='text' placeholder="Enter Instructions" className="inputIng" />
                    </Box>
                    <Box>
                        <input onChange={handleChange} ref={file} type='file' value={image} className="button" />  
                    </Box>
                    <Box>
                        <input type='submit' value='submit' className="button" />
                    </Box>  
                </form>
            </SimpleGrid>
        </div>
    );
};