"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="max-w-2xl mx-auto mt-4 text-black-800">
      
      <p>
        I graduated with a degree in <span className="text-green-500">Laboratory Sciences</span>, and while I was introduced to <span className="text-yellow-500">Q Basic</span> during my university years, my true passion lies in programming. To pursue this passion, I took a leap and enrolled in a coding bootcamp, where I immersed myself in the world of full-stack web development.
      </p>
      <p>
        The aspect of programming that excites me the most is <span className="text-purple-500">problem-solving</span>. There's an incredible satisfaction in unraveling complex issues and finding effective solutions. My core stack includes <span className="text-blue-500">React</span>, <span className="text-blue-500">Next.js</span>, <span className="text-green-500">Node.js</span>, and <span className="text-green-500">MongoDB</span>. I'm also well-versed in <span className="text-blue-500">TypeScript</span> and <span className="text-blue-500">Prisma</span>. As a lifelong learner, I'm constantly exploring new technologies to broaden my skill set.
      </p>
      <p>
        Currently on the lookout for a full-time position as a <span className="text-blue-500">software developer</span>, I am eager to contribute my <span className="text-purple-500">problem-solving</span> skills and technical expertise to innovative projects.
      </p>
      <p>
        Beyond coding, you'll find me engrossed in <span className="text-yellow-500">geopolitical news</span> on YouTube or enjoying outdoor activities like <span className="text-green-500">fishing</span> and <span className="text-green-500">soccer</span>. I'm also delving into electronics, with a focus on <span className="text-red-500">analog and digital circuitry</span>, <span className="text-red-500">embedded systems</span>, and <span className="text-red-500">blockchain technology</span>.
      </p>
      <p>
        Thank you for visiting, and I look forward to the exciting <span className="text-purple-500">coding challenges</span> that lie ahead!
      </p>
    </div>
    </motion.section>
  );
}
