        //This function will display the current date,day and time
        
        function getCurrentDateAndTime()
        {
            let d = new Date();
            let currDate = d.getDate();
            let year = d.getFullYear();
            let mon = d.getMonth()+1;

            let hours = d.getHours();
            let min = d.getMinutes();
            let sec = d.getSeconds();

            let day  = d.getDay();
            switch(day)
            {
                case 0:
                    day = "sunday";
                    break;
                case 1:
                    day = "monday";
                    break;
                case 2:
                    day = "tuesday";
                    break;
                case 3:
                    day = "wednesday";
                    break;
                case 4:
                    day = "thursday";
                    break;
                case 5:
                    day = "Friday";
                    break;

            }
        
        document.getElementById('time').innerText = hours +":" +min +":" +sec;
        document.getElementById('date').innerText = currDate +"-" +mon +"-" +year;
        document.getElementById('day').innerText = day;
        }
        getCurrentDateAndTime();