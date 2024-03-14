var flash = 27;
pinMode(flash, OUTPUT);
setInterval(() => {
  digitalToggle(flash);
}, 20000);
//End