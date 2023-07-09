import React from "react";


const Card = () => {
  return (
    <div className="my-auto flex flex-col gap-3 bg-black1 p-5 rounded-3xl">
      <p className="text-gray-200 text-xs md:text-base">
        I am a B.Tech Electrical Engineering student with a keen interest in
        technology and problem-solving, I am excited to pursue a career in
        software development. With a passion for learning and a drive to
        succeed, I am eager to contribute my skills and knowledge to the dynamic
        field of software development. During my studies, I have gained
        knowledge and hands-on experience in various programming languages such
        as Java, C, HTML, CSS, JavaScript, Bootstrap,React js,NodeJs. I have
        also developed web applications and other projects, which have helped me
        to improve my programming and development skills.
      </p>
      <h2 className="text-gray-200 text-xs sm:font-medium">Hardwork</h2>
      <div className="w-full bg-gray-200 h-1.5 rounded-md">
        <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
      <h2 className="text-gray-200 text-xs sm:font-medium">Development</h2>
      <div className="w-full bg-gray-200 h-1.5 rounded-md">
        <div className="w-4/6 bg-pink-500 h-1.5 rounded-md"></div>
      </div>
      <h2 className="text-gray-200 text-xs sm:font-medium">Creativity</h2>
      <div className="w-full bg-gray-200 h-1.5 rounded-md">
        <div className="w-3/6 bg-yellow-500 h-1.5 rounded-md"></div>
      </div>
    </div>
  );
};

export default Card;
