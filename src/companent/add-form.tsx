import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { addTodo } from './model/todo-slice';
import { useAppDispatch } from '../app/store/hook';

export const FromAdd = () => {
  const dispatch = useAppDispatch();
  const [newTodoText, setNewTodoText] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText));
      setNewTodoText('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant='h4' component='h2' gutterBottom>
          список дел
        </Typography>
        <Box
          sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: 2 }}
        >
          <TextField
            fullWidth
            variant='outlined'
            type='text'
            placeholder='Введите текст'
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <Button type='submit' variant='contained' color='success'>
            Добавить
          </Button>
        </Box>
      </form>
    </>
  );
};
