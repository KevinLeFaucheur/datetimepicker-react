import { useState } from "react";
import DatePicker from "../../src";

const App = () => {
  const [date, setDate] = useState();
  console.log(date);

  return (
    <section>
      <DatePicker onChange={(value) => setDate(value)}/>
    </section>
  );
}

export default App;