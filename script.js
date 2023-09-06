// When document is fully loaded......
$(document).ready(function () {

    // Applying fade-in animation to 'img','h1','conatiner' and 'ccontainer' elemets and slide-down animation to 'p' tag.
    $("img").fadeOut(10);
    $("p").fadeOut(10);
    $("h1").fadeOut(10);
    $("img").fadeIn(1000);
    $("p").slideDown(1000);
    $("h1").fadeIn(1000);
    $(".container").fadeOut(10);
    $(".container").fadeIn(1000);
    $(".ccontainer").fadeOut(10);
    $(".ccontainer").fadeIn(1000);


    // When user changes color this function is called.
    $('#colorInput').change(function () {
        const customColor = $(this).val();
        //changing background color.
        $('body').css('background-color', customColor);
    });

    // When user clicks calculate BMI this function is called.
    $('#calculateBmi').click(function () {

        const weight = parseFloat($('#weight').val());
        const height = parseFloat($('#height').val());

        // Checking if the values is less than 0 or is an alphabet......
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            $('#result').text('Please enter valid values.');
            return;
        }

        // Calculating BMI and level.....
        const bmi = weight / (height * height);
        var level = "";

        // Chaning color according to different levels.....
        if (bmi < 18.5) {
            level = "Underweight, need to gain some weight....";
            $('#level').css('color', 'orange');
        }
        else if (bmi < 25) {
            level = "Healthy, you are fit....";
            $('#level').css('color', 'blue');
        }
        else {
            level = "Overweight, you need to lose some fat....";
            $('#level').css('color', 'red');
        }

        // Adding text to result and level id element and adding slide-down animation to both elements.
        $('#result').text(`Your BMI Score : ${bmi.toFixed(2)}`);
        $("#result").fadeOut(1);
        $("#result").slideDown();
        $('#level').text(`Your level is : ` + level);
        $("#level").fadeOut(1);
        $("#level").slideDown();
    });

    // When user clicks calculate Age this function is called.
    $('#calculateAge').on('click', function () {
        const birthdate = new Date($('#birthdate').val());

        // Checking if age is valid or not....
        if (isNaN(birthdate)) 
        {
            $('#age').text('Please enter a valid birthdate.');
        }
        else
        {
            const today = new Date();
            const birthYear = birthdate.getFullYear();
            const birthMonth = birthdate.getMonth() + 1;
            const birthDay = birthdate.getDate();
            const todayYear = today.getFullYear();
            const todayMonth = today.getMonth() + 1;
            const todayDay = today.getDate();
            let group="";

            // Calculating age and age group
            let ageYear = todayYear - birthYear;
            let ageMonth = todayMonth - birthMonth;
            let ageDay = todayDay - birthDay;

            if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
                ageYear--;
                ageMonth += 12;
            }

            if (ageDay < 0) {
                ageMonth--;
                const daysInLastMonth = new Date(todayYear, todayMonth - 1, 0).getDate();
                ageDay += daysInLastMonth;
            }

            // Chaning color according to different group.....
            if(ageYear<12)
            {
                group="Children";
                $('#group').css('color', 'blue');
            }
            else if(ageYear>12 && ageYear<18)
            {
                group="Teenager";
                $('#group').css('color', 'green');
            }
            else if(ageYear>18 && ageYear<50)
            {
                group="Adult";
                $('#group').css('color', 'orange');
            }
            else
            {
                group="Old Person";
                $('#group').css('color', 'red');
            }

            // Adding text to age and group id element and adding slide-down animation to both elements.
            $('#age').text('Your age is: ' + ageYear + ' years, ' + ageMonth + ' months, and ' + ageDay + ' days.');
            $("#age").fadeOut(1);
            $("#age").slideDown();
            $('#group').text('Your Age Group Is : ' + group);
            $("#group").fadeOut(1);
            $("#group").slideDown();
        }
    });
});