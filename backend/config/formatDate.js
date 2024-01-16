//fungsi untuk mengubah format tanggal menjadi DD MMMM YYYY
function formatDate(date) {
    const options = { day: '2-digit', month: 'long', year: 'numeric' }
    return new Date(date).toLocaleDateString('id-ID', options)
  }
  
  module.exports = { formatDate }