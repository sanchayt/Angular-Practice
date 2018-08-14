function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

let sliderContainer = document.getElementById('wowslider-container1')

// Send a message to the parent
var sendMessage = function (msg) {
    // Make sure you are sending a string, and to stringify JSON
    window.parent.window.postMessage({"for":"user","data":msg}, '*')
    // window.parent.postMessage(msg, '*');      
};


bindEvent(sliderContainer, 'click', function (e) {
    // if (e.target && e.target.matches("div>li>img")) {
        console.log(e.target);
    // }
        // TODO: add the data to be sent in alt or any tag like data 
    sendMessage(e.target.alt);
    console.log('is working?');
    
});