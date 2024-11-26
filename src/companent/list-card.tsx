import { Typography } from '@mui/material';
import { ItemCard } from './item-card';
import styles from './list-wrapper/list-card.module.scss';
import { TodoItem } from './type';

interface ListCardProps {
  items: TodoItem[];
}

export const ListCard: React.FC<ListCardProps> = ({ items }) => {
  return (
    <div className={styles.list_card}>
      <Typography variant='h4' component='h2' gutterBottom>
        Список дел
      </Typography>
      {items.map((todo) => (
        <ItemCard key={todo.id} item={todo} />
      ))}
    </div>
  );
};
