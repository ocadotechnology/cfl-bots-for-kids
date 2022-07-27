Blockly.Blocks['ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ultrasonic Sensor ")
        .appendField(new Blockly.FieldNumber(0), "number")
        .appendField("distance is less than")
        .appendField(new Blockly.FieldNumber(0), "distance")
        .appendField("cm");
    this.setOutput(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['line_follower'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line Follower sensor on the ")
        .appendField(new Blockly.FieldDropdown([["Right","right"], ["Left","left"]]), "side")
        .appendField("senses")
        .appendField(new Blockly.FieldDropdown([["Black","black"], ["White","white"]]), "colour")
        .appendField("colour");
    this.setOutput(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['ultrasonic'] = function(block) {
  var number_number = block.getFieldValue('number');
  var number_distance = block.getFieldValue('distance');
  
  if (number_number=='1' && number_distance=='5')
  {
    var code = window.alert('Barrier Detected!');
  }
  else {
    var code = window.alert('Everything is okay!');
  }
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['line_follower'] = function(block) {
  var dropdown_side = block.getFieldValue('side');
  var dropdown_colour = block.getFieldValue('colour');
  
  if (dropdown_side=='right' && dropdown_colour=='white') 
  {
    var code = window.alert('Robot going left to follow the line');
  }
  else if (dropdown_side=='left' && dropdown_colour=='white') 
  {
    var code = window.alert('Robot going right to follow the line');
  }
  else 
  {
    var code = window.alert('Robot following line perfectly!');
  }
  
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
 }; 