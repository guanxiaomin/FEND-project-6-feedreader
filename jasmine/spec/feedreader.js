/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* Write a new test suite named "The menu" */

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    describe('The menu', function () {
        var body = $('body'),
            menuIcon = $('.menu-icon-link');

        it('should be hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        it('should display when clicked and hide when click again', function() {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Write a new test suite named "Initial Entries" */

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
        var feedId = 0;

        beforeEach(function (done) {
            loadFeed(feedId, done);
        });

        it('should be at least a single entry', function() {
            expect($('.entry').length).not.toBe(0);
        });
    });

    /* Write a new test suite named "New Feed Selection"

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {
        var initEntrys,
            newEntrys,
            randomId = Math.floor(Math.random() * 3) + 1;

        beforeEach(function (done) {
            // load initial feed
            loadFeed(0, function() {
                initEntrys = $('.entry > h2').html();
            });

            // load new random feed
            loadFeed(randomId, function() {
                newEntrys = $('.entry > h2').html();
                done();
            });
        });

        it('content should change when a new feed is loaded', function() {
            //console.log(initEntrys);
            //console.log(newEntrys);
            expect(newEntrys).not.toEqual(initEntrys);
        });
    });

    // Additional test suite
    // Mark as read when click an article (add a "read" class to .entry-link)

    describe('Mark As Read', function() {

        beforeEach(function() {
            jasmine.Ajax.install();
        });

        afterEach(function() {
            jasmine.Ajax.uninstall();
        });

        // You can use xit to make the spec becomes a pending spec
        xit('article should display as read', function() {
            var readEntry = $('.entry-link').eq(3);
            var url = readEntry.attr('href');

            // if use click() method, it can't be back to feedreader page, just use ajax method to instead of url click.
            var doneFn = jasmine.createSpy("success");

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(args) {
                if (this.readyState == this.DONE) {
                    doneFn(this.responseText);
                }
            };

            xhr.open("GET", url);
            xhr.send();

            expect(readEntry.hasClass('read')).toBe(true);
        });
    });
}());
