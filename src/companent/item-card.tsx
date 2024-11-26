import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from './model/todo-slice';
import { Box, Button, TextField, Typography } from '@mui/material';
import { TodoItem } from './type';


export const ItemCard: React.FC<{ item: TodoItem }> = ({ item }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(item.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTodo({ id: item.id, text: editText }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(item.text);
    setIsEditing(false);
  };

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
    >
      <Box>
        {isEditing ? (
          <>
            <TextField
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              sx={{ width: '100%' }}
            />
            <Button onClick={handleSave} size='small' variant='contained' color='success'>
              Сохранить
            </Button>
            <Button onClick={handleCancel} size='small' variant='outlined' color='error'>
              Отмена
            </Button>
          </>
        ) : (
          <Typography variant='body2'>{item.text}</Typography>
        )}
      </Box>
      <Box>
        <Button
          onClick={() => dispatch(deleteTodo(item.id))}
          size='small'
          variant='contained'
          color='error'
        >
          Удалить
        </Button>
        {!isEditing && (
          <Button onClick={handleEdit} size='small' variant='outlined' color='warning'>
            Редактировать
          </Button>
        )}
      </Box>
    </Box>
  );
};
