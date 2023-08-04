import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
export default function Form({add}) {
    const [text , setText] = useState("");
    const HandleChange = (evt) =>{
        setText(evt.target.value);
    }
    const handleSubmit=(evt)=>{
        evt.preventDefault();
        add(text);
        setText("");
    }
    return (
        <>
            <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
                <form onSubmit={handleSubmit}>
                <InputLabel htmlFor="standard-adornment-password">Task</InputLabel>
                <Input
                    id="standard-adornment-password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="DoneAllIcon"
                                onClick={handleSubmit}
                            >
                                <DoneAllIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    size="medium"
                    value={text}
                    onChange={HandleChange}
                />
                </form>
            </FormControl>
        </>
    );
}