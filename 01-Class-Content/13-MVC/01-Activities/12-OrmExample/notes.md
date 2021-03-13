# Notes

## Amazon Query Example

```
/* create example query */
SELECT image, name, count_description, rating_stars, rating_count, pricing,  shipping_options  FROM products WHERE description REGEXP "waterfall";

/* replace with parameterized query */
SELECT ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??  FROM ?? WHERE ?? REGEXP ?;

/* create the ORM function */

/* use ORM function */
selectMultiple( "image", "name", "count_description", "rating_stars", "rating_count", "pricing",  "shipping_options", "products", "description", "macbook pro")
```