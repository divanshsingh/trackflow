(function(){
    const script = document.currentScript;
    const apiKey = script.dataset.apiKey;
    const endpoint = script.dataset.endpoint || "https://trackflow-vaps.onrender.com";

    async function trackPage(){
        let visitorId = localStorage.getItem("trackflow_visitor_id");
        let sessionId = sessionStorage.getItem("trackflow_session_id");
        const res = await fetch(`${endpoint}/api/track`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                apiKey,
                visitorId,
                sessionId,
                path: window.location.pathname,
                title: document.title,
                referrer: document.referrer,
            })       
        })
        const data = await res.json();
        if (data.success) {
            localStorage.setItem(
                    "trackflow_visitor_id",
                    data.data.visitorId
            );
            
            sessionStorage.setItem(
                    "trackflow_session_id",
                    data.data.sessionId
            );
        }
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