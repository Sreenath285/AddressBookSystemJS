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

let contact_1 = new Contact("Sreenath", "Emidi", "HanumanNagar", "Adoni", "AndhraPradesh", 
                            "518301", "91-9988776655", "sreenath@gmail.com");
let contact_2 = new Contact("Yashwanth", "Rasale", "Marathalli", "Bengaluru", "Karnataka", 
                            "560063", "91-9988774455", "yashwanth@gmail.com");

try{
    addressBookArr.push(contact_1);
    addressBookArr.push(contact_2);
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

console.log("--------- Adding duplicate contact ---------");
try{
    addContact(contact_1);
}
catch(e){
    console.log(e);
}
