// Parse Weekly Event Recurrences
// Client project where weekly event recurrence rules were stored as strings in the database
// Strings were parsed and displayed with JavaScript

// Input: INTERVAL=1;BYDAY=TH
// Output: Thursdays
// Input: INTERVAL=1;BYDAY=MO,SA
// Output: Mondays, Saturdays:
// SU,MO,TU,WE,TH,FR,SA


const parseEventDays = (str) => {

  const days = {
      "SU":"Sundays",
      "MO":"Mondays",
      "TU":"Tuesdays",
      "WE":"Wednesdays",
      "TH":"Thursdays",
      "FR":"Fridays",
      "SA":"Saturdays"
  }

  const dayRecurrences = str.split('=')[2].split(',')

}

console.log(parseEventDays("INTERVAL=1;BYDAY=TH"))
console.log(parseEventDays("INTERVAL=1;BYDAY=SU,MO"))
