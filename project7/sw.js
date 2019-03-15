this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/',
        '/js/main.js',
        '/js/dbhelper.js'
      ]);
    }).catch(function(e){
      console.log('Error Creating Cache: ' + e);
    })
  );
});

this.addEventListener('fetch', event => {

  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function() {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(event.request);
    // Return it if we found one.
    console.log(cachedResponse);
    if(cachedResponse){
      return cachedResponse
    } else {
    // If we didn't find a match in the cache, use the network.
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.add(event.request.url);
      }).catch(function(e){
        console.log('Error Creating Cache: ' + e);
      })
    );
    return fetch(event.request)
    };
  }()); // response

}); // event
