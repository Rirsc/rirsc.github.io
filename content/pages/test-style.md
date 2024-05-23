---
title: Test Style
tags:
  - markdown
  - terminal
date: 2024-05-21T07:32:14+01:00
---

## 1. Headlines

# H1 - This is a level 1 heading
## H2 - This is a level 2 heading
### H3 - This is a level 3 heading
#### H4 - This is a level 4 heading
##### H5 - This is a level 5 heading
###### H6 - This is a level 6 heading

## 2. Text Formatting

- **Bold text**: `**Bold**` or `__Bold__`
- *Italic text*: `*Italic*` or `_Italic_`
- ***Bold and Italic***: `***Bold and Italic***` or `___Bold and Italic___`
- ~~Strikethrough~~: `~~Strikethrough~~`
- `Inline code`: `` `Inline code` ``

## 3. Lists

### Unordered List
- Item 1
  - Subitem 1
  - Subitem 2
- Item 2

### Ordered List
1. First item
2. Second item
   1. Subitem 1
   2. Subitem 2

### Task List
- [x] Completed task
- [ ] Incomplete task

## 4. Links

- [OpenAI](https://www.openai.com)
- [Relative link to a file](./path/to/file.md)

## 5. Images

![Alt text](https://via.placeholder.com/150 "Optional title")

## 6. Blockquotes

> This is a blockquote.
> 
> - It can contain other elements like lists.
> - **Formatting** is possible.

## 7. Code Blocks

### Inline Code
Use `print("Hello, World!")` to print a message.

### Fenced Code Block
```python
def hello_world():
    print("Hello, World!")
```

## 8. Tables

| Syntax      | Description |
|-------------|-------------|
| Header      | Title       |
| Paragraph   | Text        |

### Complex Table
| Header 1    | Header 2    | Header 3    |
|-------------|-------------|-------------|
| Row 1, Col 1| Row 1, Col 2| Row 1, Col 3|
| Row 2, Col 1| Row 2, Col 2| Row 2, Col 3|
| Row 3, Col 1| Row 3, Col 2| Row 3, Col 3|

## 9. Horizontal Rule

---

## 10. Inline HTML

<p>This is an inline HTML paragraph.</p>

## 11. Escaping Characters

Use a backslash (`\`) to escape special Markdown characters:
- \*escaped asterisk\*
- \_escaped underscore\_
- \`escaped backtick\`
- \\escaped backslash\\

## 12. Footnotes

Here is a footnote reference[^1].

[^1]: This is the footnote.

## 13. Definition Lists

Term
: Definition of the term

Another Term
: Another definition

## 14. Emojis

You can use emojis in your Markdown:
- :smile:
- :thumbsup:
- :sparkles:

## 15. Math Expressions

Inline math: $E = mc^2$

Block math:
$$
\sum_{i=1}^n (a_i + b_i)
$$

## 16. Extended Syntax (if supported)

### Task Lists
- [ ] Task 1
- [x] Task 2

### Emoji
You can use emoji like :smiley: :+1: :sparkles:

### Highlight
==Highlighted text==

## 17. Embedded Media

### YouTube Video
<div>
<iframe width=100% height="315" src="https://www.youtube.com/embed/BCAGgwaPiaE?si=DeB6y7J4brncmiCP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Bandcamp Song
<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3943313878/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://nzenze.bandcamp.com/album/adzi-akal">Adzi Akal by NZE NZE</a></iframe>

### Spotify Song
<iframe src="https://open.spotify.com/embed/track/TRACK_ID" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
