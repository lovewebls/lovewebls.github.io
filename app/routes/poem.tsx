import type { Route } from "./+types/poem";
import Poem from "../pages/poem";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Poema" },
    { name: "description", content: "Poema 'X'" },
  ];
}

export default function PoemRoute() {
  return <Poem />;
}
