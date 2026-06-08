const fs = require('fs');

let html = fs.readFileSync('old-html/index.html', 'utf8');

// Basic replacements
html = html.replace(/class=/g, 'className=');
html = html.replace(/for=/g, 'htmlFor=');
html = html.replace(/<img([^>]+[^\/])>/g, '<img$1 />');
html = html.replace(/<br([^>]*[^\/])?>/g, '<br$1 />');
html = html.replace(/<input([^>]+[^\/])>/g, '<input$1 />');
html = html.replace(/<hr([^>]+[^\/])>/g, '<hr$1 />');
html = html.replace(/<!--(.*?)-->/g, '{/* $1 */}');
html = html.replace(/style="([^"]+)"/g, (match, p1) => {
  const rules = p1.split(';').filter(r => r.trim() !== '');
  let obj = '{';
  rules.forEach(r => {
    let [key, ...vals] = r.split(':');
    let val = vals.join(':');
    if (!key || !val) return;
    key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    val = val.trim();
    obj += `${key}: '${val}', `;
  });
  obj += '}';
  return `style={{${obj}}}`;
});

fs.writeFileSync('converted.jsx', html);
console.log('Conversion successful!');
