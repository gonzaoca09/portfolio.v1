

import Image from 'next/image';

export default function Card() {

    return (
        <div className="card">
        <div className="bg-white rounded-lg shadow-md p-8">
            <Image
                src="https://placehold.co/600x400"
                alt="Card Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Card Title</h3>
            <p className="text-gray-600">This is a description of the card content.</p>
        </div>
        </div> 
    );
}