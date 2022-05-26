import "./styles.css";
import PaginatedForm from "./components/PaginatedForm/PaginatedForm";
import FormStep from "./components/FormStep/FormStep";
import TextField from "./components/TextField/TextField";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import { STATES } from "./helpers/constants";

const statesList = STATES.map((state) => {
  return { value: state.name, label: state.code };
});

export default function App() {
  return (
    <div className="App">
      <PaginatedForm>
        <FormStep>
          <TextField
            id="firstName"
            className="first_name"
            placeholder="first_name"
          />
          <TextField
            id="lastName"
            className="last_name"
            placeholder="last_name"
          />
        </FormStep>
        <FormStep>
          <TextField id="streetAddress" placeholder="street address" />
          <TextField id="secondaryAddress" placeholder="secondary address" />
          <TextField id="city" className="city" placeholder="city" />
          <SelectMenu id="state" options={statesList} />
        </FormStep>
        <FormStep></FormStep>
      </PaginatedForm>
    </div>
  );
}
