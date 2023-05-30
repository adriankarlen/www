import { asset } from "$fresh/runtime.ts";
import Carousel from "../islands/Carousel.tsx";

const SLIDE_DATA = [
  {
    color: "bg-green-300",
    text: "Project one",
    url: asset("projects/deno-plush.svg"),
  },
  {
    color: "bg-yellow-300",
    text: "Project two",
    url: asset("projects/lemon-squash.svg"),
  },
  {
    color: "bg-blue-300",
    text: "Project three",
    url: asset("projects/deno-plush.svg"),
  },
  {
    color: "bg-yellow-300",
    text: "Project four",
    url: asset("projects/lemon-squash.svg"),
  },
];

export default function ProjectsPage() {
  return (
    <div id="projects" class="flex flex-col h-screen p-4">
      <div
        id="content"
        class="flex flex-wrap flex-grow w-full p-4 justify-center items-center"
      >
        <h2 class="text-6xl font-bold">Projects</h2>
        <div class="w-full p-4">
          <Carousel slideData={SLIDE_DATA} />
        </div>
      </div>
    </div>
  );
}
