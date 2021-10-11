module.exports = function (RED) {
  function ConvertStringNode(config) {
    RED.nodes.createNode(this, config);
    this.input_number = config.input_number;
    this.type_number = config.type_number;
    RED.log.info(this.input_number);
    var node = this;
    node.on("input", function (msg) {
      var input_number = Number(node.input_number) || Number(msg.payload);
      var type_number = Number(node.type_number);
      msg.payload = input_number.toString(type_number);
      node.send(msg);
    });
  }
  RED.nodes.registerType("binary-number", ConvertStringNode);
};
