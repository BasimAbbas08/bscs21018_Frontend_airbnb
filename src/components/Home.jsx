import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Index = () => {
  const [places, setPlaces] = useState("")
  const [loading , setLoading] = useState(true) 

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data)
      setLoading(false)
    })
  }, [])
  return (
    <div>
        {loading ? <Loading /> : <></>
  }
<div className="grid gap-8 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-8">
  {places.length > 0 &&
    places.map((place, index) => (
      <Link to={`/places/${place._id}`} key={index} className="shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="bg-gray-200 flex justify-center items-center">
          {place.photos?.[0] && (
            <img
              className="rounded-t-2xl object-cover aspect-square"
              src={place.photos[0]}
              alt=""
            />
          )}
        </div>
        <div className="p-4 bg-white">
          <h2 className="font-bold text-lg text-gray-800">{place.address}</h2>
          <h3 className="text-sm truncate text-gray-500 mt-1">{place.title}</h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-bold text-lg text-primary">
              ₹{place.price}
            </span>
            <span className="text-sm text-gray-500">per night</span>
          </div>
        </div>
      </Link>
    ))}
</div>

    {/* <div className='grid gap-8 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-8'>
      {places.length > 0 && places.map((place, index) => (
        <Link to={"/places/" + place._id} key={index}>
        <div className='bg-gray-200 mb-4 rounded-2xl flex '>
          {place.photos?.[0] && (
            <img className="rounded-2xl object-cover aspect-square" src={place.photos[0]} alt="" />
          )}
        </div>
        <h2 className="font-bold">{place.address}</h2>
        <h3 className='text-sm truncate text-gray-500'>{place.title}</h3>
        <div className='mt-1'>
          <span className='font-bold'>₹{place.price}</span> per night
        </div>

        </Link>
      ))}


    </div> */}
    </div>
  )
}

export default Index
