import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import Todo_item from './todo_item';
import Form from './Form';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const getInitialdata = () => {
    const data = JSON.parse(localStorage.getItem("Todo"));
    if (!data) {
        return [];
    }
    return data;
}

let i = 1;
export default function Todo_list() {
    const [list, SetList] = useState(getInitialdata);
    useEffect(() => {
        localStorage.setItem("Todo", JSON.stringify(list));
    }, [list]);
    const remove = (id) => {
        SetList((todo) => {
            return todo.filter((t) => t.id !== id);
        });
    }
    const toggle = (id) => {
        SetList((todo) => {
            let num = [...todo];
            for (let i = 0; i < num.length; i++) {
                if (num[i].id === id) {
                    num[i].completed = !(num[i].completed);
                }
            }
            return num;
        })
    }
    const addItem = (text) => {
        return SetList((prev) => {
            return [...prev, { id: i++, Text: text, completed: false }];
        })
    }
    return (
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            m:5,
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos List
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {list.map((Todo) => (
                    <Todo_item Todo={Todo} rem={remove} tog={toggle} />
                ))}
                <Form add={addItem} />
            </List>
        </Box>
    );
}


