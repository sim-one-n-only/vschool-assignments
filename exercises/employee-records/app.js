function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
    this.printEmployeeForm = function () {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
    }
}
var employees = [];

function addEmployees(name, JobTitle, salary, status) {
    new Employee(name, jobTitle, salary, status);
}

var firstEmployee = new Employee("Simone", "Senior Developer", "$100000");
var secondEmployee = new Employee("Josie", "Junior Developer", "$70000", "Part-time");
var thirdEmployee = new Employee("Rasheda", "Warehouse Manager", "$55000");



console.log(firstEmployee.printEmployeeForm());
employees.push(thirdEmployee);
console.log(employees);