import { Client, Databases } from 'appwrite'

const client = new Client()
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') 
    .setProject('680fafac00242d98475b')         

const databases = new Databases(client)
const DATABASE_ID = '681dd3e00012e34b8c66'
const COLLECTION_ID = '681dd3ea00298918b1bb'

export function salvaEmail(email) {
  databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    'unique()',
    {
      email: email
    }
  )
  .then((response) => {
    console.log('Email salvata:', response)
  })
  .catch((error) => {
    console.error('Errore durante il salvataggio dell\'email:', error)
  })
}

