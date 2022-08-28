const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <image src="/images/sadpug.jpg" alt="sad pug"></image>
        Photo by{" "}
        <a href="https://unsplash.com/@matthewhenry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Matthew Henry
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/sad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </main>
    </Def>
  );
}

module.exports = error404;
