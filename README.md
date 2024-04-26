# Neos CMS - NodeReloadedOutOfBand Event for NeosUI

[![License](https://poser.pugx.org/vivomedia/neos-ui-json-validator/license)](https://packagist.org/packages/vivomedia/neos-ui-node-reloaded-out-of-band-ui)

A plugin for Neos.UI which sends an Event on every handled server feedback of type `Neos.Neos.Ui:ReloadContentOutOfBand/Main`

## Install

Install with composer

```
composer require vivomedia/neos-ui-node-reloaded-out-of-band-ui 
```

## Usage
```javascript
  window.addEventListener('Neos.NodeReloadedOutOfBand', function (event) {
      console.log("A node has been reloaded out of band.", event.detail.element);
  });
```