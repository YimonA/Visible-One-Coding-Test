import { useEffect } from "react";
import CaseStudy from "/images/case-study-trip-pro-our-challenges.png";
import { useGetPostsQuery } from "../redux/api/postApi";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/services/postSlice";
import { motion } from "framer-motion";

const OurChallenge = () => {
  const { data } = useGetPostsQuery();
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.postSlice.posts);

  useEffect(() => {
    dispatch(addPost({ posts: data }));
    console.log("first", data);
  }, [data]);

  return (
    <section className=" container mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay:0.1,duration: 0.9 }}
        viewport={{ once: false }}
        className=" flex flex-col "
      >
        <h1 className=" OS-36 font-extrabold h-[49px]  text-black ms-[50%]">
          OUR<span className=" text-[#2DC4EA]"> CHALLENGES </span>
        </h1>
        <div className=" basis-1/2 py-5 flex justify-center items-center gap-8">
          <img src={CaseStudy} className=" w-[738px] h-[550px] " alt="" />

          <div className="flex flex-col h-[550px] gap-10 w-full overflow-y-scroll overscroll-y-contain ">
            {postsData?.map((post) => {
              return (
                <div
                  key={post?.id}
                  className={`mx-5 mb-5 h-[76px] drop-shadow-lg p-5 flex justify-center items-center ${
                    post?.id === 1
                      ? "bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB]"
                      : "bg-white "
                  }`}
                >
                  <span
                    className={`mx-5 inline-block text-[40px] gap-10 ${
                      post?.id === 1
                        ? " text-white opacity-50"
                        : "text-[#2DC4EA] "
                    }`}
                  >
                    {post?.id<10? '0':''}{post?.id}
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
        </div>
        <button className="OS-20 font-bold bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] text-white rounded-[50px] w-[215px] h-[74px] my-10 ms-[50%]">
          VIEW MORE
        </button>
      </motion.div>
    </section>
  );
};

export default OurChallenge;
