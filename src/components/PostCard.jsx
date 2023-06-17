import PostAuthor from "./PostAuthor";
import TimeAgo from "../components/TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostCard = ({ post }) => {
  // console.log(" each post : ", post);
  return (
    <div className=" border rounded-lg my-7 p-5">
      <p className=" text-xl text-slate-700">{post.title}</p>
      <p className="my-2">{post.content.substring(0, 50)}</p>
      <p className=" text-sm text-slate-400 ">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </div>
  );
};

export default PostCard;
