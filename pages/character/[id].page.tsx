import CharacterInfo from "dh-marvel/components/character-card";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import { Character } from "types/getCharacter";

export default function Index({ data }: { data: Character }) {
  return <CharacterInfo {...data} />;
}

type Params = {
  id: string;
};

export const getServerSideProps: GetServerSideProps<any, Params> = async (
  context: GetServerSidePropsContext<Params>
) => {
  const { params } = context;

  if (params?.id) {
    const characters = await getCharacter(
      Number(decodeURIComponent(params.id))
    );
    return {
      props: {
        data: characters,
      },
    };
  }

  return {
    notFound: true,
  };
};
