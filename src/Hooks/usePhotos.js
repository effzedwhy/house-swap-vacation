import Firebase from '../firebase'
import 'firebase/storage'
import { useQuery } from 'react-query'

export function useIDPhoto (photo) {
  const { isLoading, error, data } = useQuery('photo', () =>
    Firebase.storage()
      .ref()
      .child('images/' + `${photo}`)
      .getDownloadURL()
  )
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
console.log(data)
  return data

}
