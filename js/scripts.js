$('.fotorama').fotorama({
  width: 900,
  transition: 'dissolve'
});

var t = new Trianglify();
var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);