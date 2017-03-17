

document.getElementById("button").addEventListener("click", function () {
    var form = document.getElementById("form");
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var diet = [];
//    for (var i= gender.length; i > 0; i--) {
//        gender[i].onchange = function() {a
//            alert(this.value);
//        }
//    }
    var location = locations.options[locations.selectedIndex].text;
    for (var i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            diet.push(form.diet[i].value)
    }
        }
    alert("Name: " + firstName + " " + lastName + " Age: " + age + " Gender: " + gender + " Location: " + location + " Dietary Restrictions: " + diet);

    })
    



      
