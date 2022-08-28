const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
        <image src="/images/panini.jpg" alt="Panini"></image>
        <div>
          Photo by <a href="https://unsplash.com/@riaquartz">Ria Quartz</a> on{" "}
          <a href="https://unsplash.com/">Unsplash</a>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
