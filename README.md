# React-Express-API-Project_Art-Bazaar

> **Description:** This is the front-end React UI that will connect to my Node-REST-API-Project_art-bazaar back-end app. Users will be able to look at upcoming pop-up art bazaars and see the artists who will be selling art there, what art pieces will be for sale, and the details of each item for sale. Each card/container for a pop-up art bazaar will import Google Maps API in order to display the location where that specific event will be held.



## Three Major Components:
1. Server-side API: My [Node-REST-API project](https://github.com/tri-be/Node-REST-API-Project_art-bazaar)
2. Front-end React UI: Showing artists and art pieces per pop-up art bazaar
3. Third-party API: Using Google Maps API to show location of a specific pop-up art bazaar

## User Stories
Homepage
: users will be able to click on cards/containers of upcoming pop-up art bazaars and bring up a component displaying event details.

Event Details View
: there will be a section with event descriptions at the top of the page, and below there will be two cards: one leading to *Artists* and one leading to *Works of Art*.

Artists view
: there will be a list/grid of cards with each card showing a sunapsis of each artist. Clicking on these cards will lead to a view of the specific artist's bio.

Works of Art view
: users will see a list/grid of cards showing each work of art that will be for sale at the event. Each of the cards will have a link to the Artist Bio view of the artist who's selling them.

Artist Bio view
: there will be a full bio of the artist with a list/grid of cards showing all the pieces of art that they will be selling at the pop-up art bazaar.

Art View
: Users can click on one of the cards to pull up a view showing details for the piece including the price of the original piece of art and the price of buying a print, the number of prints available for sale, name, medium, and dimensions.

I would like to have links up in a navbar that also lead to the *Artists* and *Works of Art* views if users prefer to navigate that way.

I would also like to create a view for an admin user who will be able to login and add artists and pieces of art to the website. They could theoretically receive submissions from artists who wish to sell art at the event, and then they would upload the details of artists who have been accepted to the pop-up art bazaar as well as the details of their works of art.

**For the Admin User Stories**
: The admin could go to a specified URL to arrive at a login page. They can use a username and password (that I will predetermine for now) to get access to the admin pages.

Admin Main view (after logging in)
: there will be buttons for adding an an event, adding an artist, and adding a piece of art.

Each of the *Add* views
: will contain forms for inserting the necessary information for each view.
	- Add Event
		- name of venue
		- latitude and longitude
		- date and time of event
		- list of Artists in attendance
		- list of art for sale at the event
		- short description of event(?)
	- Add Artist
		- username
		- is_customer
		- is_artist
		- bio
		- first_name
		- last_name
		- email
	- Add Art
		- name
		- artist
		- category (medium?)
		- is_print
		- price
		- description
		- quantity

## Possible additional features for later:
I would like to create a way for users to provide their basic info (first name, last name, and email) to receive a 'ticket' that they can take to the event. Maybe they can even buy tickets that get them one free print of their choice.

(A first step towards this could be providing users access to a page to print the ticket by using a password that theoretically would be provided to them, sort of like using a code to receive a promotional discount. This way I could implement a shallow version of this interaction that doesn't require actual transactional API usage.)



