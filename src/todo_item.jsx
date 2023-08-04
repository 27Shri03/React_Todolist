import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Todo_item({ Todo , rem , tog}) {
    const labelId = `checkbox-list-label-${Todo.id}`;
    return (
        <ListItem
            key={Todo.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={()=>{rem(Todo.id)}}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={Todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={()=>{tog(Todo.id)}}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={Todo.Text} />
            </ListItemButton>
        </ListItem>

    );
}