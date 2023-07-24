Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start the Robot");
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop the robot");
    this.setPreviousStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['start'] = function(block) {
  
 var code = window.alert('Starting the Robot');

 return code + '\n';
};

Blockly.JavaScript['stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = window.alert('Stopping Robot');

  return code + '\n'; 
};