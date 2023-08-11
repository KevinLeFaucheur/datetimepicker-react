
### I - Usage
### II - Examples
### III - 





### Full options list

| Option Name | Default value | Description | Example            |
| ------------- | -------- | -------- | ----------------------------- |
|locale         | | | ```{ locale: 'fr' }```  ```  ```|
|format         |y/m/d h:i | Format date| ```{ format: 'y.d.m' }```  |
|formatDate     |y/m/d     |Format date | ```{ format: 'y.d.m' }``` |
|formatTime     |h:i       |Format date | ```{ format: 'y.d.m' }```  |
|step           |60         |timepicker steps, 0 < step <= 60 | ```{ step: 30 }```  |
|closeOnDateSelect |false |Close picker when choosing a date | |
|validateOnBlur |true | | |
|timepicker     |false |Enable time picking |![[Code_2023-08-11_14-12-14.png]] |
|datepicker     |true |Enable date picking  | ```{ datepicker: true }```  |
|weeks          |false |Show week number, left side of calendar | |
|theme          |'' |className for alternate color theme, **dark** is supported | ```{ timepicker: true }```  |
|minDate        |false |Minimum date enabled to pick | ```{ timepicker: true }```  |
|maxDate        |false |Maximum date enbaled to pick | ```{ timepicker: true }```  |
|startDate      |false | | ```{ timepicker: true }```  |
|defaultDate    |false | | ```{ timepicker: true }```  |
|defaultTime    |false | | ```{ timepicker: true }```  |
|minTime        |false |Minimum time enabled to pick | ```{ timepicker: true }```  |
|maxTime        |false |Maximum time enabled to pick | ```{ timepicker: true }```  |
|allowTimes     |[]    |Timepicker will only display these if set | ```{ timepicker: true }```  |
|opened         |false |Picker is opened by default when true | |
|inline         |false | | |
|todayButton    |true  |Display **Today** button shortcut | |
|defaultSelect  |true  | | |
|timepickerScrollbar |true  |Display scroll bar for timepicker | |
|onSelectDate        | | | |
|onChangeMonth       | | | |
|onChangeYear        | | | |
|onChangeDateTime    | | | |
|onShow              | | | |
|onClose             | | | |
|inverseButton       |false |Inverse month and time arrow buttons | |
|scrollMonth         |true |Enable mouse wheel for scrolling months | |
|scrollTime          |true | | |
|scrollInput         |true | | |
|hours12             |false | | |
|yearStart           |1950 |Start value for year select | |
|yearEnd             |2050 |End value for year select | |
|weekends            |[] | | |
|disabledDates       |[] |Disable specific dates | |
|allowDates          |[] | | |
|disabledWeekDays    |[]  |Disable week days by index, Sun = 0, Sat = 6 | |