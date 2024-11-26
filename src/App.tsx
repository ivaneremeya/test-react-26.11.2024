import { FormWrapper } from './hoc/from-wrapper';
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
