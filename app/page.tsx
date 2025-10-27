import Books from "./(books)/Books";
import Movies from "./(movies)/Movies";
import getContentType from "./lib/getContentType";

export default async function Home() {
  const contentType = await getContentType()
  
  return (
    <>
      {/* <HeroSection /> */}
      {/* <FeaturedSection /> */}
      {
        contentType === "movies"
        ? <Movies />
        : <Books />
      }
    </>
  );
}
