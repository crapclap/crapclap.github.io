import React, { FC, useEffect, useState } from 'react';
import GoodLookingMan_Artwork from '../../../src/discography/good-looking-man/img/glm-artwork.jpg'
import Merry_Artwork from '../../../src/discography/merry/img/merry-artwork.jpg'
import Nostalgia_Artwork from '../../../src/discography/nostalgia/img/nostalgia-artwork.jpg'
import Sugar_Artwork from '../../../src/discography/sugar/img/sugar-artwork.jpg'
import SundayComesAgain_Artwork from '../../../src/discography/sunday-comes-again/img/sca-artwork.jpg'

type Song = {
  name: string,
  id: string,
}

type Music = {
  title: string,
  order: string,
  artwork: string,
  page: string,
  song: Song[],
  // song_id: string[],
  link: {
    apple_music: string,
    spotyfy: string,
  }
}

type Video = {
  title: string,
  url: string,
  description: string
}

export const VideoList: Video[] = [
  {
    title: '134',
    url: 'https://www.youtube.com/embed/7veW-1xhsj8',
    description: 'MV'
  },
  {
    title: 'ノスタルジー',
    url: 'https://www.youtube.com/embed/Q5x-ak26g4w',
    description: 'MV'
  },
  {
    title: 'メリー',
    url: 'https://www.youtube.com/embed/FGiCqA6oTZ4',
    description: 'Official Stream'
  },
  {
    title: 'Good looking man',
    url: 'https://www.youtube.com/embed/_TQq7mJ_9oY',
    description: 'Trailer'
  },
  {
    title: 'Love me do',
    url: 'https://www.youtube.com/embed/TdS6HnqyESY',
    description: 'Official Stream'
  },
  {
    title: 'Sunday comes again',
    url: 'https://www.youtube.com/embed/7Fl0JkKIKjc',
    description: 'Trailer'
  }
]

export const Sugar: Music = {
  title: 'Sugar',
  order: '3rd EP',
  artwork: Sugar_Artwork,
  page: 'sugar',
  song: [
    {
      name: 'パルプ・フィクション',
      id: 'PulpFiction',
    },
    {
      name: '134',
      id: 'OneThreeFour',
    },
    {
      name: 'summergreen',
      id: 'Summergreen',
    },
    {
      name: 'アメリカンレモネード',
      id: 'AmericanLemonade',
    },
  ],
  link: {
    apple_music: 'https://music.apple.com/jp/album/sugar-ep/1579303124?l=en&ls=1&app=music',
    spotyfy: 'https://open.spotify.com/album/3Tp1ylJ9adp1yTJJF4kXQp?si=9dusisAxS6-cQGcfgf0_9Q&dl_branch=1',
  }
}

export const Nostalgia: Music = {
  title: 'Nostalgia',
  order: '2nd Single',
  artwork: Nostalgia_Artwork,
  page: 'nostalgia',
  song: [
    {
      name: 'ノスタルジー',
      id: 'Nostargia',
    }
  ],
  link: {
    apple_music: 'https://music.apple.com/jp/album/%E3%83%8E%E3%82%B9%E3%82%BF%E3%83%AB%E3%82%B8%E3%83%BC-single/1567346857?l=en',
    spotyfy: 'https://open.spotify.com/album/0JfijCYTPFQv4MVN8SOsZ3?si=z1askKBIQiuQr8fwwnvMgg&dl_branch=1',
  }
}

export const Merry: Music = {
  title: 'メリー feat. Mayu from Nagie Lane',
  order: '1st Single',
  artwork: Merry_Artwork,
  page: 'merry',
  song: [
    {
      name: 'メリー',
      id: 'Merry',
    }
  ],
  link: {
    apple_music: 'https://music.apple.com/jp/album/%E3%83%A1%E3%83%AA%E3%83%BC-feat-mayu-from-nagie-lane-single/1545305521?l=en',
    spotyfy: 'https://open.spotify.com/album/3NIsHsr9ioDNWpLzgOcvYQ?si=MqA_wALxRJijsAQNhfePVA&dl_branch=1',
  }
}

export const GoodLookingMan: Music = {
  title: 'Good looking man',
  order: '2nd EP',
  artwork: GoodLookingMan_Artwork,
  page: 'good-looking-man',
  song: [
    {
      name: 'milk tea',
      id: 'MilkTea',
    },
    {
      name: '雨',
      id: 'Rain',
    },
    {
      name: 'the time',
      id: 'TheTime',
    },
  ],
  link: {
    apple_music: 'https://music.apple.com/jp/album/good-looking-man-single/1501479057?l=en',
    spotyfy: 'https://open.spotify.com/album/2Skm59dUfcOkGJav4iF3g6?si=FZ3cgM_9RUK1NWwJ7cN-hQ&dl_branch=1',
  }
}

export const SundayComesAgain: Music =
{
  title: 'Sunday comes again',
  order: '1st EP',
  artwork: SundayComesAgain_Artwork,
  page: 'sunday-comes-again',
  song: [
    {
      name: 'Love me do',
      id: 'LoveMeDo',
    },
    {
      name: 'トワイライト・ラプソディー',
      id: 'TwilightRhapsody',
    },
    {
      name: 'アンラッキーストライク',
      id: 'UnluckyStrike',
    },
  ],
  link: {
    apple_music: 'https://music.apple.com/jp/album/sunday-comes-again-single/1449089520?l=en',
    spotyfy: 'https://open.spotify.com/album/7c4DEQG7BCm9fjNZ4SFZ7P?si=Wh_-lORxTeyvoew4DnloeQ&dl_branch=1',
  }
}

export const MusicList: Music[] = [
  Sugar,
  Nostalgia,
  Merry,
  GoodLookingMan,
  SundayComesAgain,
]