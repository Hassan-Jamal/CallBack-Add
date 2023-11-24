function addCallback(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}
function performAddition(a, b, additionCallback) {
  additionCallback(a, b);
}
performAddition(5, 3, addCallback);

module.exports=addCallback;
