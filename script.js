function generatePDF() {
  // Choose the element that our invoice is rendered in.
  const element = document.getElementById('imprimir')
  // Choose the element and save the PDF for our user.
  html2pdf().from(element).save()
}
