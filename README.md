# Algolia Script for listing all the indices and exporting to CSV file

This is a simple Node.js script to retrieve the list of indices for an Algolia application and then writing the contents to a csv file in the same directory

## Usage
1. Create a `.env` file at the root directory
2. Add the following environment variables

```
  ALGOLIA_APP_ID="<ALGOLIA_APP_ID>"
  ALGOLIA_WRITE_API_KEY="<ALGOLIA_WRITE_API_KEY>"
  CSV_FILE_NAME="<CSV_FILE_NAME>"
```

3. Install the NPM dependencies

```bash
   npm install
   ```

4. Run the script

```bash
   node index.js
   ```
