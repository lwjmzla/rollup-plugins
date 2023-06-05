const hello = (name) => {
  console.log(name + ' is 42');
};

var version = "1.0.0";

document.getElementById('root').innerHTML = hello('lwj') + version;
