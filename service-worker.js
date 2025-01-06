const CACHE_NAME = 'slm-pdf-cache-v1';
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
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache-name')
      .then((cache) => {
        return Promise.all([
          cache.put('index.html', new Request('index.html')),
          cache.put('style.css', new Request('style.css')),
          cache.put('app.js', new Request('app.js')),
          cache.put('manifest.json', new Request('manifest.json')),
          cache.put('service-worker.js', new Request('service-worker.js')),
        ]);
      })
      .then(() => {
        
        this.cachedFiles = 5; 

      
        clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({ 
              type: 'cacheProgress', 
              cachedFiles: this.cachedFiles, 
              totalFiles: this.totalFiles 
            });
          });
        });
      })
  );
});
