const beep = function () {
  const args = process.argv.slice(2);
  if (args.length === 0) return;

  for (let i = 0; i < args.length; i++) {
    const currentItem = args[i];

    if (currentItem < 1 || isNaN(currentItem)) continue;

    setTimeout(() => {
      process.stdout.write("\x07");
    }, 1000 * currentItem);
  }
};

beep();
