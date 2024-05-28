
"use client"
import axios from "axios";
import { useEffect, useState } from "react";

 

const CommentCompo =({ postID }) => {
 
const [comments,setComments] = useState([]);

const [expanded, setExpanded] = useState(false);

const toggleExpanded = () => {
  setExpanded(!expanded);
};

 useEffect(() => {
     const getData = async() =>{
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
        );
    setComments(res?.data)
     }
     getData();
 }, [postID]);


  return (
    <div className="mt-2">
      {expanded ? (
        comments?.map((item, index) => (
          <div key={index} className="pl-5">
            <p className="text-sm font-semibold py-2">
              {item?.name} <span>({item?.email})</span>
            </p>
            <p className="text-xs pt-2">{item?.body}</p>
          </div>
        ))
      ) : (
        <button
          className="px-2 py-1 text-xs bg-blue-50 text-blue-500 cursor-pointer rounded-md"
          onClick={toggleExpanded}
        >
          see comments
        </button>
      )}
      {expanded ?  <button
        className="px-2 py-1 text-xs cursor-pointer bg-blue-50 text-blue-500 mt-1 rounded-md ml-4"
        onClick={toggleExpanded}
      >
         see less
      </button> : null}
     
    </div>
  );
};

export default CommentCompo