function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function ScrollToEnd(id) {
    document.getElementById(id).scrollIntoView();
}

function copyText(ref) {

    let input = document.getElementById(ref);
    input.focus();
    input.select();
    console.log(input.value);
    copyToClipboard(input.value);
}

function selectText(ref) {
    let input = document.getElementById(ref);
    input.focus();
    input.select();
}
 