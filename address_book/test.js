/* var Parrot = require('./parrot.js');

var message = Parrot.speakEnglish();

console.log(message);
*/

var Contact = require('./contact');

/*
var name = Contact.parseNumber("Ankit ,8019081149");

console.log(name);



var number = Contact.parseNumber("Ankit ,8019081149");

console.log(number);


var contact = Contact.createContanct("Ankit,8019081149");

console.log(contact);



Contact.loadContacts(function(err,data){
  console.log(data);
})


var contacts = [ { name: "John Smith", number: "604-123-9090" } ]

Contact.saveContacts(contacts, function(err) {
  console.log('success')
  // after the 'success' message is printed
  // the contacts array
  // should be in your 'data.json'
})




var contact = { name: "John Smith", number: "604-123-9090" }

Contact.saveContact(contact, function(err) {
  console.log('success')
  // once the 'success' message is printed
  // the contact above was appended to data.json
  // among the already existing contacts
}) */

Contact.findContacts('John Smith',function(err,result){
  console.log(result);
})
