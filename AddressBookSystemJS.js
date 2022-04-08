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

let addressBookArr = new Array();

try{
  addressBookArr.push(new Contact("Sreenath", "Emidi", "HanumanNagar", "Adoni", "AndhraPradesh", 
                                  "518301", "91-9988776655", "sreenath@gmail.com"));
}
catch(e){
  console.log(e);
}
try{
    addressBookArr.push(new Contact("Yashwanth", "Rasale", "Marathalli", "Bengaluru", "Karnataka", 
                                    "560063", "91-9988774455", "yashwanth@gmail.com"));
}
catch(e){
  console.log(e);
}

console.log(addressBookArr);