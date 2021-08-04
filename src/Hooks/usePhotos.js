import Firebase from '../firebase'
import 'firebase/storage'

export function usePhotos (photos, id) {
  Firebase.storage()
    .ref()
    .child('images/' + photos)
    .getDownloadURL()
    .then(url => {
      const img = document.querySelector(`#property${id}`)
      return img.setAttribute('src', url)
    })
}
