# Adam & Eve

I migrated my [Dokuwiki](https://www.dokuwiki.org/) to [Hugo](http://gohugo.io/) and created a new theme reconcile both: Adam & Eve was born.

This theme is special: it comes with it more simple formal dress.

So I only give some elements so that you can create a Wiki.

After that, you need to dress it with more CSS.

# Shortcodes

To use wiki functionnalities, I create some shortcodes.

## nolink

Display a word you want to use later to create a new page of your Wiki.

In Dokuwiki it was CamelCase behaviour that show you a word in red.

Example:

```
{{< nolink "How to create a flower bread" "page/I/want/to/create/later.md" >}}
```

## remote

Display a link with a globe before so that readers know they will go away your wiki.

Example:

```
{{< remote "Wiki" "http://fr.wikipedia.org/wiki/Wiki" >}}
```

## internal

This shortcode will use `relref` Hugo command to create a relative link to the given page.

```
{{< internal "Magic potion" "section/my_internal_page.md" >}}
```
