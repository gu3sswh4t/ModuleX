document.addEventListener('DOMContentLoaded', () => {
  
  const pdfs = [
    { name: 'Empowerment Technologies Q3 Module 1', path: 'pdfs/Q3Empowerment1.pdf' },
    { name: 'Empowerment Technologies Q3 Module 2', path: 'pdfs/Q3Empowerment2.pdf' },
    { name: 'Empowerment Technologies Q3 Module 3', path: 'pdfs/Q3Empowerment3.pdf' },
    { name: 'Empowerment Technologies Q3 Module 4', path: 'pdfs/Q3Empowerment4.pdf' },
    { name: 'Empowerment Technologies Q3 Module 5', path: 'pdfs/Q3Empowerment5.pdf' },
    { name: 'Empowerment Technologies Q3 Module 6', path: 'pdfs/Q3Empowerment6.pdf' },
    { name: 'Empowerment Technologies Q3 Module 7', path: 'pdfs/Q3Empowerment7.pdf' },
    { name: 'Empowerment Technologies Q3 Module 8', path: 'pdfs/Q3Empowerment8.pdf' },
    { name: 'Empowerment Technologies Q4 Module 1', path: 'pdfs/Q4EmpowermentModule1.pdf' },
    { name: 'Empowerment Technologies Q4 Module 2', path: 'pdfs/Q4EmpowermentModule2.pdf' },
    { name: 'Empowerment Technologies Q4 Module 3', path: 'pdfs/Q4EmpowermentModule3.pdf' },
    { name: 'Empowerment Technologies Q4 Module 4', path: 'pdfs/Q4EmpowermentModule4.pdf' },
    { name: 'Empowerment Technologies Q4 Module 5-6', path: 'pdfs/Q4EmpowermentModule5-6.pdf' },
  { name: 'MIL Q1 Module 1', path: 'pdfs/MILQ1Module1.pdf' },
  { name: 'MIL Q1 Module 2', path: 'pdfs/MILQ1Module2.pdf' },
  { name: 'MIL Q1 Module 3', path: 'pdfs/MILQ1Module3.pdf' },
  { name: 'MIL Q1 Module 4', path: 'pdfs/MILQ1Module4.pdf' },
  { name: 'MIL Q1 Module 5', path: 'pdfs/MILQ1Module5.pdf' },
  { name: 'MIL Q1 Module 6', path: 'pdfs/MILQ1Module6.pdf' },
  { name: 'MIL Q1 Module 7', path: 'pdfs/MILQ1Module7.pdf' },
  { name: 'MIL Q1 Module 8', path: 'pdfs/MILQ1Module8.pdf' },
{ name: 'MIL Q2 Module 1', path: 'pdfs/MILQ2Module1.pdf' },
{ name: 'MIL Q2 Module 2', path: 'pdfs/MILQ2Module2.pdf' },
{ name: 'MIL Q2 Module 3', path: 'pdfs/MILQ2Module3.pdf' },
{ name: 'MIL Q2 Module 4', path: 'pdfs/MILQ2Module4.pdf' },
{ name: 'MIL Q2 Module 5', path: 'pdfs/MILQ2Module5.pdf' },
{ name: 'MIL Q2 Module 6', path: 'pdfs/MILQ2Module6.pdf' },
{ name: 'MIL Q2 Module 7', path: 'pdfs/MILQ2Module7.pdf' },
{ name: 'MIL Q2 Module 8', path: 'pdfs/MILQ2Module8.pdf' },



  ];

  // Select DOM elements
  const pdfList = document.getElementById('pdfList');
  const searchInput = document.getElementById('searchInput');

  // Function to display the list of PDFs
  const displayPDFs = (pdfArray) => {
    pdfList.innerHTML = ''; // Clear current list
    pdfArray.forEach((pdf) => {
      const li = document.createElement('li');

      const link = document.createElement('a');
      link.href = pdf.path;
      link.target = '_blank';
      link.textContent = pdf.name;

      const downloadBtn = document.createElement('button');
      downloadBtn.textContent = 'Download';
      downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const a = document.createElement('a');
        a.href = pdf.path;
        a.download = pdf.name;
        a.click();
      });

      li.appendChild(link);
      li.appendChild(downloadBtn);
      pdfList.appendChild(li);
    });
  };

  // Display all PDFs on page load
  displayPDFs(pdfs);

  // Real-time search function
  const searchPDFs = () => {
    const query = searchInput.value.toLowerCase();
    const filteredPDFs = pdfs.filter((pdf) =>
      pdf.name.toLowerCase().includes(query)
    );
    displayPDFs(filteredPDFs);
  };

  // Event listener for real-time search
  searchInput.addEventListener('input', searchPDFs);
});
