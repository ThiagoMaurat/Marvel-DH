import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

export default function Character(data: any) {
  console.log(data);
  return <div>Character</div>;
}

type Params = {
  id: string;
};

export const getServerSideProps: GetServerSideProps<any, Params> = async (
  context: GetServerSidePropsContext<Params>
) => {
  const { params } = context;

  if (params?.id) {
    const comics = await getCharacter(Number(params.id));

    //   if (!comics) {
    //     return {
    //       notFound: true,
    //     };
    //   }

    return {
      props: {
        data: comics,
      },
    };
  }

  return {
    notFound: true,
  };
};
