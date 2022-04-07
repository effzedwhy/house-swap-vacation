import Firebase from '../firebase'

export async function useAllData () {
  const data = await Firebase.database()
    .ref('newListing')
    .get()
    return data.val()
}
