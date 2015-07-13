var Command ={};

Command.getOperation = function(){
  return process.argv[2];
}
Command.getOperationData = function(){
  return process.argv[3];
}

Command.add = function(err){
  if (err) {return err}
}
module.exports = Command;
