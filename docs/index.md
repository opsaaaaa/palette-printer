---
layout: root
---


# Sass Palette Printer

A sass tool that takes all the effort out of supporting multiple color schemes on your website.

[github/opsaaaaa/palette-printer](https://github.com/opsaaaaa/palette-printer)

<button id="palette-theme-switch">
  Switch Theme
</button>


## Usage:

```scss
@use 'path/to/palette-printer/theme' with (
    $palettes: (
        'light': (
            'bg-main': #fff, 
            'text-main': #000,
            'bg-button': rgb(90, 46, 119),
            'text-button': #fff
        ),
        'dark': (
            'bg-main': #000, 
            'text-main': #fff,
            'bg-button': rgb(93, 206, 145),
            'text-button': #000
        )
    ),
    $default: 'light',
    $prefers: (
        'dark': 'dark'
    ),
    $targets: (
        '[theme=dark]': 'dark',
        '[theme=light]': 'light' 
    ),
    $theme-tag: 'html'
);

@use 'path/to/palette-printer/token' with (
    $tokens: (
        'background': ('bg-main': 'bg-main'),
        'color': ('text-main': 'text-main')
    )
);

@use 'path/to/palette-printer/palette' as *;


button {
    color: palette('text-button');
    background: palette('bg-button');
    ...
}


```

```html
<html lang="en" theme="light">
...
<body class="bg-main text-main">
    ...
    <button id="palette-theme-switch">
        Theme Switch
    </button>
    ...
</body>
</html>
```


