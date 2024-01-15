Blockly.Blocks['drive'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Robot will go")
      .appendField(new Blockly.FieldDropdown([["forward", "f"], ["reverse", "r"]]), "direction")
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
  init: function () {
    this.appendDummyInput()
      .appendField("Robot will turn to the")
      .appendField(new Blockly.FieldDropdown([["right", "r"], ["left", "l"]]), "direction");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['motors'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["Right", "r"], ["Left", "l"]]), "Sides")
      .appendField("Motor will go")
      .appendField(new Blockly.FieldDropdown([["forward", "f"], ["reverse", "r"]]), "Directions")
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



Blockly.JavaScript['drive'] = async function (block) {
  var dropdown_direction = block.getFieldValue('direction');
  var number_steps = block.getFieldValue('steps');
  
  // creating data object
  var data = {
    direction: dropdown_direction,
    distance_cm: number_steps
  };

  // sending request
  const response = await fetch('http://127.0.0.1:5000/move', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data)              // converting to JSON string
  }).then(res => { return (res.json()) });  // returning promise
  
  var code = window.alert(response.message);
  return code + '\n';
};


Blockly.JavaScript['turn'] = async function (block) {
  var dropdown_direction = block.getFieldValue('direction');
  
  var data = {
    direction: dropdown_direction
  };

  const response = await fetch('http://127.0.0.1:5000/turn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data)
  }).then(res => { return (res.json()) });
   
  var code = window.alert(response.message);
  return code + '\n';
};


Blockly.JavaScript['motors'] = async function (block) {
  var dropdown_sides = block.getFieldValue('Sides');
  var dropdown_directions = block.getFieldValue('Directions');
  var number_speed = block.getFieldValue('Speed');
  
  var data = {
    side: dropdown_sides,
    direction: dropdown_directions,
    distance_cm: number_speed
  };

  const response = await fetch('http://127.0.0.1:5000/motor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data)
  }).then(res => { return (res.json()) });

  var code = window.alert(response.message);
  return code + '\n';
};
