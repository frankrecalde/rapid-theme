# Back to top

Adds a floating "back to top" button. Includes property to change icon type and hide button completely.

## Usage

To use this component in an *.html.twig template use Twig’s built in include function.

```
{{ include('rapid:back-to-top', { displayButton: true, iconType: 'chevron-up' }) }}
```

## Additional information

To hide button completely set `displayButton` property to `false`.
