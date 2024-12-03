import React from "react";
import {
  MusicGrid,
  MusicGridCellAlbum,
  MusicLayout,
} from "@/features/music";

export default function Page() {
  return (
    <MusicLayout title={"홈"}>
      <article className="flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold">발매 앨범</h2>
        <MusicGrid>
          <MusicGridCellAlbum
            imageSrc="7th-GROWTH THEORY-Repackage.jpg"
            imageAlt="7th-GROWTH THEORY Repackage"
          >
            YOUNHA 7th Album<br/>
            GROWTH THEORY<br/>
            <span className="text-gray-400 truncate">Studio Album Repackage</span>
          </MusicGridCellAlbum>
          <MusicGridCellAlbum
            imageSrc="7th-GROWTH THEORY.jpg"
            imageAlt="7th-GROWTH THEORY"
          >
            YOUNHA 7th Album<br/>
            GROWTH THEORY<br/>
            <span className="text-gray-400 truncate">Studio Album</span>
          </MusicGridCellAlbum>
          <MusicGridCellAlbum
            imageSrc="Studio_Live-MINDSET.jpg"
            imageAlt="Studio_Live-MINDSET"
          >
            YOUNHA Live Album<br/>
            MINDSET<br/>
            <span className="text-gray-400 truncate">Studio Live</span>
          </MusicGridCellAlbum>
          <MusicGridCellAlbum
            imageSrc="Digital_Single-RAIN SONG.jpg"
            imageAlt="Digital_Single-RAIN SONG"
          >
            YOUNHA Single Album<br/>
            비 오는 날 듣기 좋은 노래<br/>
            <span className="text-gray-400 truncate">Digital Single</span>
          </MusicGridCellAlbum>
          <MusicGridCellAlbum
            imageSrc="6th-END THEORY-Repackage.jpg"
            imageAlt="6th-END THEORY Repackage"
          >
            YOUNHA 6th Album<br/>
            END THEORY<br/>
            <span className="text-gray-400 truncate">Studio Album Repackage</span>
          </MusicGridCellAlbum>
          <MusicGridCellAlbum
            imageSrc="6th-END THEORY.jpg"
            imageAlt="6th-END THEORY"
          >
            YOUNHA 6th Album<br/>
            END THEORY<br/>
            <span className="text-gray-400 truncate">Studio Album</span>
          </MusicGridCellAlbum>
          <MusicGridCellAlbum
            imageSrc="Mini_5th-UNSTABLE MINDSET.jpg"
            imageAlt="Mini_5th-UNSTABLE MINDSET"
          >
            YOUNHA Mini Album<br/>
            UNSTABLE MINDSET<br/>
            <span className="text-gray-400 truncate">Mini 5th Album</span>
          </MusicGridCellAlbum>
          <MusicGridCellAlbum
            imageSrc="Mini_4th-STABLE MINDSET.jpg"
            imageAlt="Mini_4th-STABLE MINDSET"
          >
            YOUNHA Mini Album<br/>
            STABLE MINDSET<br/>
            <span className="text-gray-400 truncate">Mini 4th Album</span>
          </MusicGridCellAlbum>
          <MusicGridCellAlbum
            imageSrc="Single_2th-RecusE hidden.jpg"
            imageAlt="Single_2th-RecusE hidden"
          >
            YOUNHA Single Album<br/>
            느린 우체통<br/>
            <span className="text-gray-400 truncate">Single 2th Album</span>
          </MusicGridCellAlbum>
          <MusicGridCellAlbum
            imageSrc="5th-RescuE.jpg"
            imageAlt="5th-RescuE"
          >
            YOUNHA 5th Album<br/>
            RescuE<br/>
            <span className="text-gray-400 truncate">Studio Album</span>
          </MusicGridCellAlbum>
        </MusicGrid>
      </article>
    </MusicLayout>
  );
}