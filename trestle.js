$( document ).ready(function() {
    // Loops through tables and creates separate arrays of TH data for each table
       $("table").each(function () {
            var tableArray = [];
            $(this).find("th").each(function (index) {
                var $this = $(this);
                tableArray[index] = $this.text();
            });
            console.log(tableArray);

        // Create class name based on th values and store as variable
            var tableString = tableArray.join();
            tableString = tableString.replace(/,/g, '_')
            tableString = tableString.replace(/ /g, '-')
            var tableClass = ".responsive-table." + tableString;
            console.log(tableClass);

        // Push tableClass variable into the table HTML element
            var applyTableClass = tableClass;
            applyTableClass = applyTableClass.replace(/\./gi, " ")  //converts the style declaration into something i can insert into table tag (minus the dots!)
            console.log(applyTableClass);
            $(this).addClass(applyTableClass);

        // Create a loop which will print out all the necessary css declarations (into a string variable) based on the amount of TH elements
            var i = 0;
            var styleTag = "";

            while (tableArray[i]) {
                styleTag += tableClass + " td:nth-of-type(" + [i + 1] + "):before { content: '" + tableArray[i] + "'; }";
                i++;
            }

        // Push the styleTag variable into the HTML style tag   
            $('style').append(styleTag);
        });
 });
