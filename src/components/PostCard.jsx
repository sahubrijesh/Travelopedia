import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage, summary }) {
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <Link to={`/post/${$id}`}>
                <div className="w-full h-48 overflow-hidden">
                    <img
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                    />
                </div>
            </Link>
            <div className="p-5">
                <Link to={`/post/${$id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors duration-300">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700">{summary}</p>
                <Link to={`/post/${$id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default PostCard;
