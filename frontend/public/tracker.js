(function(){
    const script = document.currentScript;
    const apiKey = script.dataset.apiKey;
    const endpoint = script.dataset.endpoint || "https://trackflow-vaps.onrender.com";

    function trackPage(){
    fetch(`${endpoint}/api/track`, {
        method: "POST",
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
    }
    trackPage();

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args){
        originalPushState.apply(history, args);
        trackPage();
    }

    history.replaceState = function(...args){
        originalReplaceState.apply(history, args);
        trackPage();
    }        
    window.addEventListener("popstate", () => {
        trackPage();
    });
})();