#Wordpress

##Post Types
- posts
- pages
- attachments
- revisions
- navigation menus

Basically, Post == content, and can be whatever you need.

##Post Meta

Info that's about that post stored in key/value pairs in the postmeta table of the db.

##Taxonomies

used for grouping posts together

- Categories (group topics together)
- Tags (smaller terms/ search or keywords)

##Custom Taxonomies

 - Organize Series (allows you to lump different posts together)
 - books, genres, authors,
 - recipes, breakfast, lunch, dinner, etc

##Custom Fields

Not so easy to use. The 'old' way.

##Custom Meta Boxes

Appears to the side of post area. Hooks into the same api to create the other boxes.

```
function add_listening_to_box() {
	add_meta_box('listening_to', 'Listening to', 'listening_to_metabox', 'post', 'side', 'default');
}
add_action('add_meta_boxes', 'add_listening_to_box');
```