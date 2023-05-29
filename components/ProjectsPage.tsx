import Carousel from "../islands/Carousel.tsx";

export default function ProjectsPage() {
  return (
    <div
      id="projects"
      class="flex flex-col items-center h-screen p-4"
    >
      <div
        id="content"
        class="flex flex-wrap flex-grow w-full md:w-2/3 p-4"
      >
        <div class="w-full md:w-1/3 p-4">
          <label class="text-lg font-thin">Projects</label>
        </div>
        <div class="w-full md:w-2/3 p-4">
          <p class="md:text-3xl text-sm font-medium">
            I have worked on a number of projects, both professionally and
            privately. Here are some of the projects I have worked on.
          </p>
        </div>
        <div class="w-full p-4">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
