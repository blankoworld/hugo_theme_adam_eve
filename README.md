# Adam & Eve

I migrated my wiki from [Dokuwiki](https://www.dokuwiki.org/) to [Hugo](http://gohugo.io/) and created a new theme to reconcile both: Adam & Eve was born.

This theme is special: **it comes with its more simple formal dress**.

Why ? Because it is:

  * simple
  * clean
  * responsive

I was enormously inspired by [Note Plugin](https://www.dokuwiki.org/plugin:note) for notes. And [Dokuwiki](https://www.dokuwiki.org/) for external and internal links.

## Screenshot

This is a single page from the wiki, showing:

  * a simple menu to go to the homepage
  * a table of contents
  * internal shortcode (the green link)
  * note shortcode (the 4 models)
  * nolink shortcode (the red link)
  * remote shortcode (the link with a globe before)

![A single page from the Wiki](https://raw.githubusercontent.com/blankoworld/hugo_theme_adam_eve/master/images/single_page.png)

## Installation

In your Hugo root folder, do something like:

```bash
mkdir themes
cd themes
git clone https://github.com/blankoworld/hugo_theme_adam_eve.git
```

Check [Hugo Installation Guide](https://gohugo.io/getting-started/installing/) for more information.

## Getting Started

### The config file

You can either copy **config.toml.example** from this repository to your Hugo root directory (and rename it **config.toml**). Or copy those included in *exampleSite* directory.

Just adapt the content to your needs.

### The _index.md files

_index.md files are used to display content of a specific category. A category is a directory you add in **content** directory.

Check **exampleSite** directory content for some examples.

**Tip:** If you need to make a link to a category called design, to go to its **_index.md** file, you need to create an empty **index.md** file and make a link like that: 

```
[My category]({{< relref "mycategory/index.md" >}})
```

## Special features

### Specific links

In order to have a similar behaviour to [Dokuwiki](https://www.dokuwiki.org/), I created 3 types of links:

  * Remote link: display a little globe at the left. Permit to reader immediately understand that it's a remote link
  * Internal link: between page that are in your wiki
  * Word without link: sometimes you planned to make a link on a word. To not forget, I created a specific **nolink** word to make a specific display

Let's have some example.

For remote links:

```
{{< remote "Wiki" "http://fr.wikipedia.org/wiki/Wiki" >}}
```

With remote shortcode, you have many other possibilities by playing with parameters:

```
{{< remote "Panda" "https://best.panda.domain.tld" "What a panda looks like" >}}
```

which add a **title** to your link (when user keep cursor on it).

```
{{< remote "http://perdu.com/" >}}
```

which display the link at it is. But with the globe before ;)

For internal links:

```
{{< internal "Magic potion" "section/my_internal_page.md" >}}
```

And for nolink word:

```
{{< nolink "How to create a flower bread" "page/I/want/to/create/later.md" >}}
```

**Tip:** Check **exampleSite/content/_index.md** file to have some examples.

### Notes

Display a sidebar with a specific background color to show readers something important.

We have 4 sidebar models:

  * warning (red)
  * important (yellow)
  * tip (green)
  * normal (blue)

Example:

```
{{% note warning %}}
Pay attention to read this **entire page** before applying what you read!
{{% /note %}}
```

## Contributing

Did you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](//github.com/blankoworld/hugo_theme_adam_eve/issues) to let me know. Or make directly a [pull request](//github.com/blankoworld/hugo_theme_adam_eve/pulls).

## License

This theme is released under the MIT License. For more information read the [License](//github.com/blankoworld/hugo_theme_adam_eve/blob/master/LICENSE.md).
