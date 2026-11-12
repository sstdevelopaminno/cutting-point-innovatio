import { permanentRedirect } from "next/navigation";

/** Keep one canonical gallery URL; field stories already live at /pos-installations. */
export default function FieldStoriesPage() {
  permanentRedirect("/pos-installations");
}
