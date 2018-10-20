setInterval(function() {
   var time = new Date();
   var hour = time.getHours();
   var minute = time.getMinutes();

   //Determines if should print good morning, afternoon, or evening
   if(hour >= 18) {
     greeting = "Good Evening!";
   } else if (hour >= 12) {
     greeting = "Good Afternoon!";
   } else if(hour > 0) {
     greeting = "Good Morning!";
   } else {
     greeting = "Welcome!";
   }
   $("#welcome-text").text(greeting);

   //Non-millitary time style
   if(hour > 12) {
     hour -= 12;
   }

   //Include 0's if hours or minutes is < 10
   if(hour >= 10 && minute >= 10) {
     $("#time-text").text(hour.toString() + ":" + minute.toString());
   } else if (hour >= 10) {
     $("#time-text").text(hour.toString() + ":0" + minute.toString());
   } else if (minute >= 10) {
     $("#time-text").text('0'+ hour.toString() + ":" + minute.toString());
   } else {
     $("#time-text").text('0'+ hour.toString() + ":0" + minute.toString());
   }
}, 500); //refresh every 500 milliseconds
