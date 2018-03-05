var animation = bodymovin.loadAnimation8({
        container: document.getElementById('loader'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'loader.json' // the path to the animation json
});
