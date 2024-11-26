import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from '../type';
import { Container } from '@mui/material';
import ReactPaginate from 'react-paginate';
import styles from './list-card.module.scss';
import { ListCard } from '../list-card';

export const ListWrapper = () => {
  const pageSize = 3;
  const todos = useSelector((state: any) => state.persistedReducer.todos) as TodoItem[];
  const [currentPage, setCurrentPage] = React.useState(0);
  const totalPages = Math.ceil(todos?.length / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = Math.min(startIndex + pageSize, todos.length);
  const currentTodos = todos.slice(startIndex, endIndex);

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };

  return (
    <Container maxWidth='sm' sx={{ marginTop: 4, marginBottom: 5 }}>
      <ListCard items={currentTodos} />
      {todos.length ? (
        <ReactPaginate
          previousLabel={'Предыдущая'}
          nextLabel={'Следующая'}
          breakLabel={'...'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          pageClassName={styles.page_item}
          pageLinkClassName={styles.page_link}
          previousClassName={styles.page_item}
          previousLinkClassName={styles.page_link}
          nextClassName={styles.page_item}
          nextLinkClassName={styles.page_link}
          activeClassName={styles.active}
        />
      ) : (
        <div></div>
      )}
    </Container>
  );
};
