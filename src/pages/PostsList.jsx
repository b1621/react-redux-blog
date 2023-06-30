import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { selectAllPosts } from "../features/postsSlice";
import AddPost from "./AddPost";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  //   console.log(posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className='  w-[700px] mx-auto '>
      <AddPost />
      <p className=' text-3xl my-8 text-slate-600 text-center'>Posts List</p>
      {posts && posts.length !== 0 ? (
        <div>
          {orderedPosts.map((post) => (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p> No Post !!! </p>
        </div>
      )}
    </div>
  );
};

export default PostsList;
