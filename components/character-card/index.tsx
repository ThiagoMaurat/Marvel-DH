import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { getComicIdFromUrl } from "helper/getComicId";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Character } from "types/getCharacter";

// Nesta página deverá ser exibido detalhes sobre um personagem individual da Marvel. Pontos
// a considerar:
// ● A página deverá indicar ao menos os seguintes campos:
// ○ Nome do personagem
// ○ Imagem principal
// ○ Descrição o biografia do personagem
// ● Esta página deverá usar o Layout geral, mencionado na página inicial.

export default function CharacterInfo(comic: Character) {
  const { thumbnail, name, description, comics } = comic;

  const thumb = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Grid container padding={"3rem"}>
      <Grid item xs={12} md={6}>
        <Box display={"flex"} gap={"3rem"} flexDirection={"column"}>
          <Typography variant="h4" component="h4">
            {name}
          </Typography>

          {description ? (
            <Typography variant="h4" component="h4">
              {description}
            </Typography>
          ) : (
            <Typography variant="h4" component="h4">
              Sem descrição
            </Typography>
          )}

          <Box>
            <Typography component={"h3"}>Comics:</Typography>
            <List sx={{ gap: "10px", width: "fit-content" }}>
              {comics.items.map((comics) => {
                const characterId = comics.resourceURI
                  ? encodeURIComponent(getComicIdFromUrl(comics.resourceURI))
                  : "";
                return (
                  <Link href={`/comic/${characterId}`}>
                    <ListItem
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: "#1976d2" },
                      }}
                    >{`${comics.name}`}</ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p="1rem">
          <Image src={thumb} width={826} height={826} />
        </Box>
      </Grid>
    </Grid>
  );
}
