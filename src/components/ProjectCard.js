export default function ProjectCard({ title, description, imageUrl, tech }) {
  console.log(imageUrl);
  return (
    <div className="my-5">
      <section className="bg-gray-100 dark:bg-gray-900 lg:py-3 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2 p-5">
            <img src={imageUrl} alt="" className="max-h-full rounded" />
          </div>

          <div className="max-w-xl px-6 py-3 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              {title}
              {/*     <span className="text-pink-500 dark:text-pink-500">Idea</span> */}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus
              {/*     {description} */}
            </p>
            {tech.map((item, index) => (
              <h1 key={index}>{item}</h1>
            ))}
            <div className="mt-8">
              <a
                href="/"
                className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
