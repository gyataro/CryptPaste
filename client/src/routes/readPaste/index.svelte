<script>
    let source = [
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "lines",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
        "first line",
        "   indented line followed by empty line",
        "the following line consists of one single space",
        " ",
        "this line has a space at the end ",
        "&#9;and one leading and ending tab&#9;",
        "fill to",
        "ten",
    ]
</script>

<pre class="code">
    {#each source as i}
        <code>{i}</code>
    {/each}
</pre>

<style>
pre.code {
  white-space: pre-wrap;
  margin-left: 8em;
}

pre.code::before {
  counter-reset: listing;
}

pre.code code {
  counter-increment: listing;
  text-align: left;
  float: left;
  clear: left;
}

pre.code code::before {
  content: counter(listing) ". ";
  float: left;
  height: 3em;
  padding-left: auto;
  margin-left: auto;
  text-align: right;
}
</style>