const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            Not Rated
            <br />
            <h2>Description</h2>
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            <div>
              <h2>Comments</h2>
              <h3>No comments yet!</h3>
            </div>
          </div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

//Part 6.5.1

module.exports = show;
