import Firebase from '../firebase'

export async function useAllData () {
  const data = await Firebase.database()
    .ref('newListing')
    .get()
  console.log(data.val)
  return data.val()
}