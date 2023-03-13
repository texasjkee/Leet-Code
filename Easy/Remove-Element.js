const removeElement = function (num, value) {
  let counter = 0;
  for (let i = 0; i < num.length; i++) {
      if (num[i] !== value) {
          num[counter++] = num[i];
      }
  }

  return counter;
};