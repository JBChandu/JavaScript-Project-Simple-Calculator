function insert(num) {
  document.form.textview.value += num;
}

function equals() {
  document.form.textview.value = eval(document.form.textview.value);
}

function clean() {
  document.form.textview.value = "";
}

function back() {
  let temp = document.form.textview.value;
  document.form.textview.value = temp.substr(0, temp.length - 1);
}
