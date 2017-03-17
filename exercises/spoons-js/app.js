var projector: {
    color: "white",
    number: 1,
    functional: true,
    repair: function(){
        console.log("replace bulb")
    }
};

var screen: {
    color: "black",
    number: 13,
    functional: true,
    repair: function(){
        console.log("Order a new one")
    }
};

var students: {
    color: ["white", "black", "tan"],
    number: 12,
    functional: true,
    attendance: function(){
        if(present === 12){
            console.log("All students present and accounted for!")
        }else {
            console.log("Where's Josie?")
        }
    }
};

var cellPhone: {
    color: ["white", "black", "pink", "gray"],
    number: 8,
    functional: true,
    iphone: function(){
        if(iphone === true) {
            console.log("Let's iMessage!")
        }else {
            console.log("You should just switch to Iphone.")
        }
    }
};

var macBookPro: {
    color: "silver",
    number: 10,
    functional: true,
    broken: function() {
        if(macBookPro) {
            console.log("Use an HDMI cord!")
        }else {
            console.log("Use an adapter!")
        }
    }
};

var macBookAir: {
    color: "siver",
    number: 3,
    functional: true,
    who: function() {
        console.log("Is this mine or yours?")
    }
};

var desk: {
    color: "gray",
    number: 8,
    functional: true
    
};

var backpack: {
    color: ["black", "blue", "red"],
    number: 5,
    functional: "n/a"
};

