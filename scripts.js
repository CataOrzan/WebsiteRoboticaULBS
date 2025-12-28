function call() {
  const inputs = [0, 1, 2, 3, 4, 5].map(
    (i) => document.getElementById(`nr${i}`).value
  );
  const numbers = inputs.map((input) => Number(input));
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const cred = numbers.reduce(
    (acc, n, i) => acc + n * [4, 2, 4, 5, 5, 10][i],
    0
  );
  const pond = (cred / 300) * 10;
  const avg = sum / 6;

  document.getElementById("art").innerHTML = parseFloat(avg).toFixed(2);
  document.getElementById("pnd").innerHTML = parseFloat(pond).toFixed(2);
}

function toggleULBS() {
  var ulbs = document.querySelector('.ulbs');
  ulbs.style.display = document.getElementById('active').checked ? 'none' : 'block';
}
