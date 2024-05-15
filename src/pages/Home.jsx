import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Button } from "../components/index";
import { Link } from "react-router-dom";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // if (posts.length === 0) {
  //     return (
  //         <div className="w-full py-8 mt-4 text-center">
  //             <Container>
  //                 <div className="flex flex-wrap">
  //                     <div className="p-2 w-full">
  //                         <h1 className="text-2xl font-bold hover:text-gray-500">
  //                             Login to read posts
  //                         </h1>
  //                     </div>
  //                 </div>
  //             </Container>
  //         </div>
  //     )
  // }
  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center bg-gray-50">
        <Container>
          <div className="text-center mt-6 mb-8 p-4">
            <img
              src="https://res.cloudinary.com/dje76buyj/image/upload/v1715756742/v3ruoahnjjklndq7kytn.svg"
              alt="No Posts"
              className="mx-auto mb-4"
              style={{ maxWidth: "300px" }}
            />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Discover the latest posts
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Join our community and start reading amazing content crafted by
              our authors.
            </p>
            <div className="space-x-4">
              <Link
                to="/signup"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors text-sm"
              >
                Sign Up Now
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700 transition-colors text-sm"
              >
                Log In
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
