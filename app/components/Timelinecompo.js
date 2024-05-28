"use client";

const Timelinecompo = ({ posts }) => {
  console.log("posts", posts);
  return (
    <div>
      {posts?.map((item, index) => (
        <h1 className="text-red-500">{item?.title}</h1>
      ))}
    </div>
  );
};

export default Timelinecompo;
