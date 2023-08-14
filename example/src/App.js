import { useState } from "react";
import DatePicker from "../../src";

const App = () => {
  const [date, setDate] = useState();
  console.log(date);

  return (
    <section>
      <DatePicker 
        id='start'
        onChange={(value) => setDate(value)} 
        options={{ 
        // locale: 'fr', 
        // timepicker: true, 
        // inline: true,
        highlightedDates: [
          '8/3/2023, Test',
          '8/8/2023, Birthday, hlMagenta',
          '8/24/2023, Another Test',
        ],
        highlightedPeriods: [
          '8/17/2023, 9/1/2023, OpenClassrooms, hlGreen',
          ['12/1/2023', '12/18/2023', 'winter', 'hlCyanPlain']
        ],
        // allowTimes: ['21:26','10:05','11:00','13:06'],
        // yearStart: 1970,
        // yearEnd: 2030,
        // timepickerScrollbar: false,
        // inverseButton: true,
        // scrollMonth: true,
        // todayButton: false,
        // weekends: ['08/09/2023'],
        // hours12: true
        // datepicker: false,
        // weeks: true,
        // minTime: '17',
        // maxTime: '21',
        // defaultTime: '18',
        // minDate: '8/8/2023',
        // maxDate: '8/16/2023',
        // defaultDate: '8/17/2023',
        // startDate: '8/15/2023',
        // step: 30,
        // theme: 'dark',
        // theme: 'night',
        // opened: true,
        // disabledWeekDays: [0, 2, 5],
        // disabledDates: ['08/23/2023'],
        // allowDates: ['8/8/2023', '8/16/2023'],
        // onSelectTime: () => console.log('onSelectTime'),  
        // onSelectDate: () => console.log('onSelectDate'),
        // onChangeMonth: () => console.log('onChangeMonth'),
        // onChangeYear: () => console.log('onChangeYear'),
        // onChangeDateTime: () => console.log('onChangeDateTime'),
        // onShow: () => console.log('onShow'),
        // onClose: () => console.log('onClose'),
        // format: 'y\\m\\d h"i' 
        }}
      />
    </section>
  );
}

export default App;