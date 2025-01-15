import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

type Props = {
  params: { id: string };
  searchParams: { region: string; page: string };
};

export default async function MovieDetail({ params, searchParams }: Props) {
  const { id } = await params;
  const { region, page } = await searchParams;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
