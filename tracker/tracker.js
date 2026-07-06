(function(){
    const script = document.currentScript;
    const apiKey = script.dataset.apiKey;

    fetch("http://localhost:3000/api/track", {
        method: "POST",
        credentials: "include", // very important (cookies)
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
            apiKey,
            path: window.location.pathname,
            title: document.title,
            referrer: document.referrer,
        })       
    })
})();