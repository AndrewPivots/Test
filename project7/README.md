# Restaurant Reviews Website

## How To Set Up

1. Kick up a server like MAMP
2. Put directory on the root of the server (htdocs).
3. Change port in dbhelper.js

## Fix

1. [DONE] URL ID: Restaurant.html needs some kind of id in the url to work. I'm sure I'll figure that out soon.
2. [DONE] DATA LOAD: json data file wasn't loading. Strange network errors in consoles. Turned on a server. Fixed port. Then fixed directory path on server.
3. IMAGES: Figure out better way for responsive images other than small and big based on screen width. It would be awesome to base it purely on device and network speed somehow since that's what matters.
4. LINKS: Bring back some kind of "view details" for restaurant list buttons. Currently redundant.
5. OPTION SELECT: I don't like how screen readers don't announce the options when navigating but mdn makes me think I'm possibly not understanding..."The <select> element with descendant <option> elements handles all the needed interactions natively." https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role
6. SERVICE WORKER LOCAL: I wanted the service worked in the js folder but was having trouble with scope.
7. OFFLINE: So you have to have everything saved or else the site breaks? For example if you can't load the map stuff everything breaks.
8. CACHE DIRECTORIES: Why do we have to cache this? '/udacity/project7/js/', ... And why can't we just cache everything within a certain directory?

## References

1. DOCTYPE: Looks like html5 is already declared so I'm not sure what else they want me to do here other than using html4 which they don't specify. Maybe they want me in strict mode? https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Introduction_to_HTML5
2. CHARSET: Maybe what they meant by doctype was character encoding set because I was getting a browser error for it. https://developer.mozilla.org/en-US/docs/Glossary/character_encoding
3. VIEWPORT: I need to review this stuff so I can remember it. https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
4. MEDIA QUERIES: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
5. FLEXBOX: https://www.w3.org/TR/css-flexbox-1/
6. SCREEN WIDTH: https://developer.mozilla.org/en-US/docs/Web/API/Screen/width
7. LINK TEXT: quote, "click here," "more," "click for details," and so on are ambiguous https://webaim.org/techniques/hypertext/
8. SERVICE WORKER SETUP: Copied and adjusting main setup. https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
9. CACHING: Copied and adjusting for event listeners, caching and fetching https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage
10. FETCHING: Copied and adjusted for fetching. Was getting a strange FetchEvent Network error with that other script. https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith
