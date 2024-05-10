function calculate() {
  var nama = document.getElementById('nama').value;
  var targetDasar = 50000;
  var totalBerlian = parseFloat(document.getElementById('totalBerlian').value);
  var hargaBerlian = parseFloat(document.getElementById('hargaBerlian').value);

  if (isNaN(totalBerlian)) {
    alert("Masukkan total berlian yang valid.");
    return;
  }

  if (totalBerlian < targetDasar) { // Tambahkan kondisi untuk memeriksa apakah total berlian kurang dari target dasar
    alert("Total berlian harus lebih besar atau sama dengan target dasar.");
    return;
  }

  var hasil = (totalBerlian - targetDasar) * hargaBerlian;

  if (hasil < 0) {
    alert("Target dasar tidak tercapai, hasil penjumlahan tidak dapat dihitung.");
    return;
  }

  var table = document.getElementById('result');
  var newRow = table.insertRow(-1);
  var cellNama = newRow.insertCell(0);
  var cellHasil = newRow.insertCell(1);
  cellNama.innerHTML = nama;
  cellHasil.innerHTML = formatCurrency(hasil);
}

function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString('id-ID', { maximumFractionDigits: 2 });
}