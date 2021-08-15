

```scss
@use 'palate-printer' with (
    $palates: (
        'light': (
            'bg-main': #fff, 
            'text-main': #000
        ),
        'dark': (
            'bg-main': #000, 
            'text-main': #fff
        ), 
    ),
    $tokens: (
        'background': ('bg-main': 'bg-main'),
        'color': ('text-main': 'text-main'),
    ),
    $default: 'light',
    $prefers: (
        'dark': 'dark',
        'light': 'light'
    ),
    $target: (
        '[theme=dark]': 'dark',
        '.theme-light': 'light' 
    ),
    $theme-tag: 'html'
);
```

```scss
html {
    --current-scheme: #{default};
    --palette-themes: dark '[theme=dark]', light '.theme-light';
}

@media (prefers-color-scheme: dark ) {
    --current-scheme: light;
    // if palette dark exists then include dark palate
}
@media (prefers-color-scheme: light ) {
    --prefers-scheme: light;
    // if palette light exists then include light palate
}
```
