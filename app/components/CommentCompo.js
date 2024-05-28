

import axios from "axios";

 

const CommentCompo =async ({ postID }) => {
 
const [comments,setComments] = useState([]);

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
    <div>
      {comments?.map((item, index) => (
        <div key={index} className="pl-2">
          {item?.body}
        </div>
      ))}
    </div>
  );
};

export default CommentCompo