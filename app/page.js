import axios from "axios";
import Timelinecompo from "./components/Timelinecompo";


 
async function getData() {
  const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);


  return {
    posts,
  };
 
}

export const revalidate = 0;


export default async function Home() {

 
  const { posts } = await getData();



  return (
    <div >
       <Timelinecompo posts={posts?.data} />
    </div>
  );
}
