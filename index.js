(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=document.querySelector(".js-search-form"),a=document.querySelector(".js-search-input"),i=document.querySelector(".js-weather-wrapper");u.addEventListener("submit",n=>{n.preventDefault();const o=a.value.trim();o&&fetch(`https://openlibrary.org/search.json?q=${o}&limit=10`).then(s=>s.json()).then(s=>{i.innerHTML="",s.docs.forEach(t=>{const r=`
          <div class="book-card">
            ${t.cover_i?`<img src="https://covers.openlibrary.org/b/id/${t.cover_i}-M.jpg" alt="cover">`:"<p>Немає обкладинки</p>"}
            <h3>${t.title}</h3>
            <p>Автор: ${t.author_name?t.author_name[0]:"Невідомо"}</p>
            <p>Рік: ${t.first_publish_year??"Невідомо"}</p>
          </div>
        `;i.innerHTML+=r})})});
//# sourceMappingURL=index.js.map
