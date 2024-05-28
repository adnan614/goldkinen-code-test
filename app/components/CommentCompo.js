
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
        <div className="pl-3 text-xs text-blue-500 cursor-pointer underline" onClick={toggleExpanded}>
          see comments
        </div>
      )}
      <div
        className="pl-3 text-xs cursor-pointer text-blue-500 underline"
        onClick={toggleExpanded}
      >
        {expanded ? "see less" : ""}
      </div>
    </div>
  );
};

export default CommentCompo