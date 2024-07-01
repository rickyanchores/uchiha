import Card from '@/app/Components/Card/Card';
import React from 'react'

const Gallery = () => {

  let CardList = [
    { 
      id: 0,
      title: "One",
      image: "https://zensushitogo.com/wp-content/uploads/2020/12/ZTG_TheBlackBoxPack_web.png"
    },
    {
      id: 1,
      title: "One",
      image: "https://cdn.concreteplayground.com/content/uploads/2023/08/Aoi-Tsuki-supplied-Griffin-Simm-credit-13.jpg"
    },
    {
      id: 2,
      title: "One",
      image: "https://champ-magazine.com/wp-content/uploads/2023/09/Aman-Kyoto-Japan-Living-Pavilion_14.tif_27838-1-1280x0-c-default.jpg"
    }
  ]

  return (
    <div className='Gallery w-screen min-h-screen flex flex-col justify-center items-center' id='Gallery'>
        <div className="gallery-grid p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {CardList.map((card) => (
            <Card key={card.id} image={card.image}/>
          ))}
        </div>
    </div>
  )
}

export default Gallery;