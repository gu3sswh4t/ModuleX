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


        { name: 'MATH 7 Q1 Module 1', path: 'pdfs/Math7Q1Module1.pdf' },
        { name: 'MATH 7 Q1 Module 2', path: 'pdfs/Math7Q1Module2.pdf' },
        { name: 'MATH 7 Q1 Module 3', path: 'pdfs/Math7Q1Module3.pdf' },
        { name: 'MATH 7 Q1 Module 4', path: 'pdfs/Math7Q1Module4.pdf' },
        { name: 'MATH 7 Q1 Module 5', path: 'pdfs/Math7Q1Module5.pdf' },
        { name: 'MATH 7 Q1 Module 6', path: 'pdfs/Math7Q1Module6.pdf' },
        { name: 'MATH 7 Q1 Module 7', path: 'pdfs/Math7Q1Module7.pdf' },
        { name: 'MATH 7 Q1 Module 8', path: 'pdfs/Math7Q1Module8.pdf' },
        { name: 'MATH 7 Q1 Module 9', path: 'pdfs/Math7Q1Module9.pdf' },
        { name: 'MATH 7 Q1 Module 10', path: 'pdfs/Math7Q1Module10.pdf' },
    

        { name: 'MATH 7 Q2 Module 1', path: 'pdfs/Math7Q2Module1.pdf' },
        { name: 'MATH 7 Q2 Module 2', path: 'pdfs/Math7Q2Module2.pdf' },
        { name: 'MATH 7 Q2 Module 3', path: 'pdfs/Math7Q2Module3.pdf' },
        { name: 'MATH 7 Q2 Module 4', path: 'pdfs/Math7Q2Module4.pdf' },
        { name: 'MATH 7 Q2 Module 5', path: 'pdfs/Math7Q2Module5.pdf' },
        { name: 'MATH 7 Q2 Module 6', path: 'pdfs/Math7Q2Module6.pdf' },

   
        { name: 'MATH 7 Q3 Module 1', path: 'pdfs/Math7Q3Module1.pdf' },
        { name: 'MATH 7 Q3 Module 2', path: 'pdfs/Math7Q3Module2.pdf' },
        { name: 'MATH 7 Q3 Module 3', path: 'pdfs/Math7Q3Module3.pdf' },
        { name: 'MATH 7 Q3 Module 4', path: 'pdfs/Math7Q3Module4.pdf' },
        { name: 'MATH 7 Q3 Module 5', path: 'pdfs/Math7Q3Module5.pdf' },
        { name: 'MATH 7 Q3 Module 6', path: 'pdfs/Math7Q3Module6.pdf' },
        { name: 'MATH 7 Q3 Module 7', path: 'pdfs/Math7Q3Module7.pdf' },
  

        { name: 'MATH 7 Q4 Module 1', path: 'pdfs/Math7Q4Module1.pdf' },
        { name: 'MATH 7 Q4 Module 2', path: 'pdfs/Math7Q4Module2.pdf' },
        { name: 'MATH 7 Q4 Module 3', path: 'pdfs/Math7Q4Module3.pdf' },
        { name: 'MATH 7 Q4 Module 4', path: 'pdfs/Math7Q4Module4.pdf' },
        { name: 'MATH 7 Q4 Module 5', path: 'pdfs/Math7Q4Module5.pdf' },
        { name: 'MATH 7 Q4 Module 6', path: 'pdfs/Math7Q4Module6.pdf' },

    
        { name: 'Introduction To World Religions Q1 Module 1', path: 'pdfs/IntroductionToWorldReligionsQ1Module1.pdf' },
        { name: 'Introduction To World Religions Q1 Module 2', path: 'pdfs/IntroductionToWorldReligionsQ1Module2.pdf' },
        { name: 'Introduction To World Religions Q1 Module 3', path: 'pdfs/IntroductionToWorldReligionsQ1Module3.pdf' },
        { name: 'Introduction To World Religions Q1 Module 4', path: 'pdfs/IntroductionToWorldReligionsQ1Module4.pdf' },
        { name: 'Introduction To World Religions Q1 Module 5', path: 'pdfs/IntroductionToWorldReligionsQ1Module5.pdf' },
        { name: 'Introduction To World Religions Q1 Module 6', path: 'pdfs/IntroductionToWorldReligionsQ1Module6.pdf' },
        { name: 'Introduction To World Religions Q1 Module 7', path: 'pdfs/IntroductionToWorldReligionsQ1Module7.pdf' },
        { name: 'Introduction To World Religions Q1 Module 8', path: 'pdfs/IntroductionToWorldReligionsQ1Module8.pdf' },
        { name: 'Introduction To World Religions Q1 Module 9', path: 'pdfs/IntroductionToWorldReligionsQ1Module9.pdf' },
       
        { name: 'Introduction To World Religions Q2 Module 10', path: 'pdfs/IntroductionToWorldReligionsQ2Module10.pdf' },
        { name: 'Introduction To World Religions Q2 Module 11', path: 'pdfs/IntroductionToWorldReligionsQ2Module11.pdf' },
        { name: 'Introduction To World Religions Q2 Module 12', path: 'pdfs/IntroductionToWorldReligionsQ2Module12.pdf' },
        { name: 'Introduction To World Religions Q2 Module 13', path: 'pdfs/IntroductionToWorldReligionsQ2Module13.pdf' },
        { name: 'Introduction To World Religions Q2 Module 14', path: 'pdfs/IntroductionToWorldReligionsQ2Module14.pdf' },
        { name: 'Introduction To World Religions Q2 Module 15', path: 'pdfs/IntroductionToWorldReligionsQ2Module15.pdf' },


        { name: 'ESP 7 Q1 MODULE 1', path: 'pdfs/ESP7Q1MODULE1.pdf' },
        { name: 'ESP 7 Q1 MODULE 2', path: 'pdfs/ESP7Q1MODULE2.pdf' },
        { name: 'ESP 7 Q1 MODULE 3', path: 'pdfs/ESP7Q1MODULE3.pdf' },
        { name: 'ESP 7 Q1 MODULE 4', path: 'pdfs/ESP7Q1MODULE4.pdf' },
        { name: 'ESP 7 Q1 MODULE 5', path: 'pdfs/ESP7Q1MODULE5.pdf' },
        { name: 'ESP 7 Q1 MODULE 6', path: 'pdfs/ESP7Q1MODULE6.pdf' },
        { name: 'ESP 7 Q1 MODULE 7', path: 'pdfs/ESP7Q1MODULE7.pdf' },
        { name: 'ESP 7 Q1 MODULE 8', path: 'pdfs/ESP7Q1MODULE8.pdf' },

        { name: 'ESP 7 Q2 MODULE 5 a', path: 'pdfs/ESP7Q2MODULE5A.pdf' },
        { name: 'ESP 7 Q2 MODULE 5 b', path: 'pdfs/ESP7Q2MODULE5B.pdf' },
        { name: 'ESP 7 Q2 MODULE 6 a', path: 'pdfs/ESP7Q2MODULE6A.pdf' },
        { name: 'ESP 7 Q2 MODULE 6 b', path: 'pdfs/ESP7Q2MODULE6B.pdf' },
        { name: 'ESP 7 Q2 MODULE 7 a', path: 'pdfs/ESP7Q2MODULE7A.pdf' },
        { name: 'ESP 7 Q2 MODULE 7 b', path: 'pdfs/ESP7Q2MODULE7B.pdf' },
        { name: 'ESP 7 Q2 MODULE 8 a', path: 'pdfs/ESP7Q2MODULE8A.pdf' },
        { name: 'ESP 7 Q2 MODULE 8 b', path: 'pdfs/ESP7Q2MODULE8B.pdf' },

        { name: 'ESP 7 Q3 MODULE 1', path: 'pdfs/ESP7Q3MODULE1.pdf' },
        { name: 'ESP 7 Q3 MODULE 2', path: 'pdfs/ESP7Q3MODULE2.pdf' },
        { name: 'ESP 7 Q3 MODULE 3', path: 'pdfs/ESP7Q3MODULE3.pdf' },
        { name: 'ESP 7 Q3 MODULE 4', path: 'pdfs/ESP7Q3MODULE4.pdf' },
        { name: 'ESP 7 Q3 MODULE 5', path: 'pdfs/ESP7Q3MODULE5.pdf' },
        { name: 'ESP 7 Q3 MODULE 6', path: 'pdfs/ESP7Q3MODULE6.pdf' },
        { name: 'ESP 7 Q3 MODULE 7', path: 'pdfs/ESP7Q3MODULE7.pdf' },
        { name: 'ESP 7 Q3 MODULE 8', path: 'pdfs/ESP7Q3MODULE8.pdf' },

        { name: 'ESP 7 Q4 MODULE 1', path: 'pdfs/ESP7Q4MODULE1.pdf' },
        { name: 'ESP 7 Q4 MODULE 2', path: 'pdfs/ESP7Q4MODULE2.pdf' },
        { name: 'ESP 7 Q4 MODULE 3', path: 'pdfs/ESP7Q4MODULE3.pdf' },
        { name: 'ESP 7 Q4 MODULE 4', path: 'pdfs/ESP7Q4MODULE4.pdf' },
        { name: 'ESP 7 Q4 MODULE 5', path: 'pdfs/ESP7Q4MODULE5.pdf' },
        { name: 'ESP 7 Q4 MODULE 6', path: 'pdfs/ESP7Q4MODULE6.pdf' },
        { name: 'ESP 7 Q4 MODULE 7', path: 'pdfs/ESP7Q4MODULE7.pdf' },
        { name: 'ESP 7 Q4 MODULE 8', path: 'pdfs/ESP7Q4MODULE8.pdf' },



        { name: 'HOUSEKEEPING Q1 MODULE 1', path: 'pdfs/HOUSEKEEPINGQ1MODULE1.pdf' },
        { name: 'HOUSEKEEPING Q1 MODULE 2', path: 'pdfs/HOUSEKEEPINGQ1MODULE2.pdf' },
        { name: 'HOUSEKEEPING Q1 MODULE 3', path: 'pdfs/HOUSEKEEPINGQ1MODULE3.pdf' },
        { name: 'HOUSEKEEPING Q1 MODULE 4', path: 'pdfs/HOUSEKEEPINGQ1MODULE4.pdf' },
        { name: 'HOUSEKEEPING Q1 MODULE 5', path: 'pdfs/HOUSEKEEPINGQ1MODULE5.pdf' },
        { name: 'HOUSEKEEPING Q1 MODULE 6', path: 'pdfs/HOUSEKEEPINGQ1MODULE6.pdf' },
        { name: 'HOUSEKEEPING Q1 MODULE 7', path: 'pdfs/HOUSEKEEPINGQ1MODULE7.pdf' },
        { name: 'HOUSEKEEPING Q1 MODULE 8', path: 'pdfs/HOUSEKEEPINGQ1MODULE8.pdf' },

        { name: 'HOUSEKEEPING Q2 MODULE 1', path: 'pdfs/HOUSEKEEPINGQ2MODULE1.pdf' },
        { name: 'HOUSEKEEPING Q2 MODULE 2', path: 'pdfs/HOUSEKEEPINGQ2MODULE2.pdf' },
        { name: 'HOUSEKEEPING Q2 MODULE 3', path: 'pdfs/HOUSEKEEPINGQ2MODULE3.pdf' },
        { name: 'HOUSEKEEPING Q2 MODULE 4', path: 'pdfs/HOUSEKEEPINGQ2MODULE4.pdf' },
            
        { name: 'HOUSEKEEPING Q3 MODULE 1', path: 'pdfs/HOUSEKEEPINGQ3MODULE1.pdf' },
        { name: 'HOUSEKEEPING Q3 MODULE 2', path: 'pdfs/HOUSEKEEPINGQ3MODULE2.pdf' },
        { name: 'HOUSEKEEPING Q3 MODULE 3', path: 'pdfs/HOUSEKEEPINGQ3MODULE3.pdf' },

        { name: 'HOUSEKEEPING Q4 MODULE 1', path: 'pdfs/HOUSEKEEPINGQ4MODULE1.pdf' },
        { name: 'HOUSEKEEPING Q4 MODULE 2', path: 'pdfs/HOUSEKEEPINGQ4MODULE2.pdf' },
        { name: 'HOUSEKEEPING Q4 MODULE 3', path: 'pdfs/HOUSEKEEPINGQ4MODULE3.pdf' },
   
        

    
  ];

  const pdfList = document.getElementById('pdfList');
  const searchInput = document.getElementById('searchInput');

  const displayPDFs = (pdfArray) => {
    pdfList.innerHTML = ''; 
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

  displayPDFs(pdfs);

  const searchPDFs = () => {
    const query = searchInput.value.toLowerCase();
    const filteredPDFs = pdfs.filter((pdf) =>
      pdf.name.toLowerCase().includes(query)
    );
    displayPDFs(filteredPDFs);
  };

  searchInput.addEventListener('input', searchPDFs);
});
