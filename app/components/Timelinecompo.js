"use client"

import { useEffect, useState } from "react";
import CommentCompo from "./CommentCompo";




const Timelinecompo = ({ posts,users }) => {

  const [postdData, setPostData] = useState([]);

    useEffect(() => {
    
      const combinedData = posts.map((post) => {
        return {
          ...post,
          user: users.find((user) => user.id === post.userId),
        };
      });

       const numDescending = combinedData.sort((a, b) => b.id - a.id);

      setPostData(numDescending);
    }, []);



  return (
    <div className="max-w-7xl mx-auto ">
      <div className="space-y-4 py-6">
        {postdData?.map((item, index) => (
          <div className="bg-white shadow-md rounded-md p-3" key={index}>
            <p className="text-sm font-semibold">{item?.user?.name}</p>
            <p className="text-lg font-bold py-2">{item?.title}</p>

            <p className="text-sm font-light">{item?.body}</p>
            <CommentCompo postID={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timelinecompo;
