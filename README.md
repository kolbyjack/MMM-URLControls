# Module: MMM-URLControls
The module allows you to control some of the behavior of MagicMirror by adding arguments to the URL.

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/kolbyjack/MMM-URLControls.git
````

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
  {
    module: "MMM-URLControls",
  }
]
````

## Query string options

The following controls can be added to the query string


|Option|Description|
|---|---|
|`hideRegions`|A comma-separated list of regions to hide, useful if multiple displays are used with the same MagicMirror instance|
