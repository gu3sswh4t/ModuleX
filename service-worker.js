const CACHE_NAME = 'ModuleX-cache-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',

  'pdfs/Q3Empowerment1.pdf',
  'pdfs/Q3Empowerment2.pdf',
  'pdfs/Q3Empowerment3.pdf',
  'pdfs/Q3Empowerment4.pdf',
  'pdfs/Q3Empowerment5.pdf',
  'pdfs/Q3Empowerment6.pdf',
  'pdfs/Q3Empowerment7.pdf',
  'pdfs/Q3Empowerment8.pdf',
  'pdfs/Q4EmpowermentModule1.pdf',
  'pdfs/Q4EmpowermentModule2.pdf',
  'pdfs/Q4EmpowermentModule3.pdf',
  'pdfs/Q4EmpowermentModule4.pdf',
  'pdfs/Q4EmpowermentModule5-6.pdf',

'pdfs/MILQ1Module1.pdf',
'pdfs/MILQ1Module2.pdf',
'pdfs/MILQ1Module3.pdf',
'pdfs/MILQ1Module4.pdf',
'pdfs/MILQ1Module5.pdf',
'pdfs/MILQ1Module6.pdf',
'pdfs/MILQ1Module7.pdf',
'pdfs/MILQ1Module8.pdf',
	'pdfs/MILQ2Module1.pdf',
	'pdfs/MILQ2Module2.pdf',
	'pdfs/MILQ2Module3.pdf',
	'pdfs/MILQ2Module4.pdf',
	'pdfs/MILQ2Module5.pdf',
	'pdfs/MILQ2Module6.pdf',
	'pdfs/MILQ2Module7.pdf',
	'pdfs/MILQ2Module8.pdf',

	'pdfs/Math7Q1Module1.pdf',
	'pdfs/Math7Q1Module2.pdf',
	'pdfs/Math7Q1Module3.pdf',
	'pdfs/Math7Q1Module4.pdf',
	'pdfs/Math7Q1Module5.pdf',
	'pdfs/Math7Q1Module6.pdf',
	'pdfs/Math7Q1Module7.pdf',
	'pdfs/Math7Q1Module8.pdf',
	'pdfs/Math7Q1Module9.pdf',
	'pdfs/Math7Q1Module10.pdf',

	'pdfs/Math7Q2Module1.pdf',
	'pdfs/Math7Q2Module2.pdf',
	'pdfs/Math7Q2Module3.pdf',
	'pdfs/Math7Q2Module4.pdf',
	'pdfs/Math7Q2Module5.pdf',
	'pdfs/Math7Q2Module6.pdf',

	'pdfs/Math7Q3Module1.pdf',
	'pdfs/Math7Q3Module2.pdf',
	'pdfs/Math7Q3Module3.pdf',
	'pdfs/Math7Q3Module4.pdf',
	'pdfs/Math7Q3Module5.pdf',
	'pdfs/Math7Q3Module6.pdf',
	'pdfs/Math7Q3Module7.pdf',
	
	'pdfs/Math7Q4Module1.pdf',
	'pdfs/Math7Q4Module2.pdf',
	'pdfs/Math7Q4Module3.pdf',
	'pdfs/Math7Q4Module4.pdf',
	'pdfs/Math7Q4Module5.pdf',
	'pdfs/Math7Q4Module6.pdf',
	
	'pdfs/IntroductionToWorldReligionsQ1Module1.pdf',
	'pdfs/IntroductionToWorldReligionsQ1Module2.pdf',
	'pdfs/IntroductionToWorldReligionsQ1Module3.pdf',
	'pdfs/IntroductionToWorldReligionsQ1Module4.pdf',
	'pdfs/IntroductionToWorldReligionsQ1Module5.pdf',
	'pdfs/IntroductionToWorldReligionsQ1Module6.pdf',
	'pdfs/IntroductionToWorldReligionsQ1Module7.pdf',
	'pdfs/IntroductionToWorldReligionsQ1Module8.pdf',
	'pdfs/IntroductionToWorldReligionsQ1Module9.pdf',

	'pdfs/IntroductionToWorldReligionsQ2Module10.pdf',
	'pdfs/IntroductionToWorldReligionsQ2Module11.pdf',
	'pdfs/IntroductionToWorldReligionsQ2Module12.pdf',
	'pdfs/IntroductionToWorldReligionsQ2Module13.pdf',
	'pdfs/IntroductionToWorldReligionsQ2Module14.pdf',
	'pdfs/IntroductionToWorldReligionsQ2Module15.pdf',

	'pdfs/ESP7Q1MODULE1.pdf',
	'pdfs/ESP7Q1MODULE2.pdf',
	'pdfs/ESP7Q1MODULE3.pdf',
	'pdfs/ESP7Q1MODULE4.pdf',
	'pdfs/ESP7Q1MODULE5.pdf',
	'pdfs/ESP7Q1MODULE6.pdf',
	'pdfs/ESP7Q1MODULE7.pdf',
	'pdfs/ESP7Q1MODULE8.pdf',

	'pdfs/ESP7Q2MODULE5A.pdf',
	'pdfs/ESP7Q2MODULE5B.pdf',
	'pdfs/ESP7Q2MODULE6A.pdf',
	'pdfs/ESP7Q2MODULE6B.pdf',
	'pdfs/ESP7Q2MODULE7A.pdf',
	'pdfs/ESP7Q2MODULE7B.pdf',
	'pdfs/ESP7Q2MODULE8A.pdf',
	'pdfs/ESP7Q2MODULE8B.pdf',

	'pdfs/ESP7Q3MODULE1.pdf',
	'pdfs/ESP7Q3MODULE2.pdf',
	'pdfs/ESP7Q3MODULE3.pdf',
	'pdfs/ESP7Q3MODULE4.pdf',
	'pdfs/ESP7Q3MODULE5.pdf',
	'pdfs/ESP7Q3MODULE6.pdf',
	'pdfs/ESP7Q3MODULE7.pdf',
	'pdfs/ESP7Q3MODULE8.pdf',

	'pdfs/ESP7Q4MODULE1.pdf',
	'pdfs/ESP7Q4MODULE2.pdf',
	'pdfs/ESP7Q4MODULE3.pdf',
	'pdfs/ESP7Q4MODULE4.pdf',
	'pdfs/ESP7Q4MODULE5.pdf',
	'pdfs/ESP7Q4MODULE6.pdf',
	'pdfs/ESP7Q4MODULE7.pdf',
	'pdfs/ESP7Q4MODULE8.pdf',

        'pdfs/HOUSEKEEPINGQ1MODULE1.pdf',
	'pdfs/HOUSEKEEPINGQ1MODULE2.pdf',
	'pdfs/HOUSEKEEPINGQ1MODULE3.pdf',
	'pdfs/HOUSEKEEPINGQ1MODULE4.pdf',
	'pdfs/HOUSEKEEPINGQ1MODULE5.pdf',
	'pdfs/HOUSEKEEPINGQ1MODULE6.pdf',
	'pdfs/HOUSEKEEPINGQ1MODULE7.pdf',
	'pdfs/HOUSEKEEPINGQ1MODULE8.pdf',

        'pdfs/HOUSEKEEPINGQ2MODULE1.pdf',
	'pdfs/HOUSEKEEPINGQ2MODULE2.pdf',
	'pdfs/HOUSEKEEPINGQ2MODULE3.pdf',
	'pdfs/HOUSEKEEPINGQ2MODULE4.pdf',

	'pdfs/HOUSEKEEPINGQ3MODULE1.pdf',
	'pdfs/HOUSEKEEPINGQ3MODULE2.pdf',
	'pdfs/HOUSEKEEPINGQ3MODULE3.pdf',

	'pdfs/HOUSEKEEPINGQ4MODULE1.pdf',
	'pdfs/HOUSEKEEPINGQ4MODULE2.pdf',
	'pdfs/HOUSEKEEPINGQ4MODULE3.pdf',
	
	
	
	
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all assets');
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
