// All credits go to shebang.brandonmintern.com/foolproof-html-escaping-in-javascript
// Use the browser's built-in functionality to quickly and safely escape
// the string
export function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// UNSAFE with unsafe strings; only use on previously-escaped ones!
export function unescapeHtml(escapedStr) {
  const div = document.createElement('div');
  div.innerHTML = escapedStr;
  const child = div.childNodes[0];
  return child ? child.nodeValue : '';
}