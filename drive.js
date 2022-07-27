Blockly.Blocks['drive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Robot will go")
        .appendField(new Blockly.FieldDropdown([["forward","f"], ["reverse","r"]]), "direction")
        .appendField("for")
        .appendField(new Blockly.FieldNumber(0), "steps")
        .appendField("cm");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Robot will turn to the")
        .appendField(new Blockly.FieldDropdown([["right","r"], ["left","l"]]), "direction");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['motors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Right","r"], ["Left","l"]]), "Sides")
        .appendField("Motor will go")
        .appendField(new Blockly.FieldDropdown([["forward","f"], ["reverse","r"]]), "Directions")
        .appendField("for")
        .appendField(new Blockly.FieldNumber(0), "Speed")
        .appendField("cm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.JavaScript['drive'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var number_steps = block.getFieldValue('steps');

  
  if (dropdown_direction==='f') {
  var code = window.alert('Going forward');
}
else if (dropdown_direction==='r') {
  var code = window.alert('Going reverse');
}
  return code + '\n';
};

Blockly.JavaScript['turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  if (dropdown_direction=='r') 
  {
    var code = window.alert('Taking a right turn');
  }
  else if (dropdown_direction=='l') 
  {
    var code = window.alert('Taking a left turn');
  }
  
  return code;
};

Blockly.JavaScript['motors'] = function(block) {
  var dropdown_sides = block.getFieldValue('Sides');
  var dropdown_directions = block.getFieldValue('Directions');
  var number_speed = block.getFieldValue('Speed');
  if (dropdown_sides=='r' && dropdown_directions=='f') 
  {
  var code = window.alert('Taking a right turn - forward');
  }
 else if (dropdown_sides=='l' && dropdown_directions=='f') 
 {
  var code = window.alert('Taking a left turn - forward');
 }
 else if (dropdown_sides=='r' && dropdown_directions=='r') 
 {
  var code = window.alert('Taking a right turn - reverse');
 }
 else if (dropdown_sides=='l' && dropdown_directions=='r') 
 {
  var code = window.alert('Taking a left turn - reverse');
 }

  return code + '\n';
};

