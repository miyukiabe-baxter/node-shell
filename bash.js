process.stdout.write("prompt > ");

process.stdin.on("data", data => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    let directoryInfo = process.cwd();
    //console.log(directoryInfo);
    process.stdout.write(`Current Directory: ${directoryInfo}`);
  }

  // process.stdout.write("You typed: " + cmd);
  // process.stdout.write("\nprompt > ");
});
