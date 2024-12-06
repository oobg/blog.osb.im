import React from "react";
import {
  MusicGrid,
  MusicGridCellAlbum,
  MusicLayout,
} from "@/features/music";
import type { AlbumList } from "@/features/music/lib/types";
import albumList from "@/features/music/model/albumList";

export default function Page() {
  const title: string = "홈";

  return (
    <MusicLayout title={title}>
      <article className="flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold">발매 앨범</h2>
        <MusicGrid>
          {albumList.map((album: AlbumList) => (
            <MusicGridCellAlbum
              imageSrc={album.imgSrc}
              imageAlt={album.imgAlt}
            >
              <div>{album.description}</div>
              <div>{album.title}</div>
              <div className="text-gray-400">{album.kind}</div>
            </MusicGridCellAlbum>
          ))}
        </MusicGrid>
      </article>
    </MusicLayout>
  );
}