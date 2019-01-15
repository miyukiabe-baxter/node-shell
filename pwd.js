

  if (cmd === "pwd") {
    let directoryInfo = (process.cwd());
    process.stdout.write(`Current Directory: ${directoryInfo}`);
    process.stdout.write('promot > ')
  } 

});
