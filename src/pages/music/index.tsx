import React from "react";
import Badge from "@/shared/ui/common/Badge";
import {
  Logo,
  MusicGrid,
  MusicGridCellAlbum,
  SNBItem,
} from "@/features/music";
import { FlexColBox } from "@/shared/ui/common/FlexBox";

export default function Page() {
  return (
    <div className="flex relative w-full h-full bg-[rgba(31,31,31,1)]">
      <aside
        className="
          w-0 sm:w-48 md:w-52 lg:w-72 h-full bg-[rgba(35,35,36,1)]
          transform -translate-x-full sm:translate-x-0
          transition-all duration-500 ease-in-out
          hidden sm:flex flex-col items-start gap-5
          p-4 overflow-x-hidden overflow-y-auto
        "
      >
        <Logo />
        <input
          name="query"
          type="text"
          placeholder="Search"
          className="w-full h-8 bg-[#3F3F3F] text-white border border-[#8F8F8F] rounded-lg px-2"
        />
        <FlexColBox className="gap-2">
          <SNBItem href="/music" imageName="home">홈</SNBItem>
        </FlexColBox>
        <FlexColBox>
          <div className="text-xs text-gray-400 px-1">앨범</div>
          <FlexColBox className="gap-2">
            <SNBItem href="/music/album/growth-theory-re" imageName="lullaby">
              <Badge color="pink">7th</Badge>
              Growth Theory
              <Badge color="purple">RE</Badge>
            </SNBItem>
            <SNBItem href="/music/album/growth-theory" imageName="lullaby">
              <Badge color="pink">7th</Badge>
              Growth Theory
            </SNBItem>
            <SNBItem href="/music/album/end-theory-re" imageName="lullaby">
              <Badge color="pink">6th</Badge>
              End Theory
              <Badge color="purple">RE</Badge>
            </SNBItem>
            <SNBItem href="/music/album/end-theory" imageName="lullaby">
              <Badge color="pink">6th</Badge>
              End Theory
            </SNBItem>
          </FlexColBox>
        </FlexColBox>
        <FlexColBox>
          <div className="text-xs text-gray-400 px-1">응원법</div>
          <FlexColBox className="gap-2">
            <SNBItem href="/music/cheer/2024" imageName="chat">2024 연말콘</SNBItem>
          </FlexColBox>
        </FlexColBox>
      </aside>
      <article className="flex flex-col flex-1 p-6 gap-4 overflow-y-auto">
        <h1 className="text-white text-3xl font-bold">홈</h1>
        <hr className="border border-[#2E2E2E]"/>
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
    </div>
  );
}