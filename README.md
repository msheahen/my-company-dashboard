# My-company-dashboard

This is an ember application which uses Highcharts (with HighMaps), papa parse, and twitter bootstrap to display a company dashboard which includes three views.  Geospatial view which graphs number of employees on different locations, key metrics view which includes a bar chart, line chart and statement of the number of current open issues, and a data view, where you can filter and sort the current issues data.  

The number of open issues uses the same data as the data table, and all data is polled every 2000 ms.  So if you add an open issue to the CSV file, the number of open issues should increase in the key metrics file, and the row should appear in the data view.

For building the app, I used ember-cli, since it has a lot of the desired features, like minification, out the box :).  You will see below how to get started.  Enjoy!

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

in terminal or bash:
* `git clone https://github.com/owowmary/my-company-dashboard.git my-company-dashboard`
* `cd my-company-dashboard` NOTE: Make sure you are in the correct folder, run `ls` and you should see ```package.json``` as one of the files.
* `npm install`
* `bower install`

## Running / Development

* `ember serve --prod`
* Visit [http://localhost:4200](http://localhost:4200).


### External Libraries and Addons used:

* [Papa-Parse](http://papaparse.com/) (for converting CSV to JSON)
* [Highcharts](https://www.npmjs.com/package/ember-highcharts) (for charting results)
* [Ember truths addon](https://www.npmjs.com/package/ember-truth-helpers) package (for boolean handlebars helpers)
* [jQuery](https://jquery.com/)
* [Ember.js](http://emberjs.com/)
* [Ember-cli](http://ember-cli.com/)
* [Bootstrap](https://www.npmjs.com/package/ember-bootstrap) (for responsiveness and style)

## Further Reading / Useful Links

* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
