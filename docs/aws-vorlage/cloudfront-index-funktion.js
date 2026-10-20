// CloudFront Function (Viewer Request) fuer statische Astro-Seiten auf S3.
// S3 liefert bei /en/services/ von sich aus keine index.html aus.
// Diese Funktion haengt sie an, damit alle Unterseiten in allen Sprachen funktionieren.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.split('/').pop().includes('.')) {
    // /kontakt -> /kontakt/ (sauberer Link fuer Google)
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: { location: { value: uri + '/' } },
    };
  }
  return request;
}
