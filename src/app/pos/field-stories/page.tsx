import { redirect } from "next/navigation";

/** Fallback route; next.config.ts sends a permanent 308 redirect first. */
export default function FieldStoriesPage() {
  redirect("/pos-installations");
}
