var Command ={};

var Contact = require('./contact');

Command.getOperation = function(){
  return process.argv[2];
}
Command.getOperationData = function(){
  return process.argv[3];
}

Command.add = function(done){
  var contact = process.argv[3]
  contact = Contact.createContact(contact)
  Contact.saveContact(contact,function(err){
    done(err)
  })
}

module.exports = Command;
