//refer this article
//https://medium.com/@pyrolistical/how-to-get-out-of-promise-hell-8c20e0ab0513

//A typical example is Promises that depend on each other. Let’s say we have 3 Promises that depend on each other linearly: fetchBook(), formatBook(book), and print(postscript). The naïve code is:

fetchBook().then((book) => {
  return formatBook(book).then((postscript) => {
    return print(postscript);
  });
});
//The nesting is unnecessary, which simplies the code to:

fetchBook()
  .then((book) => {
    return formatBook(book);
  })
  .then((postscript) => {
    return print(postscript);
  });
//Since these are single liners, the curly braces and return can be omitted.

fetchBook()
  .then((book) => formatBook(book))
  .then((postscript) => print(postscript));
//ut then we notice we have an identity function! We can just inline the function:

fetchBook().then(formatBook).then(print);
