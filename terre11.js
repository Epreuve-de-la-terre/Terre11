#! node

const arg = process.argv[2];
const chi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = 0;
let win;

function premier(arg) {
  if (arg % 1 !== 0) {
    console.log("Veuillez indiquer un chiffre entier en argument");
    return;
  }

  if (arg == 0 || arg == 1) {
    console.log(arg + " n'est pas un nombre premier");
    win = false;
  }

  for (let x = 2; x < chi.length; x++) {
    if ((arg / chi[x]) % 1 == 0) {
      res++;
    }
  }

  if (arg <= 10 && res > 1) {
    console.log(arg + " n'est pas un nombre premier");
    win = false;
  } else if (arg > 10 && res >= 1) {
    console.log(arg + " n'est pas un nombre premier");
    win = false;
  } else {
    console.log(arg + " est un nombre premier");
    win = true;
  }
  return win;
}

premier(arg);
