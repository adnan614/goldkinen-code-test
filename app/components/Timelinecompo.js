import CommentCompo from "./commentCompo";



const Timelinecompo = ({ posts }) => {



  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3 gap-3">
        {posts?.map((item, index) => (
          <div className="bg-white shadow-md p-3" key={index}>
    
            <p>{item?.title}</p>
            <CommentCompo postID={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timelinecompo;
