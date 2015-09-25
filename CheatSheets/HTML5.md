## `<html>`

the _HTML Root Element_ which is the "Adam and/or Eve" of all elements.

* _parents_: none
* _content_: _only_ one[`<head>`](#head) and one [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!

### Attributes

* Global Attributes
* `xmlns` specifies XML Namespace of document.

<hr>

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content), which is apparently a lot of things.
* _content_: any [Flow Contant](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content), palpable content (real, actual content included in other tags...)
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<!DOCTYPE>`

Document type declaration is the first thing in HTML document, signifying to the browser what version of HTML is being used

* _parents_: none
* _content_: all the things
* _display_: `none`

<hr>

## `<!-- -->`

Comment tag makes content "invisible" or "unreadable to DOM.

<hr>

## `<head>` <a id="head"></a>

Gives general info about document.  Includes title and links to stylesheets, fonts, icons, and javascript

* _parents_: `<html>`
* _content_: `<title>`. `<meta>`, `<link>`, `script`
* _display_: `none`


### Attributes

* Global Attributes

<hr>

## `<body>` <a id="body"></a>

Represents content of HTML document.  Like Highlander, there can be only one.

* _parents_: Must be second element of `<html>`
* _content_: [Flow Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<section>`

Represents a generic section of a document, a thematic grouping of content, typically with a heading (`<h1>`, etc.) as a child

* _parents_: Any element accepting flow, cannot descend from `<address>`
* _content_: Sectioning, Flow, Palpable
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<span>`

Generic inline container for phrasing content

* _parents_: And element that accepts phrasing or flow content
* _content_: Phrasing
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<p>`

Represents a paragraph of text

* _parents_: Any element that accepts flow content
* _content_: Phrasing
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<nav>`

Represents section of page that links to other pages or other parts of a page

* _parents_: Any element that accepts flow content
* _content_: Flow, Sectioning, Palpable
* _display_: `block`

### Attributes

* Globla Attributes

<hr>

## `<` `script` `>`

used to embed or reference executable script within HTML documnet

* _parents_: Any element that accepts metadata content or phrasing content
* _content_: Metadata, Flow, Phrasing
* _display_: `none`

### Attributes

* Global Attributes

<hr>

# Lists

## `<ul>`

Represents unordered list of items, typically displayed with a bullet

* _parents_: Any element that accepts flow content
* _content_: Flow
* _display_: `list-item`

### Attributes

* Global Attributes

<hr>

## `<ol>`

Represents ordered list of items, typically displayed with a preceding number like numerals, letters, Roman numerals.

* _parents_: Any element that accepts flow content
* _content_: Flow
* _display_: `list-item`

### Attributes

* Global Attributes

<hr>

## `<li>`

Represents an item in a list

* _parents_: `<ol>`, `<ul>`, or `<menu>`
* _content_: Flow Content
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<dl>`

encloses a list of pairs of terms and descriptions
* _parents_: Any element that accepts flow content
* _content_: Flow, Palpable if `<dl>` children include one name-value pair
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<dt>`

Identifies a term in a definition list.

* _parents_: Can only be a child of a `<dl>`, comes before a `<dt>` or `<dd>`
* _content_: None
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<dd>`

Indicates description of a term in a description list (`<dl>`)

* _parents_: Can only be a child of a `<dl>`, must follow `<dt>` or another `<dd>`
* _content_: None
* _display_: `block`

### Attributes

* Global Attributes

<hr>

# Forms:
A variety of elements that can be used together to create forms which a user can fill out and submit to a Web site or application.


## `<form>`

represents a document section that contains ineractive controls to submit information to a web server

* _parents_: Any element that accepts flow content
* _content_: Flow content, but not containing <form> elements
* _display_:

### Attributes

* Global Attributes

<hr>

## `<button>`

represents a clickable button

* _parents_: Any element that accepts phrasing content
* _content_: Phrasing
* _display_:

### Attributes

* Global Attributes

### Type Values
* `submit` default attribute, allows button to submit the form data to server
* `reset` resets all controls to their initial value
* `button` no default behavior. "can have client side scripts associate with the element's events, which are triggered when the events occur"???

<hr>

## `<input>`

used to create interactive controls for web-based forms in order to accept data from user.  Functionality depends on `type`

* _parents_: Any element that accepts phrasing content
* _content_: Flow, listed, submittable, resettable, form-associated, phrasing, and if type is not `hidden`, labellable and palpable.
* _display_:

### Attributes

* Global Attributes

#### Type Values
* `button` push button with no default behavior
* `checkbox` must use the value attribute to define value submitted by this item.
* `file` lets user select a file, use the accept attribute to define the types of files available
* `hidden` control that is not displayed, but whose value is submitted to server
* `image` graphical submit button, use "src" attribute to define source of image and "alt" attribute to define alternative text.  "height" and "width" attributes can define size of image in pixels.
* `password` single-line text field whose value is obscured, use maxlength attribute to specify maximum length of value that can be entered
* `radio` must use the value attribute to define value submitted by this item.  Use checked attribute to indicate whether this item is selected by default.
* `reset` resets contents of form to default value
* `submit` button that submits the form
* `text` single-line text field; line breaks automatically removed from input value

<hr>

## `<label>`

represents a caption for an item in a user interface.  can be associated with a control either by placing the control element inside `<label>` element or by using the `for` attribute.
* _parents_: Any element that accepts phrasing content
* _content_: flow, phrasing, interactive, form-associated, palpable
* _display_:

### Attributes

* Global Attributes
* for- ID of a labelable form-related element in same document as label element.  first element with matching ID is the labeled control for label element.

<hr>

## `<fieldset>`

used to group several controls as well as `<label>`s within a web form
* _parents_: Any element that accepts flow
* _content_: Flow, sectioning root, listed, form-associated, palpable
* _display_:

### Attributes

* Global Attributes

<hr>

## `<legend>`

represents a caption for the content of its parent `<fieldset>`
* _parents_: `<fieldset>`
* _content_: Phrasing
* _display_: none

### Attributes

* Global Attributes

<hr>

## `<table>`

represents data in two demensions or more

* _parents_: Any element accepting flow
* _content_: Flow Content in this order: optional `<caption>`, 0 or more `<colgroup>`, optional `<thead>`, one of the two alternatives: one `<tfoot>` followed by 0 or more `<tbody>` or one or more `<tr>`, a second alternative followed by an optional `<tfoot>`: either 0 or more `<tbody>` or one or more `<tr>`
* _display_:

### Attributes

* Global Attributes

<hr>

## `<datalist>`

contains set of `<option>` elements representing the values availabe for other controls

* _parents_: any element that accepts phrasing content
* _content_: flow, phrasing
* _display_:

### Attributes

* Only Global Attributes

<hr>

## `<caption>`

represents the title of a table
* _parents_: always first descendent of a `<table>`
* _content_: flow 
* _display_:

### Attributes

* Global Attributes

<hr>

## `<col>`

defines a column within a table and used for defining common demantics on all common cells.  Usually found within `<colgroup>` element

* _parents_: `<colgroup>` only, but can be implicitly defined as its start tag is not manditory.
* _content_: none
* _display_:

### Attributes

* Global Attributes

<hr>

## `<colgroup>`

represents the title of a table. Always first descendant of a `<table>`, its styling might place it elsewhere relative to table with CSS

* _parents_: `<table>`
* _content_: Flow
* _display_:

### Attributes

* Global Attributes

<hr>

## `<tbody>`

defines one or more `<tr>` element data-rows to be the body of its parent `<table>` element.  Provides additional semantic info for devices such as printers and displays.  Represents the content which will differ for each printed page when it is longer than a page.  `<thead>` and `<tfoot>` will remain the same on each printed page.
* _parents_: within required `<table>`, `<tbody>` can be added after a `<caption>`, `<colgroup>`, `<thead>`, and a `<tfoot>`
* _content_: 0 or more `<tr>`
* _display_:

### Attributes

* Global Attributes

<hr>

## `<thead>`

defines a set of rows defining the head of the columns of the table

* _parents_: a `<table>`. Must appear after any `<caption>` or `<colgroup>` element, even implicitly defined, but before any `<tbody>`, `<tfoot>` and `<tr>` element.
* _content_: 0 or more `<tr>`
* _display_:

### Attributes

* Global Attributes

<hr>

## `<tfoot>`

defines a set of rows summarizing the columns of the table

* _parents_: a `<table>` element.  must apear after any `<caption>`, `<colgroup>`, or `<thead>` element.  Can be before or after all `<tbody>` and `<tr>` elements but not mixed in with them.
* _content_: 0 or more `<tr>` elements
* _display_:

### Attributes

* Global Attributes

<hr>

## `<tr>`

defines a row of cells in a table.  can be a mix of `<td>` and `<th>` elements
* _parents_: a `<table>`, `<thead>`, `<tbody>`, or `<tfoot>` element
* _content_: none
* _display_:

### Attributes

* Global Attributes

<hr>

## `<td>`

defines a cell of a table that contains data.  participates in table model.
* _parents_: a `<tr>` element
* _content_: Flow content
* _display_:

### Attributes

* Global Attributes
* `colspan`- contains integer value between 0-10000 that indicates how many columns the cell will be. defaults to 1.
* `headers`- contains a list of space-separated strings corresponding to the `id` attribute of the `<th>` elements that apply to it
* `rowspan`- contains integer value between 0-65534 that indicates how many rows the cell extends to.

<hr>

## `<th>`

defines a cell that is a header for a group of cells of a table.  Group of cells that it refers to is defined by `scope` and `headers` attributes

* _parents_: a `<tr>` element
* _content_: phrasing
* _display_:

### Attributes

* Global Attributes
* `colspan`- contains integer value between 0-10000 that indicates how many columns the cell will be. defaults to 1.
* `headers`- contains a list of space-separated strings corresponding to the `id` attribute of the `<th>` elements that apply to it
* `rowspan`- contains integer value between 0-65534 that indicates how many rows the cell extends to.
* `scope`- defines the cels that the header defined in this `<th>` element relates to.  May have the following values:

  `row`- header relates to all cells in the row that this element belongs to;

  `col`- header relates to all cells in the column that this element belongs to;

  `rowgroup`- header relates to all remaining cells in the row group that this element belongs to.  Remaining cells are either those to the right or left of this element depending on the value of `dir` attribute defined on `<table>` element;

  `colgroup`- header relates to all remaining cells in column group that this element belongs to;

<hr>

## `<menu>` !! Experimental !!

represents a group of commands a user can perform or activate. includes both list menus (like at top of screen) and context menus (like under a button when it has been clicked)

* _parents_: Any element that accepts flow
* _content_: if element is in the _list menu_ state: flow content or 0 or more `<li>`, `<` `script` `>`, and `<template>`
* _display_:

### Attributes

* Global Attributes
* `label`- name of menu as shown to user.  Used within nested menus, to provide labe through whcih submenu can be accessed.  Accessed only when parent element is a `<menu>`
* `type`- indicates kind of menu being declared.  can be either `context`:represents a group of commands activated throguh another element, like `menu` attribute of a `<button>` or an element with a contextmenu attribute or `list`: represents a series of commands for user interaction.

<hr>

## `<dialog>` !! Experimental !!

represents a dialog box or other interactive component, such as an inspector or window.  `<form>` elements can be integrated within a dialog by specifying them with attribute `method="dialog"`  When form is submitted, dialog is closed with a `returnValue` attribute set to value of the submit button used.
* _parents_: Any element that accepts flow
* _content_: Flow
* _display_:

### Attributes

* Global Attributes except `tabindex`
* `open` indicates the dialog is active and available for interaction.  When open attribute is not set, it shouldn't be shown to user.


<hr>

<hr>
<hr>

## [Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
* `class` -- a space-separated list of category names
* `hidden` -- a Boolean attribute indicating element is not yet or is no longer relevant.
* `id` -- unique identifier that is unique to entire document.
* `lang` -- helps define the languages of the element
* `style`-- a way to add CSS style within HTML file (not recommended)
* `title`-- contains a text representing information related to the element it belongs to.
