# palette-printer
A sass tool for generating themes and color-schemes

Example:

```scss
@use 'path/to/palette-printer' as p with (
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
    $tokens: (
        'background': ('bg-main': 'bg-main'),
        'color': ('text-main': 'text-main')
    ),
    $theme-tag: 'html'
);


button {
    color: p.palette('text-button');
    background: p.palette('bg-button');
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


