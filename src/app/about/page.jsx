export const metadata = {
  title: "About Md Sinikdho Mahmud | Full Stack Developer & CSE Student",
  description:
    "Md Sinikdho Mahmud (Sinikdho) is a passionate Full Stack Web Developer and CSE student. Skilled in MERN Stack, Next.js, React, and real-world project development.",
  keywords: [
    "Md Sinikdho Mahmud",
    "Sinikdho",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "CSE Student",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Md Sinikdho Mahmud" }],
  creator: "Md Sinikdho Mahmud",
  openGraph: {
    title: "About Md Sinikdho Mahmud",
    description:
      "Learn more about Md Sinikdho Mahmud, a MERN Stack & Next.js developer working on real-world projects.",
    siteName: "Sinikdho Blog",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

        {/* Intro */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Assalamu Alaikum 👋 আমি{" "}
          <span className="font-semibold text-white">Md Sinikdho Mahmud</span>
          (Snigdho)। আমি একজন CST স্টুডেন্ট এবং Passionate Full Stack Web
          Developer। Programming আমার জন্য শুধু একটা Skill না, এটা আমার Passion।
        </p>

        {/* Background */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">📚 Background</h2>
          <p className="text-gray-300 leading-relaxed">
            আমি Computer Science and Engineering (CSE) নিয়ে পড়াশোনা করছি। আমার
            Programming Journey শুরু হয় Web Design দিয়ে, এরপর ধাপে ধাপে Web
            Development এবং MERN Stack সফলভাবে শেষ করি।
          </p>
        </div>

        {/* Journey */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            🚀 Development Journey
          </h2>
          <p className="text-gray-300 leading-relaxed">
            JavaScript শেখার পর আমি React এবং Next.js নিয়ে গভীরভাবে কাজ শুরু
            করি। বর্তমানে আমি Real World Projects বানাচ্ছি, যেখানে UI/UX Design
            থেকে শুরু করে Frontend, Backend, Database এবং Deployment—সবকিছু নিজে
            Handle করছি।
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">💻 Technical Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300">
            <li>✔ HTML5, CSS3, Tailwind CSS</li>
            <li>✔ JavaScript (ES6+)</li>
            <li>✔ React JS</li>
            <li>✔ Next.js (App Router)</li>
            <li>✔ Node.js & Express.js</li>
            <li>✔ MongoDB</li>
            <li>✔ REST API Development</li>
            <li>✔ Authentication & Authorization</li>
            <li>✔ Git, GitHub & Deployment</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🛠 Projects & Work</h2>
          <p className="text-gray-300 leading-relaxed">
            আমি বিভিন্ন Blog Application, API Platform, Portfolio Website এবং
            Full Stack Web Application নিয়ে কাজ করেছি। আমার লক্ষ্য হলো Clean
            Code, Performance এবং SEO Focus করে Production Ready Application
            তৈরি করা।
          </p>
        </div>

        {/* Content Creation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            🎥 Content & Community
          </h2>
          <p className="text-gray-300 leading-relaxed">
            আমি নিয়মিত Facebook, GitHub এবং LinkedIn-এ আমার Learning Journey,
            Project Updates এবং Programming Content শেয়ার করি। এছাড়াও আমি
            Beginner দের জন্য Simple ভাষায় Programming বোঝাতে পছন্দ করি।
          </p>
        </div>

        {/* Goal */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🎯 Career Goal</h2>
          <p className="text-gray-300 leading-relaxed">
            আমার লক্ষ্য হলো একজন Professional Software Engineer হওয়া এবং এমন
            Meaningful Product তৈরি করা যা মানুষের বাস্তব সমস্যার সমাধান করে। In
            Sha Allah, Continuous Learning এবং Hard Work দিয়েই আমি এগিয়ে যেতে
            চাই।
          </p>
        </div>

        {/* Closing */}
        <p className="text-center text-gray-400 mt-12">
          Thanks for visiting my blog 💙
        </p>
      </div>
    </section>
  );
}
