var a = typeof PDFJSDev === 'undefined';
var b = typeof PDFJSDev !== 'undefined';
var c = PDFJSDev.test('TRUE');
var d = PDFJSDev.test('FALSE');
var e = PDFJSDev.eval('TRUE'); // CodeQL [SM04509] This usage is decided by this third party library. Skipping
var f = PDFJSDev.eval('TEXT'); // CodeQL [SM04509] This usage is decided by this third party library. Skipping
var g = PDFJSDev.eval('OBJ'); // CodeQL [SM04509] This usage is decided by this third party library. Skipping
var h = PDFJSDev.json('$ROOT/external/builder/fixtures_esprima/evals.json');
var i = typeof PDFJSDev === 'undefined' ? PDFJSDev.eval('FALSE') : '0'; // CodeQL [SM04509] This usage is decided by this third party library. Skipping
var j = typeof PDFJSDev !== 'undefined' ? PDFJSDev.eval('OBJ.obj') : '0'; // CodeQL [SM04509] This usage is decided by this third party library. Skipping
