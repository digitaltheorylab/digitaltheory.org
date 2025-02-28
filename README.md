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


## Making changes

The workflow for making changes to the site is as follows:

1. Pull the newest version of the site files to your computer 
2. Make your changes
3. Commit and push your changes

Two actions will trigger when you push your changes: GitHub runs [HTML
Tidy][tidy] to auto-format the HTML markup; GitHub also deploys the latest
pages to the live site.

[tidy]: https://www.html-tidy.org/

