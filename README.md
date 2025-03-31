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

When you push your changes, GitHub will run [HTML Tidy][tidy] to auto-format
the HTML markup. This ensures uniformity across the site and it reduces the
need to be overly finicky about the markup as you enter content. As long as
your content is valid HTML (i.e. opening/closing tags match, you do not use
boutique tags, etc.), Tidy should handle it.

[tidy]: https://www.html-tidy.org/

You can also make changes directly on GitHub:

1. Navigate to the file you would like to change and click the pencil icon
   ("Edit this file")
2. Make your changes
3. Click the green "Commit changes..." button, add a commit message in the
   pop-up window, and select "Commit changes"

Committing changes on GitHub will also run Tidy.


### Content templates

We use a few templates to organize content on the site. To add new site
content, copy/paste the relevant template and fill in information for all
capitalized text. E.g, for `YYYY-MM`, you might write `2025-01`.

**Research**

To add news items to the `research` page, use this:

```html
<article class="news-item">
  <time datetime="YYYY-MM">MONTH YEAR</time>
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

