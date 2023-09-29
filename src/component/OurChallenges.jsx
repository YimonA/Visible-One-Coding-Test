import React, { useEffect, useState } from "react";
import CaseStudy from "/images/case-study-trip-pro-our-challenges.png";
import { useGetPostsQuery } from "../redux/api/postApi";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/services/postSlice";

const OurChallenge = () => {
  const { data } = useGetPostsQuery();
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.postSlice.posts);

  useEffect(() => {
    dispatch(addPost({ posts: data }));
  }, [data]);
  console.log("first", data);
  console.log("postsData", postsData);

  return (
    <section className=" container mx-auto py-20">
      <div className=" flex items-stretch justify-between">
        <img src={CaseStudy} className=" basis-1/2" alt="" />
        <div className=" basis-1/2">
          <h1 className=" .OS-36 font-bold h-[49px]  text-black ">
            OUR<span className=" text-[#2DC4EA]"> CHALLENGES </span>
          </h1>
          <div className="flex flex-col gap-10 w-full mb-10">
            {postsData?.slice(0, 5).map((post) => {
              return (
                <div
                  key={post?.id}
                  className={`shadow-lg p-5 flex items-center ${
                    post?.id === 1
                      ? "bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB]"
                      : "bg-white "
                  }`}
                >
                  <span
                    className={`mx-5 inline-block text-[40px] gap-10 mb-3 ${
                      post?.id === 1
                        ? " text-white opacity-50"
                        : "text-[#2DC4EA] "
                    }`}
                  >
                    0{post?.id}
                  </span>
                  <span
                    className={` inline-block w-full text-[18px] ${
                      post?.id === 1 ? " text-white opacity-50" : "text-back"
                    }`}
                  >
                    {post?.title}
                  </span>
                </div>
              );
            })}
          </div>
          <button className="bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] text-white rounded-[50px] w-[215px] h-[74px] my-2">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurChallenge;
