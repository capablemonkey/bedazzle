var panelHTML = '<div class="rt-ce-panel"> <h3>unicodify</h3> <h4>Format</h4> <div> <button class="rt-ce-button btn small" data-ruleset-name="monospace">𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎</button> <button class="rt-ce-button btn small" data-ruleset-name="italic">𝐼𝑡𝑎𝑙𝑖𝑐</button> <button class="rt-ce-button btn small" data-ruleset-name="bold">𝐁𝐨𝐥𝐝</button> <button class="rt-ce-button btn small" data-ruleset-name="bold_italic">𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄</button> <button class="rt-ce-button btn small" data-ruleset-name="strikethrough">S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶</button> <button class="rt-ce-button btn small" data-ruleset-name="sans_serif">𝖲𝖺𝗇𝗌 𝖲𝖾𝗋𝗂𝖿</button> <button class="rt-ce-button btn small" data-ruleset-name="sans_serif_bold">𝗦𝗮𝗻𝘀 𝗦𝗲𝗿𝗶𝗳 𝗕𝗼𝗹𝗱</button> <button class="rt-ce-button btn small" data-ruleset-name="sans_serif_bold_italic">𝙎𝙖𝙣𝙨 𝙎𝙚𝙧𝙞𝙛 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘</button> <button class="rt-ce-button btn small" data-ruleset-name="sans_serif_italic">𝘚𝘢𝘯𝘴 𝘚𝘦𝘳𝘪𝘧 𝘐𝘵𝘢𝘭𝘪𝘤</button> <button class="rt-ce-button btn small" data-ruleset-name="underline">U͟n͟d͟e͟r͟l͟i͟n͟e͟</button> </div><h4>Effects</h4> <div> <button class="rt-ce-button btn small" data-ruleset-name="script">𝒮𝒸𝓇𝒾𝓅𝓉</button> <button class="rt-ce-button btn small" data-ruleset-name="script_bold">𝓢𝓬𝓻𝓲𝓹𝓽 𝓑𝓸𝓵𝓭</button> <button class="rt-ce-button btn small" data-ruleset-name="double_struck">ⅅ𝕠𝕦𝕓𝕝𝕖-𝕊𝕥𝕣𝕦𝕔𝕜</button> <button class="rt-ce-button btn small" data-ruleset-name="fraktur">𝔉𝔯𝔞𝔨𝔱𝔲𝔯</button> <button class="rt-ce-button btn small" data-ruleset-name="fraktur_bold">𝕱𝖗𝖆𝖐𝖙𝖚𝖗 𝕭𝖔𝖑𝖉</button> <button class="rt-ce-button btn small" data-ruleset-name="fullwidth">Ｆｕｌｌｗｉｄｔｈ</button> <button class="rt-ce-button btn small" data-ruleset-name="circled">Ⓒⓘⓡⓒⓛⓔⓓ</button> <button class="rt-ce-button btn small" data-ruleset-name="parenthesized">⒫⒜⒭⒠⒩⒯⒣⒠⒮⒤⒵⒠⒟</button> </div><h4>Unicorns</h4> <div> <button class="rt-ce-button btn small" data-ruleset-name="region_tiles">🇷🇪🇬🇮🇴🇳 🇹🇮🇱🇪 🇸</button> <button class="rt-ce-button btn small" data-ruleset-name="subliminal_messages"> ᷤmͧeꙺsᷝsͥaͫgͥeᷠsͣ ᷝ</button> <button class="rt-ce-button btn small" data-ruleset-name="scratches">S̷c̷r̷a̷t̷c̷h̷e̷s̷</button> <button class="rt-ce-button btn small" data-ruleset-name="heavy_metal">Ḧëäv̈ÿ ̈M̈ëẗäl̈</button> <button class="rt-ce-button btn small" data-ruleset-name="dotted_line">D̤o̤t̤t̤e̤d̤ ̤L̤i̤n̤e̤</button> <button class="rt-ce-button btn small" data-ruleset-name="upside_down">uʍop-ǝpısdn</button> <button class="rt-ce-button btn small" data-ruleset-name="dirt">d͎͓̮̻߯ḭ̰̥͒r̩ͯ͏t̢͔̘̓̐</button> </div></div>';

// stick our panel wherever the "Add Photo" and "Add Location" buttons are:
$('.tweet-box-extras').append($(panelHTML));

/*
 * Twitter's tweet editor immediately deselects any selected text when focus
 * changes.  When the user clicks on our buttons, the focus will shift to our
 * button by the time our event handler tries to replace the selected text.
 * Here, we put an end to this bothersome behavior :).
 */

$('.rt-ce-button').on('mousedown', function(e) { 
  e.stopImmediatePropagation();
  e.preventDefault(); 
});

$('.rt-ce-button').on('click', function(e) { handleButtonClick(e); });

function handleButtonClick(e) {
  e.stopImmediatePropagation();
  e.preventDefault();

  var selectedText = window.getSelection().toString();
  var rulesetName = $(e.target).data('rulesetName');

  // uses unicate.js:
  replaceSelectedText(translateUsingRuleset(selectedText, rulesetName));
}

function replaceSelectedText(replacementText) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(replacementText));
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = replacementText;
    }
}