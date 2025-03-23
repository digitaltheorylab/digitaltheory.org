# digitaltheory.org

This is the website for the Digital Theory Lab.

```
.
├── .github                 GitHub configurations
│   └── workflows           Workflows for managing GitHub actions
├── .tidyrc                 HTML Tidy configuration
├── README.md               README file
├── assets                  Site assets
│   ├── css                 Stylesheets
│   ├── fonts               Fonts
│   └── js                  JavaScript for site components (navbar, etc.)
├── events                  Events page
├── index.html              Homepage
├── people                  People page
└── research                Research page
```

## Viewing the site locally

The site uses JavaScript to manage a few components. This means you need to run
a web server to view the site locally. The easiest way to do this is via the
command line:

1. On the command line, navigate to your local copy of the site

   ```sh
   cd /path/to/the/site
   ```

2. Run the following:

   ```sh
   python3 -m http.server 8080
   ```

   This will start a web server

3. In a web browser, visit `localhost:8080` to view the site


## Making changes

### Workflow

The general workflow for making changes to the site is as follows:

1. Pull the newest version of the site files to your computer 
2. Make your changes
3. Commit and push your changes

Two actions will trigger when you push your changes: GitHub runs [HTML
Tidy][tidy] to auto-format the HTML markup; GitHub also deploys the latest
pages to the live site.

[tidy]: https://www.html-tidy.org/


### Content templates

We use a few templates to organize content on the site, as follows:

**Research**

To add news items to the `research` page, use this:

```html
<article class="news-item">
  <time datetime="YEAR-MONTH">MONTH YEAR</time>
  <p>DESCRIPTION</p>
</article>
```

If announcing a publication or some other event, optionally embed a link.


**People**

To add a new person to the `people` page, use this:

```html
<li class="person">
  <p class="person-name">PERSON</p>
  <p class="person-title">ROLE</p>
  <p class="person-institution">INSTITUTION</p>
  <a class="person-link" href="WEBSITE"></a>
</li>
```

The `person-link` entry may be omitted.


**Events**

There are two types of events on the `events` page. First, there are individual
talks:

```html
<li class="event">
  <p class="event-person">PERSON (INSTITUTION ABBREVIATION)</p>
  <p class="event-title">TITLE</p>
  <p class="event-date">MONTH DAY</p>
</li>
```

Second, there are bigger events (conferences, symposia, etc.):

```html
<li class="event">
  <p class="event-title">TITLE</p>
  <p class="event-date">MONTH DAY(S)</p>
  <p class="event-link">[<a href="WEBSITE">link</a>]</p>
</li>
```

