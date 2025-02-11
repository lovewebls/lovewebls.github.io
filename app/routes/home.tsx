import type { Route } from "./+types/home";
import Home from "../pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LoveWeb" },
    { name: "description", content: "A website about my love" },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
