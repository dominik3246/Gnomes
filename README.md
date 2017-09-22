## Installation

Follow the instructions below

1. Clone this repository 

2. Navigate to **Gnomes** directory and type following command:
```
yarn build
```

Dependencies should be downloaded and the project built

3. Open a browser and access [http://localhost:3000](http://localhost:3000)] or open directly from directory.


Thanks for your time! :)

---------
Created by Dominik Kurbiel




-----------------------------------------

Hi!:)

## Overview

Your todays task will be to code a simple,dynamic webpage according to provided designs and specification.

## Detailed description

You should code a fully working page based on your framework of choice (we suggest Angular/React) that will:

* Look as on designs _([assets/project.jpg](assets/project.jpg))_
* Will fetch data for table from API. Documentation for it is availabe at [docs](http://master.datasource.jazzy-hr.jzapp.io/api/doc#get--api-v1-gnomes)
* Use assets already provided in _assets_ folder
* Table should display all items availble from API. How much you will be able to display at once, it's up to you.
* Table should allow to edit cell' detail, after click, a form should be displayed that will allow to update Gnome name, age, and strenght. API endpoint for PATCH is described in docs. Please not that API will randomly return errors, and that data will not be actually stored (so if you will call API GET, it will not get updated data). Design and UI/UX solution for this edit/update form is up to you.
* Font we've used is [https://fonts.google.com/specimen/Work+Sans](https://fonts.google.com/specimen/Work+Sans)


You can clone this repo:)

## Deadline

There is no deadline. Do it right, send it when it's done.

## Requirements/Suggestions

* Project should be done on git, with proper commits history (one commit is not a history)
* Project should be pushed to public git repository
* Final implementation should be on master branch
* You should use some framework
* You should use some build tools (webpack/gulp/grunt, whatever)
* Provide readme file!
* Ideally would be, if calling ```npm build``` would do everything required to build project (download deps, build all) - it will save our time. (Yes, we know it's not normal)
* Builded project has to be in _dist_ folder.

## API HTTP return codes
API returns only:
* 200 - If everything is ok
* 422 - If your request was not constructed properlly

If you receive different code, then you made something wrong.

## What will be checked (as per functionality)

* If User is able to browse all items supplied by API.


## What will be checked (as per code).

Your mark will depend on how far will you go with this task. If you can't do something, it doesn't mean you failed. Just send whatever you CAN do.

Level:0
* HTML/CSS/SASS correctness
* IF what you did, looks like it should

Level:1
* If you have used framework
* If your framework is used in proper way
* How does you project structure look like, and if you have used any of architecture patterns (in eg: MVC)
* If you have used any of nice tools like npm, bower, sass, etc.
* If you have created your css in reusable convention (i.e. BEM)

Level:2
* How proper is your code regarding syntax & formatting
* How fast is your code

## Sidenotes

This task is not hard, we know it. But it's designed not to check if you know all tricks of CSS&HTML, but to see how you organize your code, how you use frameworks (even though this use is minimal).

## Submitting your work

When finished, send email with your name and link to public repo with solution at [work@jazzy.pro](mailto:work@jazzy.pro)
