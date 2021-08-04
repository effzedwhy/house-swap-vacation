import { useState, useEffect } from 'react'
import Firebase from '../firebase'

export function useAllData () {
  const [listing, setListing] = useState('')

  useEffect(() => {
    async function getData () {
      try {
        const data = Firebase.database().ref('newListing')
        data.on('value', snapshot => {
          if (snapshot.val())
            setListing({
              ...snapshot.val()
            })
        })
      } catch (error) {
        console.log(error)
        new Error('something went wrong')
      }
    }
    getData()
  }, [])

  console.log(listing)
  return listing
}
