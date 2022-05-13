export default function ProjectCard({ title, svg }) {
  return (
    <div className="mx-auto">
      <div className=" p-5 hover:p-6">
        <img src={svg} alt={title} className="w-20 h-20" />
        <h1 className=" dark:text-white md:text-2xl text-sm">{title}</h1>
      </div>
    </div>
  );
}
