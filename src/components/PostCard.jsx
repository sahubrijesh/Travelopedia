import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className='w-72 h-80'> {/* Adjust dimensions as needed */}
            <div className='bg-gray-100 rounded-xl p-4 h-full'>
                <div className='w-full justify-center mb-4'>
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className='rounded-xl w-full h-60 object-cover' // Fixed size for the image
                    />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
