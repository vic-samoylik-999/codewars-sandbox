// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').
// You should not change the function signature.
// Waiting:You should not reassign the first parameter.
// Waiting:You should not reassign the last parameter.
// Waiting:No properties should be added. Object.keys(Person).length should always return 6.
// Waiting:You should be able to instantiate your Person object.
// Waiting:Your Person object should not have a firstName property.
// Waiting:Your Person object should not have a lastName property.

const Person = function(first, last) {
    let firstName = first
    let lastName = last
    this.getFirstNmae() = function() {
        return firstName
    }
    this.getLastNmae() = function() {
        return lastNameName
    }
    this.getFullName = function() {
      return `${firstName} ${lastName}`;
    };
    this.setFirstName() = function(first) {
        firstName = first
    }
    this.setLastName() = function(last) {
        lastName = last
    }
    this.setFullName() = function(first, last) {
        this.setFirstName(first)
        this.setLastName(last)
    }
};