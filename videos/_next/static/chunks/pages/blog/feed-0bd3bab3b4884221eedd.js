_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/Ooh":function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return a}));var o=e("jTSF");var r=function(t){return"\n<entry>\n  <title>".concat(t.frontmatter.title,'</title>\n  <link href="https://luckypines.com').concat(t.frontmatter.slug,'"/>\n  <id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>\n  <updated>').concat(Object(o.b)(t.frontmatter.epoch),"</updated>\n  <summary>").concat(t.frontmatter.excerpt?t.frontmatter.excerpt:t.markdownBody.length>200?"".concat(t.markdownBody.substring(0,200),"..."):t.markdownBody,"</summary>\n</entry>\n")},a=!0;n.default=function(t){return'<?xml version="1.0" encoding="utf-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">\n  <title>Blog by Fumiaki Yoshimatsu</title>\n  <link href="https://luckypines.com/blog"/>\n  <updated>'.concat(Object(o.b)(t.posts[0].frontmatter.epoch),"</updated>\n  <author>\n    <name>Fumiaki Yoshimatsu</name>\n  </author>\n  <id>urn:uuid:04aa0189-25c9-422b-b6a0-af7b9eb962df</id>\n  ").concat(t.posts.map(r).join(""),"\n</feed>\n")}},b2N6:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/feed",function(){return e("/Ooh")}])},jTSF:function(t,n,e){"use strict";function o(t){var n=new Date;return n.setTime(1e3*parseInt(t)),n.toLocaleString()}function r(t){var n=new Date;return n.setTime(1e3*parseInt(t)),n.toISOString().replace(/\.000Z$/,"Z")}e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}))}},[["b2N6",0]]]);