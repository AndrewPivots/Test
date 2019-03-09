# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements. The rubric should be a resource you refer to periodically to make sure your project meets specifications.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.

## How To Set Up

1. Kick up a server like MAMP
2. Put directory on the server.
3. Change port, directory, and img path settings in dbhelper.js
4. Update some static links: header and breadcrumbs home links

## Fix

1. [DONE] URL ID: Restaurant.html needs some kind of id in the url to work. I'm sure I'll figure that out soon.
2. [DONE] DATA LOAD: json data file wasn't loading. Strange network errors in consoles. Turned on a server. Fixed port. Then fixed directory path on server.
3. IMAGES: Figure out better way for responsive images other than small and big based on screen width. It would be awesome to base it purely on device and network speed somehow since that's what matters.
4. LINKS: Bring back some kind of "view details" for restaurant list buttons. Currently redundant.
5. OPTION SELECT: I don't like how screen readers don't announce the options when navigating but mdn makes me think I'm possibly not understanding..."The <select> element with descendant <option> elements handles all the needed interactions natively." https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role

## References

1. DOCTYPE: Looks like html5 is already declared so I'm not sure what else they want me to do here other than using html4 which they don't specify. Maybe they want me in strict mode? https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Introduction_to_HTML5
2. CHARSET: Maybe what they meant by doctype was character encoding set because I was getting a browser error for it. https://developer.mozilla.org/en-US/docs/Glossary/character_encoding
3. VIEWPORT: I need to review this stuff so I can remember it. https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
4. MEDIA QUERIES: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
5. FLEXBOX: https://www.w3.org/TR/css-flexbox-1/
6. SCREEN WIDTH: https://developer.mozilla.org/en-US/docs/Web/API/Screen/width
7. LINK TEXT: quote, "click here," "more," "click for details," and so on are ambiguous https://webaim.org/techniques/hypertext/
