for (x = 100; x < 201; x++) {
  if (x % 3 === 0) {
    console.log ("Loopy")
  } else if (x % 4 === 0) {
    console.log ("Lighthouse")
  } else if (x % 3 === 0 && x % 4 === 0) {
    console.log ("Loopy Lighthouse")
  }
}