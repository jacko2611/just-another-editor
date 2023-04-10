import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const txtEditorDB = await openDB('jate', 1);
  const transVar = txtEditorDB.transaction('jate', 'readwrite');
  const storeVar = transVar.objectStore('jate');
  const request = storeVar.put({ id: 1, value: content});

  const result = await request;
  console.log(`Data has been saved to the database with id ${result}`);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const txtEditorDB = await openDB('jate', 'readonly');
  const storeVar = transVar.objectStore('jate');
  const request = storeVar.get(1);
  const result = await request;
  result
    ? console.log(`Data has been retrieved from the database with id ${result}`)
    : console.log('No data found in the database');
};

initdb();
