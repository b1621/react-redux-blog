import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../features/postsSlice";
import { selectAllUsers } from "../features/usersSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
    author: "",
  });

  const users = useSelector(selectAllUsers);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.title && input.content) {
      dispatch(postAdded(input.title, input.content, input.author));
      setInput({
        title: "",
        content: "",
      });
    }
  };
  const canSave =
    Boolean(input.title) && Boolean(input.content) && Boolean(input.author);
  //   console.log(input);
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <div className='border'>
        <p className='text-center text-xl py-2'>Add Post</p>
        <form className='my-10 mx-5'>
          <div className='w-[400px] flex flex-row justify-between mb-5'>
            <label className=' '>Title</label>
            <input
              className='border p-1 w-64'
              type='text'
              name='title'
              value={input.title}
              onChange={changeHandler}
            />
          </div>
          <div className='w-[400px] flex flex-row justify-between mb-5'>
            <label htmlFor='postAuthor'>Author: </label>
            <select
              className='border p-1 w-64 bg-white'
              value={input.author}
              name='author'
              id='postAuthor'
              onChange={changeHandler}
            >
              <option value=''></option>
              {usersOptions}
            </select>
          </div>
          <div className='w-[400px] flex flex-row justify-between '>
            <label className=' '>Content</label>
            <input
              className='border p-1 w-64'
              type='text'
              name='content'
              value={input.content}
              onChange={changeHandler}
            />
          </div>

          <button
            disabled={!canSave}
            onClick={submitHandler}
            className='border border-sky-300 text-white bg-sky-400 px-5 py-1 my-10 mx-40 disabled:bg-sky-200'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
