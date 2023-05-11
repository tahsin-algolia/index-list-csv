require('dotenv').config();
const fs = require('fs');
const algoliasearch = require('algoliasearch');

// Connect and authenticate with your Algolia app
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
);

// Convert JS object to CSV format
const objectsToCSV = (arr) => {
  const array = [Object.keys(arr[0])].concat(arr)
  return array.map(row => {
      return Object.values(row).map(value => {
          return typeof value === 'string' ? JSON.stringify(value) : value
      }).toString()
  }).join('\n')
};

let indices = [];
client.listIndices().then(({ items }) => {
  indices = items
    .map(({ name, entries, dataSize }) => (
      {
        'Index Name': name,
        'Number of Entries': entries,
        'Total Data Size': dataSize
      }
    ));
  indicesCsv = objectsToCSV(indices);
  fs.writeFile(process.env.CSV_FILE_NAME, indicesCsv, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});
