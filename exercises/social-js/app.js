var dogResources = {
    location: "Maryland",
    activity: "play",
    outdoor:true,
    dogParks: [
            {
                name: "Canton Dog Park",
                county: "Baltimore",
                leash: false,
                exclusions: "Pitbull mix",
                visit: function () {
                    console.log("Do not visit with Brodie!");
                }
            },
            {
                name: "Cabin John Dog Park",
                county: "Bethesda",
                leash: true,
                exclusions: "none",
                visit: function () {
                    console.log("Visit with Brodie!")
                }
            },
            {
                name: "Worthington Off Leash Dog Park",
                county: "Ellicott City",
                leash: false,
                exclusions: ["Pitbull mix", "Rottweiler"],
                visit: function () {
                    console.log("Do not visit with Brodie!")
                }
            },
            {
                name: "Maryland City Park",
                address: "Laurel",
                leash: false,
                exclusions: "none",
                visit: function() {
                    console.log("Visit with Brodie!")
                }
            }
        ],
    indoor: true,
    petStores: [
            {
                name: "Charm City Puppies",
                county: "Columbia",
                veterinaryServices: false
            },
            {
                name: "Today's Pet",
                county: "Elkridge",
                verterinaryServices: true
            },
            {
                name: "Pet Value",
                county: "Potomac",
                verterinaryServices: true
            },
            {
                name: "Bark",
                county: "Silver Spring",
                verterinaryServices: false
            }
        ]
};
dogResources.petStores[0].grooming = true;
dogResources.petStores[1].grooming = false;
dogResources.petStores[2].grooming = true;
dogResources.petStores[3].grooming = true;


var addExclusion= dogResources.dogParks[2].exclusions.push("Chihuahua");
console.log(addExclusion);
console.log(dogResources);
console.log(dogResources.dogParks[2].exclusions);
console.log(dogResources.dogParks[0].visit);