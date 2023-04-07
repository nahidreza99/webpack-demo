import _ from 'lodash';

console.log(toml.title); // output 'TOML Example'
console.log(toml.owner.name); // output 'Tom Preston-Werner'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
