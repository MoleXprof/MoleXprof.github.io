import Image from 'next/image'

type ImageCardProps = {
    readonly description: string,
    readonly image: string,
    readonly subheader: string
    readonly text: string,
    readonly link?: string,
}

const ImageCard = ({ image, link, text, description, subheader } : ImageCardProps) => {
    return (
        <a href={link} className="group relative block bg-black" target="_blank" rel="noreferrer">
            <Image
                alt="image card"
                src={image}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                width={1000}
                height={1000}
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-xs md:text-sm font-medium uppercase tracking-widest text-pink-400">{subheader}</p>
                <p className="text-xl font-bold sm:text-2xl">{text}</p>
                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-xs md:text-sm">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ImageCard
