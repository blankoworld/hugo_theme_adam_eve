# Adam & Eve

I migrated my wiki from [Dokuwiki](https://www.dokuwiki.org/) to [Hugo](http://gohugo.io/) and created a new theme to reconcile both: Adam & Eve was born.

This theme is special: **it comes with its more simple formal dress**.

Why ? Because it is:

  * simple
  * clean
  * responsive

I was enormously inspired by [Note Plugin](https://www.dokuwiki.org/plugin:note) for notes. And [Dokuwiki](https://www.dokuwiki.org/) for external and internal links.

## Community

They use Adam & Eve:

  * [Weekly Supervised Object Detection in Artworks](https://wsoda.telecom-paristech.fr)
  * [Recueil d'astuces](https://olivier.dossmann.net/wiki/)

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

## Configuration

It's hardly recommended to check the `config.toml.example` file. Especially to configure the table of content via `[markup]` section, the name of each menu, enable Emoji, etc.

### Table of content

To configure the table of content, edit your `config.toml` file and add something like:

```toml
[markup]
  [markup.tableOfContents]
    endLevel = 6
    ordered = false
    startLevel = 1
```

It means you start the Table of Content from `h1` to `h6`. You can find [more info about table of content configuration on official Hugo documentation](https://gohugo.io/getting-started/configuration-markup/#table-of-contents).

### Use git commit date as `last modification date`

If you keep an history of your Hugo website, you can use git commit date as last modification date of each page ([as explained in Hugo documentation about EnableGitInfo](https://gohugo.io/getting-started/configuration/#all-configuration-settings)).

To enable this option, edit your `config.toml` file to add:

```toml
EnableGitInfo = true
```

This will enable this explained option.

### Choose code colorization theme

Regarding [list of available themes for Chroma plugin](https://xyproto.github.io/splash/docs/), you can customize your preferred code colorization theme using this line in your `config.toml` file:

```toml
pygmentsstyle = 'monokai'
```

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

### Search bar

There is several steps to add a searchbar on your website.

First edit the **config.toml** file to add `withsearchbar` option:

```ini
[params]
    withsearchbar = true
```

You also need to add `JSON` as output format. Search something like this:

```ini
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

Finally create the `content/search.md` file with this content:

```markdown
---
title: "Search result"
sitemap:
  priority: 0.1
layout: "search"
---

Some content you want to add if any JS script was disabled by your subscribers.
```

### Notes

Display a sidebar with a specific background color to show readers something important.

We have 4 sidebar models:

  * warning (red)
  * important (yellow)
  * tip (green)
  * normal (blue)

Example:

```
{{< note warning >}}
Pay attention to read this **entire page** before applying what you read!
{{< /note >}}
```

### Homepage menu

By default a menu is displayed on Homepage. You can disable it. Use `nohomebar` in **config.toml** like this:

```ini
[params]
    nohomebar = true
```

### Homepage posts list

By default a list of post from `post` directory is shown on Homepage. You can disable it. Use `NoHomepagePostList` in **config.toml** like this:

```ini
[params]
    NoHomepagePostList = true
```

## Contributing

Did you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](//github.com/blankoworld/hugo_theme_adam_eve/issues) to let me know. Or make directly a [pull request](//github.com/blankoworld/hugo_theme_adam_eve/pulls).

## License

This theme is released under the MIT License. For more information read the [License](//github.com/blankoworld/hugo_theme_adam_eve/blob/master/LICENSE.md).
