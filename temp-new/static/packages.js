function callIfFunction(value){
  if(typeof value === "function") {
	value();
  }
  return value;
}
module.exports = {
	"bit-docs-tag-demo": callIfFunction( require("bit-docs-tag-demo") )};