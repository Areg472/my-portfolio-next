import { ClientHomepage } from "@/app/components/homepageclient";

export const metadata = {
  title: "Areg",
  description: "Areg's small little corner in the internet :3",
};

export default function Home() {
  return (
    <>
      <div className="invisible">
        <a rel="me" href="https://mastodon.social/@aregus">
          Mastodon
        </a>
      </div>
      <ClientHomepage />
    </>
  );
}
