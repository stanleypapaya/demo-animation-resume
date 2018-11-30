import "./styles.css";

let result = `
body{
  background: red;
  font-size: 20px;
  font-weight: bold;
}
`;

let n = 0;
var id = setInterval(() => {
  code.innerHTML = result.substring(0, n);
  styleTag.innerHTML = result.substring(0, n);
  n += 1;
  if (n >= result.length) {
    window.clearInterval(id);
  }
}, 100);
