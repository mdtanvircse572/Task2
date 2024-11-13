/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age = 25; // Change this value to test different age groups
var isStudent = true; // Set this to true if the person is a student, false otherwise
var ticketFare = 800; // Regular ticket fare

// Calculate fare based on age and student status
if (age < 10) {
    ticketFare = 0; // Free for children under 10
} else if (isStudent) {
    ticketFare = ticketFare * 0.5; // 50% discount for students
} else if (age >= 60) {
    ticketFare = ticketFare * 0.85; // 15% discount for senior citizens
} else {
    ticketFare = ticketFare; // Regular fare
}

console.log("Ticket fare is:", ticketFare, "tk");
