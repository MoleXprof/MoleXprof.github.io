import Image from 'next/image'
import { Link } from 'react-scroll'

type ImageCardProps = {
    image: string,
    link?: string,
    text?: string,
    description?: string,
    subheader?: string
}

const ImageCard = ({ image, link, text, description, subheader } : ImageCardProps) => {
  return (
    <a href={link} className="group relative block bg-black" target="_blank">
      <img
        alt="image card"
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-400">{subheader}</p>
        <p className="text-xl font-bold text-white sm:text-2xl">{text}</p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ImageCard
