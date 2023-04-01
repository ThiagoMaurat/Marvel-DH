import ComicInfo from "dh-marvel/components/buy-comic";
import { getComic, getComics } from "dh-marvel/services/marvel/marvel.service";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import React from "react";
import { Comic } from "types/getComic";

export default function Index(data: Comic) {
  console.log(data);
  return <ComicInfo {...data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: comics } = await getComics(100, 100);

  const data = comics.results
    .filter((comic) => !!comic.thumbnail && !!comic.description)
    .slice(0, 12);

  const paths = data.map((comic) => {
    return {
      params: {
        id: comic.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

type Params = {
  id: string;
};

export const getStaticProps = async (ctx: GetStaticPropsContext<Params>) => {
  const { params } = ctx;

  const comic = await getComic(Number(params?.id));

  if (!comic) return;

  return {
    props: comic,
  };
};
