formats = {
  strikethrough: combiner('\u0336'),
  underline: combiner('\u035f'),
  scratches: combiner('\u0337'),
  heavy_metal: combiner('\u0308'),
  dotted_line: combiner('\u0324'),
  wibbles: combiner('\u0359'),

  subliminal_messages: function(text) {
    var lines = text.split("\n");
    var output = [];
    for (var i=0; i<Math.ceil(lines.length/2); i++) {
      var a = lines[i*2];
      var b = lines[i*2+1] || '';
      output.push(blend(a, b));
    }
    return output.join('\n')
  },
  
  dirt: function(text) {
    return text.split('').map(function(c) { return c + random_dirt()}).join('');
  },
  
  upside_down: function(text) {
    return text.split('').map(function(c) { return upside_downs[c] || c }).reverse().join('');
  },
  
  fullwidth: [
    //[' ', chr(0x3000)],
    [/[^ ]/g, 0xff00-0x20]
  ],

  italicize: [
    [/[A-Z]/g, 0x1d434-0x41],
    [/[a-z]/g, 0x1d44e-0x61]
  ],
  
  circled: [
    [/[A-Z]/g, 0x24b6-0x41],
    [/[a-z]/g, 0x24d0-0x61],
    [/[1-9]/g, 0x2460-0x31],
    [/0/g, 0x24ea-0x30]
  ],

  parenthesized: [
    [/[A-Z]/g, 0x249c-0x41],
    [/[a-z]/g, 0x249c-0x61],
    [/[1-9]/g, 0x2474-0x31],
  ],


  freeze_spaces: [
    [/\t/g, "    "],
    [/ /g, chr(0x3000)]
  ],

  // bold: [0x1d400, 0x1d7ce],
  bold: [
    [/[A-Z]/g, 0x1d400-0x41],
    [/[a-z]/g, 0x1d41a-0x61],
    [/[1-9]/g, 0x1d7ed-0x31],
    [/0/g, 0x1d7ed-0x31]
  ],

  //italic: 0x1d434,
  italic: [
    ['h', 0x210E],
    [/[A-Z]/g, 0x1d434-0x41],
    [/[a-z]/g, 0x1d434+26-0x61]
  ],
  
  //bold_italic: [0x1d468, 0x1d7ce],
  bold_italic: [
    [/[A-Z]/g, 0x1d468-0x41],
    [/[a-z]/g, 0x1d482-0x61],
    [/[1-9]/g, 0x1d7ed-0x31],
    [/0/g, 0x1d7ed-0x31]
  ],
  
  //sans_serif: [0x1d5a0, 0x1d7e2],
  sans_serif: [
    [/[A-Z]/g, 0x1d5a0-0x41],
    [/[a-z]/g, 0x1d5ba-0x61],
    [/[1-9]/g, 0x1d7e3-0x31],
    [/0/g, 0x1d7e3-0x31],
  ],
    
  //sans_serif_bold: [0x1d5d4, 0x1d7ec],
  sans_serif_bold: [
    [/[A-Z]/g, 0x1d5d4-0x41],
    [/[a-z]/g, 0x1d5ee-0x61],
    [/[1-9]/g, 0x1d7ed-0x31],
    [/0/g, 0x1d7ed-0x31],
  ],
  
  //sans_serif_italic: 0x1d608,
  sans_serif_italic: [
    [/[A-Z]/g, 0x1d608-0x41],
    [/[a-z]/g, 0x1d622-0x61],
    [/[1-9]/g, 0x1d7e3-0x31],
    [/0/g, 0x1d7e3-0x31],
  ],
  
  //sans_serif_bold_italic: [0x1d63c, 0x1d7ec],
  sans_serif_bold_italic: [
    [/[A-Z]/g, 0x1d63c-0x41],
    [/[a-z]/g, 0x1d656-0x61],
    [/[1-9]/g, 0x1d7ed-0x31],
    [/0/g, 0x1d7ed-0x31],
  ],
  
  monospace: [0x1d670, 0x1d7f7],
  
  //script: 0x1d49c,
  script: [
    ['B', 0x212c],
    ['E', 0x2130],
    ['F', 0x2131],
    ['H', 0x210b],
    ['I', 0x2110],
    ['L', 0x2112],
    ['M', 0x2133],
    ['R', 0x211b],
    ['e', 0x212f],
    ['g', 0x210a],
    ['o', 0x2134],
    [/[A-Z]/g, 0x1d49c-0x41],
    [/[a-z]/g, 0x1d49c+26-0x61]
  ],
  script_bold: 0x1d4d0,
  //fraktur: 0x1d504,
  fraktur: [
    ['C', 0x212d],
    ['H', 0x210c],
    ['I', 0x2111],
    ['R', 0x211c],
    ['Z', 0x2128],
    [/[A-Z]/g, 0x1d504-0x41],
    [/[a-z]/g, 0x1d504+26-0x61]
  ],
  fraktur_bold: 0x1d56c,
  //double_struck: 0x1d538,
  double_struck: [
    ['C', 0x2102],
    ['D', 0x2145],
    ['H', 0x210D],
    ['N', 0x2115],
    ['P', 0x2119],
    ['Q', 0x211A],
    ['R', 0x211D],
    ['Z', 0x2124],
    [/[A-Z]/g, 0x1d538-0x41],
    [/[a-z]/g, 0x1d538+26-0x61]
  ],
  
  ſubſtitute_ſes: function(text) {
    return text.replace(/s(?=[a-z])/g, 'ſ');
  },
  
  invisibly_different: [
    ['.', 0x2024],
    ['/', 0x2215],
    ['#', 0x266F],
    ['|', 0x00A6],
    [':', 0xA789],
  ],
  
  region_tiles: function(text) {
    var sub = [
      //symbols
      ['!!','\u203c'],  ['!?','\u2049'],  ['?','\u2753'],  ['!','\u2757'],
      //misc letter groups
      ['ab','\uD83C\uDD8E'],  ['wc','\uD83C\uDD8F'],  ['dj','\uD83C\uDD90'],  ['cl','\uD83C\uDD91'],
      ['cool','\uD83C\uDD92'],  ['free','\uD83C\uDD93'],  ['new','\uD83C\uDD95'],  ['ng','\uD83C\uDD96'],
      ['ok','\uD83C\uDD97'],  ['sos','\uD83C\uDD98'],  ['up','\uD83C\uDD99'],  ['vs','\uD83C\uDD9A'],
      ['wc','\uD83D\uDEBE'],  ['TM','\u2122'],
      ['back','\uD83D\uDD19'],  ['end','\uD83D\uDD1A'],  ['soon','\uD83D\uDD1C'],
      ['on','\uD83D\uDD1B'],  ['top','\uD83D\uDD1D'],
      //prevent flags, needs editing if they add more!
      ['CN','C\u200BN'],  ['DE','D\u200BE'],  ['ES','E\u200BS'],  ['FR','F\u200BR'],
      ['GB','G\u200BB'],  ['IT','I\u200BT'],  ['JP','J\u200BP'],  ['KR','K\u200BR'],
      ['RU','R\u200BU'],  ['US','U\u200BS'],
      //letters
      ['A','\uD83C\uDDE6'],  ['B','\uD83C\uDDE7'],  ['C','\uD83C\uDDE8'],  ['D','\uD83C\uDD94'],
      ['E','\uD83C\uDDEA'],  ['F','\uD83C\uDDEB'],  ['G','\uD83C\uDDEC'],  ['H','\uD83C\uDDED'],
      ['I','\uD83C\uDDEE'],  ['J','\uD83C\uDDEF'],  ['K','\uD83C\uDDF0'],  ['L','\uD83C\uDDF1'],
      ['M','\uD83C\uDDF2'],  ['N','\uD83C\uDDF3'],  ['O','\uD83C\uDDF4'],  ['P','\uD83C\uDDF5'],
      ['Q','\uD83C\uDDF6'],  ['R','\uD83C\uDDF7'],  ['S','\uD83C\uDDF8'],  ['T','\uD83C\uDDF9'],
      ['U','\uD83C\uDDFA'],  ['V','\uD83C\uDDFB'],  ['W','\uD83C\uDDFC'],  ['X','\uD83C\uDDFD'],
      ['Y','\uD83C\uDDFE'],  ['Z','\uD83C\uDDFF']
    ];

    for(var i=0;i<sub.length;i++) {
      var restr = sub[i][0].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      var re = new RegExp(restr, 'ig');
      text = text.replace(re, sub[i][1]);
    }
    return text;
  }
}

// table from http://www.fileformat.info/convert/text/upside-down-map.htm
var upside_downs = {
  '3': "Ɛ",
  '4': "ᔭ",
  '6': "9",
  '7': "Ɫ",
  '!': "¡",
  '"': "„",
  '&': "⅋",
  "'": ",",
  '(': ")",
  '.': "˙",
  ';': "؛",
  '<': ">",
  '?': "¿",
  'A': "∀",
  'B': "𐐒",
  'C': "Ↄ",
  'D': "◖",
  'E': "Ǝ",
  'F': "Ⅎ",
  'G': "⅁",
  'J': "ſ",
  'K': "⋊",
  'L': "⅂",
  'M': "W",
  'N': "ᴎ",
  'P': "Ԁ",
  'Q': "Ό",
  'R': "ᴚ",
  'T': "⊥",
  'U': "∩",
  'V': "ᴧ",
  'Y': "⅄",
  '[': "]",
  '_': "‾",
  'a': "ɐ",
  'b': "q",
  'c': "ɔ",
  'd': "p",
  'e': "ǝ",
  'f': "ɟ",
  'g': "ƃ",
  'h': "ɥ",
  'i': "ı",
  'j': "ɾ",
  'k': "ʞ",
  'l': "l",
  'm': "ɯ",
  'n': "u",
  'p': "d",
  'r': "ɹ",
  't': "ʇ",
  'u': "n",
  'v': "ʌ",
  'w': "ʍ",
  'y': "ʎ",
  '{': "}",
  '‿': "⁀",
  '⁅': "⁆",
  '∴': "∵",
}

combining_aboves = {
  'a': '\u0363',
  'b': '\ua67a', // err
  'c': '\u0368',
  'd': '\u0369',
  'e': '\u0364',
  'f': '\u1de5', // no...
  'g': '\u1dda',
  'h': '\u036a',
  'i': '\u0365',
  'j': '\u033e', // not even close
  'k': '\u1ddc',
  'l': '\u1ddd',
  'm': '\u036b',
  'n': '\u1de0',
  'o': '\u0366',
  'p': '\u1dec',
  'q': '\u20da', // not really
  'r': '\u036c',
  's': '\u1de4',
  't': '\u036d',
  'u': '\u0367',
  'v': '\u036e',
  'w': '\u07ec', // no way
  'x': '\u036f',
  'y': '\u035b', // not even close
  'z': '\u1de6',
}

combining_scratches = ['\u0338','\u20E5', '\u20eb', '\u0337']
combining_everything = ['\u0300','\u0301','\u0302','\u0303','\u0304','\u0305','\u0306','\u0307','\u0308','\u0309','\u030A','\u030B','\u030C','\u030D','\u030E','\u030F','\u0310','\u0311','\u0312','\u0313','\u0314','\u0315','\u0316','\u0317','\u0318','\u0319','\u031A','\u031B','\u031C','\u031D','\u031E','\u031F','\u0320','\u0321','\u0322','\u0323','\u0324','\u0325','\u0326','\u0327','\u0328','\u0329','\u032A','\u032B','\u032C','\u032D','\u032E','\u032F','\u0330','\u0331','\u0332','\u0333','\u0334','\u0335','\u0336','\u0337','\u0338','\u0339','\u033A','\u033B','\u033C','\u033D','\u033E','\u033F','\u0340','\u0341','\u0342','\u0343','\u0344','\u0345','\u0346','\u0347','\u0348','\u0349','\u034A','\u034B','\u034C','\u034D','\u034E','\u034F','\u0350','\u0351','\u0352','\u0353','\u0354','\u0355','\u0356','\u0357','\u0358','\u0359','\u035A','\u035B','\u035C','\u035D','\u035E','\u035F','\u0360','\u0361','\u0362','\u0363','\u0364','\u0365','\u0366','\u0367','\u0368','\u0369','\u036A','\u036B','\u036C','\u036D','\u036E','\u036F','\u0483','\u0484','\u0485','\u0486','\u0487','\u0488','\u0489','\u0653','\u07EB','\u07EC','\u07ED','\u07EE','\u07EF','\u07F0','\u07F1','\u07F2','\u07F3'] //,'\u101FD','\u1100','\u135D','\u135E','\u135F','\u1A7F','\u1B6B','\u1B6C','\u1B6D','\u1B6E','\u1B6F','\u1B70','\u1B71','\u1B72','\u1B73','\u1D165','\u1D166','\u1D167','\u1D168','\u1D169','\u1D16D','\u1D16E','\u1D16F','\u1D170','\u1D171','\u1D172','\u1D17B','\u1D17C','\u1D17D','\u1D17E','\u1D17F','\u1D180','\u1D181','\u1D182','\u1D185','\u1D186','\u1D187','\u1D188','\u1D189','\u1D18A','\u1D18B','\u1D1AA','\u1D1AB','\u1D1AC','\u1D1AD','\u1D242','\u1D243','\u1D244','\u1DC0','\u1DC1','\u1DC2','\u1DC3','\u1DC4','\u1DC5','\u1DC6','\u1DC7','\u1DC8','\u1DC9','\u1DCA','\u1DCB','\u1DCC','\u1DCD','\u1DCE','\u1DCF','\u1DD0','\u1DD1','\u1DD2','\u1DD3','\u1DD4','\u1DD5','\u1DD6','\u1DD7','\u1DD8','\u1DD9','\u1DDA','\u1DDB','\u1DDC','\u1DDD','\u1DDE','\u1DDF','\u1DE0','\u1DE1','\u1DE2','\u1DE3','\u1DE4','\u1DE5','\u1DE6','\u1DFC','\u1DFD','\u1DFE','\u1DFF','\u20D0','\u20D1','\u20D2','\u20D3','\u20D4','\u20D5','\u20D6','\u20D7','\u20D8','\u20D9','\u20DA','\u20DB','\u20DC','\u20DD','\u20DE','\u20DF','\u20E0','\u20E1','\u20E2','\u20E3','\u20E4','\u20E5','\u20E6','\u20E7','\u20E8','\u20E9','\u20EA','\u20EB','\u20EC','\u20ED','\u20EE','\u20EF','\u20F0','\u2CEF','\u2CF0','\u2CF1','\u2DE0','\u2DE1','\u2DE2','\u2DE3','\u2DE4','\u2DE5','\u2DE6','\u2DE7','\u2DE8','\u2DE9','\u2DEA','\u2DEB','\u2DEC','\u2DED','\u2DEE','\u2DEF','\u2DF0','\u2DF1','\u2DF2','\u2DF3','\u2DF4','\u2DF5','\u2DF6','\u2DF7','\u2DF8','\u2DF9','\u2DFA','\u2DFB','\u2DFC','\u2DFD','\u2DFE','\u2DFF','\u3099','\u309A','\uA66F','\uA670','\uA671','\uA672','\uA674','\uA675','\uA676','\uA677','\uA678','\uA679','\uA67A','\uA67B','\uA67C','\uA67D','\uA69F','\uA6F0','\uA6F1','\uA8E0','\uA8E1','\uA8E2','\uA8E3','\uA8E4','\uA8E5','\uA8E6','\uA8E7','\uA8E8','\uA8E9','\uA8EA','\uA8EB','\uA8EC','\uA8ED','\uA8EE','\uA8EF','\uA8F0','\uA8F1','\uFE20','\uFE21','\uFE22','\uFE23','\uFE24','\uFE25','\uFE26']

function blend(a, b) {
  var len = a.length > b.length ? a.length : b.length;
  
  out = '';
  for (var i=0; i < len; i++) {
    upper = a[i];
    lower = b[i] || ' ';
    out += lower + (combining_aboves[upper] || '');
  }
  return out;
}

function random_dirt() {
  var count = Math.random()*4+1;
  var out = [];
  for (var i=0; i < count; i++) {
    out.push(rand_from(combining_everything));
  }
  return out.join('');
}

function rand_from(array) {
  return array[Math.floor(Math.random()*array.length)];
}

function pick() {
  button = $(this)
  window.ruleset_name = button.data('ruleset-name')
  $('div.box button').removeClass('selected')
  button.addClass('selected')
  update()
}

function update() {
  if (!window.ruleset_name) return
  $('#out-text').val(translate($('#in-text').val()))
}

function translateUsingRuleset(text, ruleset_name) {
  var ruleset = formats[ruleset_name]
  if (typeof(ruleset) == 'function') {
    text = ruleset(text)
  } else if (typeof(ruleset) == 'number') {
    text = mathFormat(ruleset, 0x31, text) // 0x31 = '1'
  } else if (typeof(ruleset[0]) == 'number') {
    text = mathFormat(ruleset[0], ruleset[1], text)
  } else {
    text = format(ruleset, text)
  }
  return text;
}

function translate(text) {
  ruleset = formats[window.ruleset_name]
  if (typeof(ruleset) == 'function') {
    text = ruleset(text)
  } else if (typeof(ruleset) == 'number') {
    text = mathFormat(ruleset, 0x31, text) // 0x31 = '1'
  } else if (typeof(ruleset[0]) == 'number') {
    text = mathFormat(ruleset[0], ruleset[1], text)
  } else {
    text = format(ruleset, text)
  }
  return text
}

function format(rules, text) {
  rules.forEach(function(x) {
    if (typeof(x[0]) == 'string' && typeof(x[1]) == 'number')
      text = text.replace(x[0], chr(x[1]), 'g')
    if (typeof(x[1]) == 'number')
      text = text.replace(x[0], function(c) { return shiftchar(c, x[1]) }, 'g')
    else
      text = text.replace(x[0], x[1], 'g')
  })

  return text
}

function mathFormat(offset, digitOffset, text) {
  return format([
      [/[A-Z]/g, offset-0x41],
      [/[a-z]/g, offset+26-0x61],
      [/[1-9]/g, digitOffset-0x31]
    ], text)
}

function combiner(codepoint) { return function(text) { return combine(codepoint, text) } }
function combine(codepoint, text) { return text.split('').map(function(c) { return c == ' ' ? c : c + codepoint }).join(''); }
function shiftchar(c, i) { return chr(asc(c) + i) }
function asc(str) { return fixedCharCodeAt(str, 0) }
function chr(x) { return fixedFromCharCode(x) }

function fixedCharCodeAt (str, idx) {
    // ex. fixedCharCodeAt ('\uD800\uDC00', 0); // 65536
    // ex. fixedCharCodeAt ('\uD800\uDC00', 1); // 65536
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;
    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        hi = code;
        low = str.charCodeAt(idx+1);
        if (isNaN(low)) {
            throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        // We return false to allow loops to skip this iteration since should have already handled high surrogate above in the previous iteration
        return false;
        /*hi = str.charCodeAt(idx-1);
        low = code;
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/
    }
    return code;
}

function fixedFromCharCode (codePt) {  
    if (codePt > 0xFFFF) {  
        codePt -= 0x10000;  
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));  
    }  
    else {  
        return String.fromCharCode(codePt);  
    }  
}



//}