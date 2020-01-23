const endpoint = "http://localhost:9000/api/trekbikes";

class fetchTrekBikes {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all trek bikes\n", err));
  };

  // Not sure if this works yet
  // static getOne = rowid => {
  //   return fetch(`${endpoint}/${rowid}`)
  //     .then(response => {
  //       response.json();
  //     })
  //     .then(x => {
  //       return x;
  //       console.log("X: ", x[0]);
  //     })
  //     .catch(err => console.log("Could not get bike make \n", err));
  // };
}

export default fetchTrekBikes;