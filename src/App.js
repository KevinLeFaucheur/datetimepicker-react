import { useState } from "react";
import  DatePicker from "./index"

const App = () => {
  const [date, setDate] = useState();

  return (
    <section>
      <h1>{date}</h1>
      <DatePicker onChange={(value) => setDate(value)}/>
    </section>
  );
}

export default App;