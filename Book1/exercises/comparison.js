/**
 * Let's practice working with value types and comparisons (Chapter 4, Pillar 3) where coercion will need to be involved.

scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes). It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.
 */

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
   console.log(`7:00 is smaller than 07:30? => ${("07:00" < startTime)}`);
   console.log(durationMinutes);
}

scheduleMeeting("7:00",15);     // false
// scheduleMeeting("07:15",30);    // false
// scheduleMeeting("7:30",30);     // true
// scheduleMeeting("11:30",60);    // true
// scheduleMeeting("17:00",45);    // true
// scheduleMeeting("17:30",30);    // false
// scheduleMeeting("18:00",15);    // false