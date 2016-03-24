# FEND Project 6 -- FeedReader

Use [Jasmine](http://jasmine.github.io) to write a number of test suites against a pre-existing application. 

## Usage

1. Clone this repository or download all files.
2. Open ```index.html```
3. Enjoy


## What I did?

* Write a test that loops through each feed in the allFeeds object and ensures it has a URL/name defined and that the URL/name is not empty.
* Write tests that ensure menu element is hidden by default and change when click.
* Write tests that ensure loadFeed function works well.

#### Additional test suite (Mark As Read)
This test suite is for a new feature "<em>Mark As Read* </em>" which makes a read article looks differently from unread articles. It's not implemented.

* add a ```read``` class for each article link (```.entry-link```) to mark read.
* use jasmine-ajax to mock up URL click


## Usefull Resources
* [Jasmine 2.1 Document](http://jasmine.github.io/2.1/introduction.html)
* [jQuery API Documentation](http://api.jquery.com/)
* [Google Feed API] (https://developers.google.com/feed/v1/devguide#introduction)
* [Jasmine Ajax](http://jasmine.github.io/2.1/ajax.html)
