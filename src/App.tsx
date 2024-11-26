import { FormWrapper } from './layout/from-wrapper';
import { FromAdd } from './companent/add-form';
import { ListWrapper } from './companent/list-wrapper/list-wrapper';

function App() {
  return (
    <>
      <FormWrapper children={<FromAdd />} />
      <ListWrapper />
    </>
  );
}

export default App;
