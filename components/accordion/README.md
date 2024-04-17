# Accordion

A bootstrap accordion with flexibility to move icon to left or right. Includes property to show utility link on top to Open/Close all accordions.

## Usage

To use this component in an \*.html.twig template use Twig’s built in embed function.

```
{% embed 'rapid:accordion' with {'toggleAll': false, 'togglePosition': 'accordion--toggle-right'} %}
	{% block accordion %}
		...
	{% endblock accordion %}
{% endembed %}
```

## Additional information

- To display utility link set `toggleAll` property to `true`.
- To display toggle icon on the left set `togglePosition` property to `left`
- SCSS file includes plus/minus variables to override default chevron icons if required.
