const hiragana = {
    'あ': 'a',
    'か': 'ka',
    'が': 'ga',
    'さ': 'sa',
    'ざ': 'za',
    'た': 'ta',
    'だ': 'da',
    'な': 'na',
    'は': 'ha',
    'ば': 'ba',
    'ぱ': 'pa',
    'ま': 'ma',
    'や': 'ya',
    'ら': 'ra',
    'わ': 'wa',
    'い': 'i',
    'き': 'ki',
    'ぎ': 'gi',
    'し': 'shi',
    'じ': 'ji',
    'ち': 'chi',
    'に': 'ni',
    'ひ': 'hi',
    'び': 'bi',
    'ぴ': 'pi',
    'み': 'mi',
    'り': 'ri',
    'う': 'u',
    'く': 'ku',
    'ぐ': 'gu',
    'す': 'su',
    'ず': 'zu',
    'つ': 'tsu',
    'ぬ': 'nu',
    'ふ': 'fu',
    'ぶ': 'bu',
    'ぷ': 'pu',
    'む': 'mu',
    'る': 'ru',
    'ゆ': 'yu',
    'え': 'e',
    'け': 'ke',
    'げ': 'ge',
    'せ': 'se',
    'ぜ': 'ze',
    'て': 'te',
    'で': 'de',
    'ね': 'ne',
    'へ': 'he',
    'べ': 'be',
    'ぺ': 'pe',
    'め': 'me',
    'れ': 're',
    'お': 'o',
    'こ': 'ko',
    'ご': 'go',
    'そ': 'so',
    'ぞ': 'zo',
    'と': 'to',
    'ど': 'do',
    'の': 'no',
    'ほ': 'ho',
    'ぼ': 'bo',
    'ぽ': 'po',
    'も': 'mo',
    'よ': 'yo',
    'ろ': 'ro',
    'を': 'wo',
    'ん': 'n',
    'きゃ': 'kya',
    'きゅ': 'kyu',
    'きょ': 'kyo',
    'しゃ': 'sha',
    'しゅ': 'shu',
    'しょ': 'sho',
    'ちゃ': 'cha',
    'ちゅ': 'chu',
    'ちょ': 'cho',
    'にゃ': 'nya',
    'にゅ': 'nyu',
    'にょ': 'nyo',
    'ひゃ': 'hya',
    'ひゅ': 'hyu',
    'ひょ': 'hyo',
    'みゃ': 'mya',
    'みゅ': 'myu',
    'みょ': 'myo',
    'りゃ': 'rya',
    'りゅ': 'ryu',
    'りょ': 'ryo',
    'ぎゃ': 'gya',
    'ぎゅ': 'gyu',
    'ぎょ': 'gyo',
    'じゃ': 'ja',
    'じゅ': 'ju',
    'じょ': 'jo',
    'びゃ': 'bya',
    'びゅ': 'byu',
    'びょ': 'byo',
    'ぴゃ': 'pya',
    'ぴゅ': 'pyu',
    'ぴょ': 'pyo',
    'ぢ': 'di',
    'づ': 'du',
}
const katakana = {
    'ア': 'a',
    'カ': 'ka',
    'ガ': 'ga',
    'サ': 'sa',
    'ザ': 'za',
    'タ': 'ta',
    'ダ': 'da',
    'ナ': 'na',
    'ハ': 'ha',
    'バ': 'ba',
    'パ': 'pa',
    'マ': 'ma',
    'ヤ': 'ya',
    'ラ': 'ra',
    'ワ': 'wa',
    'イ': 'i',
    'キ': 'ki',
    'ギ': 'gi',
    'シ': 'shi',
    'ジ': 'ji',
    'チ': 'chi',
    'ニ': 'ni',
    'ヒ': 'hi',
    'ビ': 'bi',
    'ピ': 'pi',
    'ミ': 'mi',
    'リ': 'ri',
    'ウ': 'u',
    'ク': 'ku',
    'グ': 'gu',
    'ス': 'su',
    'ズ': 'zu',
    'ツ': 'tsu',
    'ヌ': 'nu',
    'フ': 'fu',
    'ブ': 'bu',
    'プ': 'pu',
    'ム': 'mu',
    'ル': 'ru',
    'ユ': 'yu',
    'エ': 'e',
    'ケ': 'ke',
    'ゲ': 'ge',
    'セ': 'se',
    'ゼ': 'ze',
    'テ': 'te',
    'デ': 'de',
    'ネ': 'ne',
    'ヘ': 'he',
    'ベ': 'be',
    'ペ': 'pe',
    'メ': 'me',
    'レ': 're',
    'オ': 'o',
    'コ': 'ko',
    'ゴ': 'go',
    'ソ': 'so',
    'ゾ': 'zo',
    'ト': 'to',
    'ド': 'do',
    'ノ': 'no',
    'ホ': 'ho',
    'ボ': 'bo',
    'ポ': 'po',
    'モ': 'mo',
    'ヨ': 'yo',
    'ロ': 'ro',
    'ヲ': 'wo',
    'ン': 'n',
    'キャ': 'kya',
    'キュ': 'kyu',
    'キョ': 'kyo',
    'シャ': 'sha',
    'シュ': 'shu',
    'ショ': 'sho',
    'チャ': 'cha',
    'チュ': 'chu',
    'チョ': 'cho',
    'ニャ': 'nya',
    'ニュ': 'nyu',
    'ニョ': 'nyo',
    'ヒャ': 'hya',
    'ヒュ': 'hyu',
    'ヒョ': 'hyo',
    'ミャ': 'mya',
    'ミュ': 'myu',
    'ミョ': 'myo',
    'リャ': 'rya',
    'リュ': 'ryu',
    'リョ': 'ryo',
    'ギャ': 'gya',
    'ギュ': 'gyu',
    'ギョ': 'gyo',
    'ジャ': 'ja',
    'ジュ': 'ju',
    'ジョ': 'jo',
    'ビャ': 'bya',
    'ビュ': 'byu',
    'ビョ': 'byo',
    'ピャ': 'pya',
    'ピュ': 'pyu',
    'ピョ': 'pyo',
    'ヂ': 'di',
    'ヅ': 'du',
}

let pointer = hiragana;

function toHir() {
    pointer = hiragana;
    clear();
}

function toKat() {
    pointer = katakana;
    clear();
}

function toBoth() {
    pointer = Object.assign({}, hiragana, katakana);
    clear();
}

function clear() {
    document.getElementById("list").innerHTML = '';
    cloneBlocks();
}

function cloneBlocks() {
    for (let i = 0; i < 10; i++) {
        document.getElementById("list").appendChild(clone(i, pointer));
    }
}

function clone(i, dict) {
    const clone = document.createElement("div");
    clone.className = "question-alphabet";
    clone.style.setProperty("--left-offset", i + "");
    clone.style.left = 120 * i + 'px';
    clone.style.opacity = 1 - 0.05 * i + '';
    if (i === 0) {
        clone.id = "current";
    } else {
        clone.id = "";
    }

    const len = Object.values(dict).length;
    clone.innerHTML = "<b>" + Object.keys(dict).at(Math.random() * len) + "</b>";
    return clone;
}

let hintCount = 0;

function submitAnswer(ele) {
    if (event.key === 'Enter') {
        if (document.getElementById('valInput').value === pointer[document.getElementById('current').innerText]) {
            if (document.getElementById('current').style.backgroundColor !== 'darkred') {
                document.getElementById('current').style.backgroundColor = "palegreen";
            }
            document.getElementById('valInput').classList.remove('is-invalid');
            document.getElementById('hint').innerText = "";
            hintCount = 0;
            slide()
        } else {
            document.getElementById('current').style.backgroundColor = "darkred";
            document.getElementById('current').classList.add('error');
            document.getElementById('valInput').classList.add('is-invalid');

            const word = pointer[document.getElementById('current').innerText].toString();
            if (hintCount < 2) {
                document.getElementById('hint').innerText = "提示: 尾音為" + word.charAt(word.length - 1);
            } else {
                document.getElementById('hint').innerText = "你已經連續答錯三次! 答案為 " + word;
            }
            hintCount++;
            setTimeout(function () {
                document.getElementById('current').classList.remove('error');
            }, 300);

            ele.preventDefault();
        }
        
        document.getElementById('valInput').value = "";
    }
}

function slide() {
    const cusid_ele = document.getElementsByClassName('question-alphabet');
    document.getElementById("list").appendChild(clone(10, pointer));
    for (let i = 0; i < cusid_ele.length; ++i) {
        try {
            const item = cusid_ele[i];
            const offset = parseInt(item.style.getPropertyValue("--left-offset")) - 1;
            if (offset < -9) {
                item.parentElement.removeChild(item);
                continue;
            }
            if (offset === 0) {
                item.id = "current";
            } else {
                item.id = "";
            }

            item.style.left = 120 * offset + 'px';
            item.style.opacity = 1 - 0.05 * Math.abs(offset) + '';
            item.style.setProperty("--left-offset", offset + "");
        } catch (e) {
            alert(e)
        }
    }
}
