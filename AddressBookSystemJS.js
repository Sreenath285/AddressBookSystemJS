const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
const addressRegex = RegExp('^[a-zA-z0-9#,]{4,}$');
const cityAndStateRegex = RegExp('^[a-zA-z]{4,}$');
const zipCodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp("^[0-9]{2}[-]{1}[0-9]{10}$");
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

class Contact{

  constructor(...params){
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zipCode = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
  }

  get firstName(){
      return this._firstName;
  }

  get lastName(){
      return this._lastName;
  }

  get address () {
    return this._address;
  }

  get city(){
      return this._city;
  }

  get state(){
      return this._state;
  }

  get zipCode(){
      return this._zipCode;
  }

  get phoneNumber(){
      return this._phoneNumber;
  }

  get email(){
      return this._email;
  }

  set firstName(firstName){
    if (nameRegex.test(firstName))
        this._firstName = firstName;
    else
        throw "Invalid first name*";
  }

  set lastName(lastName){
    if (nameRegex.test(lastName))
        this._lastName = lastName;
    else
        throw "Invalid last name";  
  }

  set address(address) {
    if (addressRegex.test(address))
        this._address = address;
    else 
        throw "Invalid address";    
  }

  set city(city){
    if (cityAndStateRegex.test(city))
        this._city = city;
    else 
        throw "Invalid city";  
  }

  set state(state){
    if (cityAndStateRegex.test(state))
        this._state = state;
    else 
        throw "Invalid state"; 
  }

  set zipCode(zipCode){
    if (zipCodeRegex.test(zipCode))
        this._zipCode = zipCode;
    else 
        throw "Invalid zipcode"; 
  }

  set phoneNumber(phoneNumber){
    if (phoneNumberRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber;
    else 
        throw "Invalid phone number"; 
  }

  set email(email){
    if (emailRegex.test(email))
        this._email = email;
    else 
        throw "Invalid email"; 
  }

  toString(){
      return "First Name : " + this.firstName + 
             ", Last Name : " + this.lastName + 
             ", Address : " + this.address +
             ", City : " + this.city + 
             ", State : " + this.state + 
             ", ZipCode : "+ this.zipCode + 
             ", Phone Number : " + this.phoneNumber + 
             ", Email : "+ this.email;
  }
}

/**
 * Created array to store contact
 */
let addressBookArr = new Array();

/**
 * Created addContact method to add new contact in the address book
 * if contact does not exists in it
 * @param {*} contact - passing contact
 */
function addContact(contact) {
    if (!findContact(contact.firstName))
        addressBookArr.push(contact);
    else 
        console.log("Contact already exists")
}

/**
 * Created findContact method to check if conatct exists or not by passing first name
 * @param {*} firstName - passing first name
 * @returns - returns true if contact exists
 */
function findContact(firstName) {
    return addressBookArr.some(contact => contact.firstName);
}

/**
 * Created editContact method to edit existing contact 
 * @param {*} firstName - passing first name
 * @param {*} type - passing type which has to edit
 * @param {*} newValue - passing new value to that type
 */
function editContact(firstName, type, newValue) {
    if (findContact(firstName)) {
        switch(type) {
            case "lastName" :
                addressBookArr.find((contact) => contact.firstName).lastName = newValue;
                break;
            case "address" :
                addressBookArr.find((contact) => contact.firstName).address = newValue;
                break;
            case "city" :
                addressBookArr.find((contact) => contact.firstName).city = newValue;
                break;
            case "state" :
                addressBookArr.find((contact) => contact.firstName).state = newValue;
                break;
            case "zipCode" :
                addressBookArr.find((contact) => contact.firstName).zipCode = newValue;
                break;
            case "phoneNumber" :
                addressBookArr.find((contact) => contact.firstName).phoneNumber = newValue;
                break;
            case "email" :
                addressBookArr.find((contact) => contact.firstName).email = newValue;
                break;
            default :
                console.log("Enter valid type");
        }
    }
    else {
        console.log("Contact does not exist");
    }
}

/**
 * Created deleteContact method to delete contact
 * @param {*} firstName - passing firstname
 */
function deleteContact(firstName) {
    if (findContact(firstName))
        addressBookArr = addressBookArr.filter((contact) => contact.firstName != firstName)
    else 
        console.log("Contact does not exist");
}

/**
 * Created numberOfContacts method to find number of contacts 
 * @param {*} count - passing count
 * @returns - returns number of contacts
 */
function numberOfContacts(count) {
    count += 1;
    return count;
}

/**
 * Created searchContactByCity method to search contact by city
 * @param {*} city - passing city
 * @returns - returns the contact with given city
 */
function searchContactByCity(city) {
    return addressBookArr.filter(contact => contact.city == city);
}

/**
 * Created searchContactByState method to search contact by state
 * @param {*} state - passing state
 * @returns - returns the contact with given state
 */
function searchContactByState(state) {
    return addressBookArr.filter(contact => contact.state == state);
}

/**
 * Created viewContactByCity method to view contact by city
 * @param {*} city - passing city
 * @returns - returns the contact with given city
 */
function viewContactByCity(city) {
    return addressBookArr.filter(contact => contact.city == city);
}

/**
 * Created viewContactByState method to view contact by state
 * @param {*} state - passing state
 * @returns - returns the contact with given state
 */
function viewContactByState(state) {
    return addressBookArr.filter(contact => contact.state == state);
}

/**
 * Created numberOfContactsByCity method to count number of contacts by city
 * @param {*} city - passing city
 * @returns - returns the contact with given city
 */
function numberOfContactsByCity(city) {
    return addressBookArr.filter(contact => contact.city == city);
}

/**
 * Created numberOfContactsByState method count number of contacts by state
 * @param {*} state - passing state
 * @returns - returns the contact with given state
 */
function numberOfContactsByState(state) {
    return addressBookArr.filter(contact => contact.state == state);
}

/**
 * Created sortByType method to sort contacts by type
 * @param {*} arr - passing array
 * @param {*} type - passing type
 */
function sortByType(arr, type) {
    arr.sort(function(a, b) {
        if (a[type] > b[type]) {return 1;}
        else if (a[type] < b[type]  ) {return -1;}
        else return 0;
    })
}

let contact_1 = new Contact("Sreenath", "Emidi", "HanumanNagar", "Adoni", "AndhraPradesh", 
                            "518301", "91-9988776655", "sreenath@gmail.com");
let contact_2 = new Contact("Yashwanth", "Rasale", "Marathalli", "Bengaluru", "Karnataka", 
                            "560063", "91-9988774455", "yashwanth@gmail.com");
let contact_3 = new Contact("Sreejesh", "Emidi", "GandhiNagar", "Mumbai", "Maharastra", 
                            "400004", "91-9988665478", "sreejesh@gmail.com");
let contact_4 = new Contact("Sreepad", "Emidi", "RamNagar", "Mysore", "Karnataka", 
                            "560063", "91-9988665412", "sreepad@gmail.com");

try{
    addressBookArr.push(contact_1);
    addressBookArr.push(contact_2);
    addressBookArr.push(contact_3);
    addressBookArr.push(contact_4);
}
catch(e){
    console.log(e);
}

console.log(addressBookArr);

console.log("--------- Number of contacts before deleting ---------");
console.log("Number of contacts : " + addressBookArr.reduce(numberOfContacts, 0));

console.log("--------- After editing contact ---------");
editContact("Sreenath", "phoneNumber", "91-8866554477");
console.log(addressBookArr);

console.log("--------- After deleting contact ---------");
deleteContact("Yashwanth");
console.log(addressBookArr);

console.log("--------- Number of contacts after deleting ---------");
console.log("Number of contacts : " + addressBookArr.reduce(numberOfContacts, 0));

console.log("--------- Checking duplicate contact ---------");
try{
    addContact(contact_1);
}
catch(e){
    console.log(e);
}

console.log("--------- Searching contact by city ---------");
console.log(searchContactByCity("Adoni"));

console.log("--------- Searching contact by state ---------");
console.log(searchContactByState("AndhraPradesh"));

console.log("--------- View contact by city ---------");
console.log(searchContactByCity("Mysore"));

console.log("--------- View contact by state ---------");
console.log(searchContactByState("Maharastra"));

console.log("--------- Number of contacts by city ---------");
console.log("Number of contacts : " + numberOfContactsByCity("Mysore").length);

console.log("--------- Number of contacts by state ---------");
console.log("Number of contacts : " + numberOfContactsByState("Karnataka").length);

console.log("--------- Sorting contacts by first name ---------");
sortByType(addressBookArr, "firstName");
console.log(addressBookArr);

console.log("--------- Sorting contacts by city ---------");
sortByType(addressBookArr, "city");
console.log(addressBookArr);

console.log("--------- Sorting contacts by state ---------");
sortByType(addressBookArr, "state");
console.log(addressBookArr);