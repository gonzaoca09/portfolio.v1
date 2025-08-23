import Image from 'next/image';

export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    labelButton?: string;
    onClick?: () => void;
}

export default function Card({ title, description, imageUrl, labelButton, onClick }: CardProps) {

    return (
        <div className="w-auto p-4">
        <div className="grid grid-cols-3 justify-around bg-white rounded-lg shadow-md p-8">
            <div className=" col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            </div>
            <Image
                src={imageUrl}
                alt="Card Image"
                width={600}
                height={400}
                className=" col-end-4 h-48 aspect-[4/3] object-cover rounded-t-lg mb-4"
            />
        </div>
        </div> 
    );
}