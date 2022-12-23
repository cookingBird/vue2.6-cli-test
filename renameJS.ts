import * as shellJs from 'shelljs';
shellJs
  .find('src')
  .filter((file) => file.match(/\.jsx?$/))
  .forEach((file) => {
    let newName = file.replace(/\.j(sx?)$/, '.t$1');
    shellJs.mv(file, newName);
  });
