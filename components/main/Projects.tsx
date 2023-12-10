import ProjectsCard from "../sub/ProjectsCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectsCard
          src="/NextWebsite.png"
          title="Modern Next Js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aliquid accusantium maxime voluptatem facere sequi minima esse autem, corrupti veritatis atque unde fugit voluptatibus quasi, ipsa error assumenda iste! Reprehenderit.
        "
        />

        <ProjectsCard
          src="/CardImage.png"
          title="Iteractives website cards"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aliquid accusantium maxime voluptatem facere sequi minima esse autem, corrupti veritatis atque unde fugit voluptatibus quasi, ipsa error assumenda iste! Reprehenderit.
        "
        />

        <ProjectsCard
          src="/SpaceWebsite.png"
          title="Space themed website"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aliquid accusantium maxime voluptatem facere sequi minima esse autem, corrupti veritatis atque unde fugit voluptatibus quasi, ipsa error assumenda iste! Reprehenderit.
        "
        />
      </div>
    </div>
  );
};

export default Projects;
