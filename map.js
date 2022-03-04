    //These function will tell how to create map, add elements to map and how to access elements from map

    var person = new Map();//creating map

    person.set("Fname" ,"kavith");//adding elements
    person.set("lname","PU");
    person.set("phoneno",9685741234);
    

    //this function will display details of persons
    function displayPerson()
    {
        document.write("<h3>Using forEach() It will display all elements from the Map</h3>");
        let text=" ";
        person.forEach(function(value,key)
                        { 
                            text += key +" " + " = " +value +" ";}
                      )
        document.write(text);
     }
    displayPerson();

     //this function will display keys
     function displayKeys()
     {
         document.write("<h3>Using keys() it will display only keys from the map</h3>");
         let text=" ";
        for(var key of person.keys())
        { 
            text += key +"<br>";
        }
        document.write(text);
      }
     displayKeys();

     //this function will display only values
     function displayValues()
     {
         document.write("<h3>Using values() it will display only values from the map</h3>");
         let text=" ";
        for(var value of person.values())
        { 
            text += value +"<br>";
        }
        document.write(text);
      }
     displayValues();

     //this function will returns  all entries as key,vaules from a map
     function displayAllEntries()
     {
         document.write("<h3>Using entries() it will display all entries from the map</h3>");
         let text=" ";
        for(var entry of person.entries())
        { 
            text += entry +"<br>";
        }
        document.write(text);
      }
      displayAllEntries();

      //this function will return specified key value
      function get()
      {
          document.write("<h3>Using get() it will display specifed key value from the map</h3>")
          document.write(person.get("Fname"));
      }
      get();

