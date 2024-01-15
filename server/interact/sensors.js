Blockly.Blocks['ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ultrasonic Sensor distance is less than")
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



Blockly.JavaScript['ultrasonic'] = async function(block) {
  var number_distance = block.getFieldValue('distance');
  
  var data = {
    length: number_distance
  };

  const response = await fetch('http://127.0.0.1:5000/ultrasonic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data)
  }).then(res => { return (res.json()) });

  var code = window.alert(responce.message);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['line_follower'] = async function(block) {
  var dropdown_side = block.getFieldValue('side');
  var dropdown_colour = block.getFieldValue('colour');
  
  var data = {
    colour: dropdown_colour
  };

  const response = await fetch('http://127.0.0.1:5000/line_follower', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data)
  }).then(res => { return (res.json()) });

  var code = window.alert(response.message);  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
 };
 
