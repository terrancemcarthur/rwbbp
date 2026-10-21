const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.png':'image/png','.ico':'image/vnd.microsoft.icon'};
http.createServer((req,res)=>{
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (pathname === '/sitemap.xml') {
    // SITE_URL can override the canonical public origin for other deployments.
    const origin = new URL(process.env.SITE_URL || 'https://rwbbp.com').origin;
    const escapeXml = value => value.replace(/[<>&"']/g, character => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[character]));
    const urls = ['/', '/sitemap.html'].map(route => `<url><loc>${escapeXml(origin + route)}</loc></url>`).join('');
    res.writeHead(200, {'Content-Type':'application/xml; charset=utf-8'});
    res.end(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
    return;
  }
  const file = path.resolve(root, '.' + decodeURIComponent(pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) {res.writeHead(403);res.end();return;}
  fs.readFile(file,(err,data)=>{res.writeHead(err?404:200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(err?'Not found':data);});
}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Site running on port '+(process.env.PORT||3000)));
