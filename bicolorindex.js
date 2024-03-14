var red = 26; //GP26
var green = 27; //GP27
pinMode(red, OUTPUT);
pinMode(green, OUTPUT);
setInterval(() => {
  digitalWrite(red,HIGH);
  digitalWrite(green,LOW);
}, 1000);
setInterval(() => {
  digitalWrite(red,LOW);
  digitalWrite(green,HIGH);
}, 2000);
//End