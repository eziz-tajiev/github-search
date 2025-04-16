"use client";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsFillBuildingFill } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { motion } from "motion/react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";

const fetchGithubProfile = async () => {
  const res = await fetch("https://api.github.com/users/Amigo");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export function Card() {
  const [opened, setOpened] = useState(false);
  const [liked, setLiked] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["githubUser"],
    queryFn: fetchGithubProfile,
  });
  if (isLoading)
    return <p className="dark:text-white text-center pt-7">Loading...</p>;
  if (error) return <p className="text-red-600">Failed to load Github data</p>;

  const stats = [
    { label: "Repos", value: data.public_repos },
    { label: "Followers", value: data.followers },
    { label: "Following", value: data.following },
  ];

  const infoItems = [
    { icon: IoLocationOutline, text: data.location },
    { icon: IoIosLink, text: data.blog },
    { icon: FaTwitter, text: data.twitter_username },
    { icon: BsFillBuildingFill, text: data.company },
  ];

  return (
    <div className="flex w-full flex-col gap-5 rounded-lg bg-white dark:bg-slate-800 p-4 overflow-hidden">
      <div className="flex gap-4">
        <Image
          width={80}
          height={80}
          className="h-20 w-20 rounded-full"
          src={data.avatar_url}
          alt="user-img"
        />

        <section className="flex justify-between gap-1 transition-all w-full dark:text-white">
          <div>
            <h1 className="dark:text-white">{data.name || data.login}</h1>
            <Link
              className="text-blue-400 hover:underline text-sm transition-all"
              href={data.html_url}
              target="_blank"
            >
              @{data.login}
            </Link>
          </div>
          <div className="flex gap-7 items-center">
            <button onClick={() => setLiked(!liked)}>
              <motion.div whileTap={{ scale: 0.9 }}>
                {liked ? <FaHeart size={23} /> : <FaRegHeart size={23} />}
              </motion.div>
            </button>
            <button onClick={() => setOpened(!opened)}>
              <motion.div
                animate={{ rotate: opened ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <SlArrowDown size={23} />
              </motion.div>
            </button>
          </div>
        </section>
      </div>
      <motion.div
        initial={false}
        animate={{ height: opened ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <section className="flex flex-col gap-5 mt-3 dark:text-white">
          <p>{data.bio}</p>
          <div className="flex justify-between gap-3 rounded-lg bg-stone-100 px-6 py-4 dark:bg-slate-900 min-h-[50px]">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2"
              >
                <p className="text-xs opacity-60">{item.label}</p>
                <p className="text-sm font-bold sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {infoItems.map((info, index) => (
              <div key={index} className="flex items-center gap-2">
                <info.icon className="text-xl" />
                <p>{info.text || "N/A"}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
