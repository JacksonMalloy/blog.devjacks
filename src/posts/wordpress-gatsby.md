---
title: "Headless WordPress"
date: "2019-12-21"
slug: "/wordpress-gatsby/"
subtitle: "The Future of WordPress"
keywords: ["wordpress", "gatsby"]
featuredImage: ../images/gatsby-icon.png
---

WordPress has been around for ages, and as of 2019, it powers 34% of the internet. Out of all websites in the CMS space, over 60% are built with WordPress. WordPress doesn't seem to be going anywhere as many businesses rely on its consistency, familiarity and freedom. These three pillars are why WordPress thrives in comparison to modern headless CMS solutions such as Sanity, Contentful, and Forestry.io. In this post I would like to discuss what headless means with WordPress, the benefits and drawbacks of it, and the future of WordPress headless CMS development.

### Wrap Your Head Around Headless

Headless CMS development is about sourcing data and managing content. From a B2C (business to customer) perspective, being headless simply means that what the user sees is seperate from where the data and content live. For Headless WordPress, this means that the CMS dashboard acts as a data source from which content is created and stored. That data is then pulled into the user interface via the WordPress RESTful API or WPGraphQL.

### A Headless WordPress Way

Imagine your WordPress dashboard is hosted on a domain called http://data.example.com (notice the subdomain). This domain does not have an interface which the customer can interact with, only you are able to log in to the dashboard by going to the /wp-admin route and signing in with your credentials. This interface is where you make changes and additions to the content of your website, just as if you were working in a normal WordPress environment. The difference is that the content is then pulled into http://example.com so that it can be displayed in the browser for customers to interact with.

### Seems Like An Extra Step For Nothing

There are actually lots of benefits for users and developers by doing it this way. For brevity, I will be calling http://data.example.com the backend and http://example.com the frontend throughout the rest of the article.

### User Experience

By separating the backend from the frontend this way, the user interface can become significantly more performant. Users aren't subject to extremely slow page load times as plugin bloat no longer is a factor. If the website is built with a modern frontend JavaScript framework such as React, Angular, Svelte or View, your users will be able to interact with your content far more effectively than if you were to subject them to slower page load times and unnecessary HTTP calls.

### Developer Experience

As a developer, being able to code outside the CMS has its advantages. Knowing where things are in the code increases productivity tenfold. Searching for settings and data in a CMS is tedious. Rather than spending 15 minutes searching for something, developers are now able to interact with raw data, and build out user interfaces from scratch.

### Security

In the WordPress world, security is a big concern. If an attacker knows that your website is a WordPress site, it is susceptible to many different attacks. By decoupling the frontend and backend, hackers will not be able to tell that they are interacting with a WordPress site, thus improving the security of the website.

## Agency Selling Points

#### Search Engine Optimization

Google has stated that focusing on performance will improve search engine optimization. This makes sense as well performant websites have lower bounce rates, thus leading to a longer average session duration.

#### Greater Profit Margins

As the headless space develops, companies that do not adapt will get left behind. Building headless sites with "static site generators" such as Gatsby can increase the speed of developing UI's significantly. This, coupled with a dominant site performance rating will likely net more bids. More bids and less resources spent on development equals more profit.

## Why Use WordPress?

A majority of the CMS space is built on WordPress. People don't like change, and when selling a new idea or product it sometimes is best to stick with technology that clients are familiar with. A pain point with other headless CMS such as Sanity is that they own your content and data. These services are very generous in offering free tier plans until a specific rate limit, but you are required to pay for the service. WordPress costs next to nothing. All you need is a domain name, a way to deploy the backend and another way to deploy the frontend. More information about deployment here.

## The Future Of Headless WordPress Development

Right now it seems as if it is every modern headless CMS versus WordPress. WordPress has had such a significant impact on the web community that it is here to stay, and it will only improve and adapt as time passes. There are currently some pain points when working with headless wordpress, one of which being live previews. There is one fantastic developer named Justin Whall who has derived a solution to that problem using Apollo. I highly recommend you check out his github as you'll learn a lot from studying his repositories. More to come, and thanks for reading!
