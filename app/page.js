import axios from "axios";
import Timelinecompo from "./components/Timelinecompo";


 
async function getData() {
  const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  return {
    posts,
    users,
  };
 
}

export const revalidate = 0;


export default async function Home() {

 
  const { posts, users } = await getData();



  return (
    <div>
      <Timelinecompo posts={posts?.data} users={users?.data} />
    </div>
  );
}
