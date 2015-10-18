typed-text Custom Element
=========================

Introduction
------------

**typed-text** is a port of [Matt Boldt's typed.js](https://github.com/mattboldt/typed.js/)
jQuery plugin as a Polymer Custom Element.  It has no dependencies except
Polymer itself.

![Animated Demonstration Image](/demo.gif)

Installation
------------

Usage
-----

Import the component:

````html

<link rel="import" href="components/jawnsy/typed-text/typed-text.html">

````

Then simply use the `typed-text` custom element, specifying an array of
strings to cycle through.

````html

<typed-text strings='[ "hello", "world", "foo", "bar" ]'></typed-text>

````

Caveats
-------

As this is a new project, there are currently NO guarantees of compatibility.
The API should not be considered stable.  In addition, the author is not a
JavaScript or Polymer expert, so this is not recommended for production use.

Contributing
------------

Contributions to this project (in the form of bug reports, patches, or pull
requests) are gratefully accepted by the maintainer.  Please see the
`Contributing.md` file contained in this package for details.

Maintainer
----------

Jonathan Yu <jonathan.i.yu@gmail.com>

Copyright and License
---------------------

Copyright 2014-2015 by Matt Boldt and other contributors

Licensed under the MIT License (see the `LICENSE` file included in this
distribution).
