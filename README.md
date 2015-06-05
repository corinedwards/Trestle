
# Trestle
A script to turn tables in to responsive data tables
## About Responsive tables

This great post on [css-tricks.com](https://css-tricks.com/responsive-data-tables/) shows a method for collapsing tables in to a single column, at mobile breakpoints, and using the CSS content property to display repeating labels of the THEAD content along side those cells.

##The problem

Unfortunately this means that each table needs to have a small chunk of accompanying CSS written along with it. If you have a lot of tables this is problematic.

##What does the Trestle do?

The Trestle Tables script reads the THEAD content and then prints that in to a style tag in the HEAD of a HTML document.


