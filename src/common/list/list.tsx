// MUSIC ARTWORK
import GoodLookingMan_Artwork from '../../../src/discography/good-looking-man/img/glm-artwork.jpg'
import Merry_Artwork from '../../../src/discography/merry/img/merry-artwork.jpg'
import Nostalgia_Artwork from '../../../src/discography/nostalgia/img/nostalgia-artwork.jpg'
import RingsABell_Artwork from '../../../src/discography/ringsabell/img/ringsabell-artwork.png'
import SlowmotionFilm_Artwork from '../../../src/discography/slowmotion-film/img/slowmotion-film.png'
import Sugar_Artwork from '../../../src/discography/sugar/img/sugar-artwork.jpg'
import SundayComesAgain_Artwork from '../../../src/discography/sunday-comes-again/img/sca-artwork.jpg'


// VIDEO THUMBNAIL
import AwakenFromADream_Thumbneil from '../../common/img/thumbnail/awaken-from-a-dream.jpg'
import Nostalgia_Thumbnail from '../../common/img/thumbnail/nostalgia.png'
import OneThreeFour_Thumbnail from '../../common/img/thumbnail/134.png'
import RingsABell_Thumbnail from '../../common/img/thumbnail/ringsabell.png'
import SlowmotionFilm_Thumbnail from '../../common/img/thumbnail/slowmotion-film.png'

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
  link: {
    apple_music: string,
    spotyfy: string,
  }
}

type Video = {
  title: string,
  url: string,
  videoId: string,
  thumbnail: string,
  description: string,
}

export const VideoList: Video[] = [
  {
    title: '夢から醒めたら',
    url: 'https://youtu.be/yoY3kVxj_1U',
    videoId: 'yoY3kVxj_1U',
    thumbnail: AwakenFromADream_Thumbneil,
    description: 'MV',
  },
  {
    title: 'スローモーションフィルム',
    url: 'https://youtu.be/jNTnYXFiPIA',
    videoId: 'jNTnYXFiPIA',
    thumbnail: SlowmotionFilm_Thumbnail,
    description: 'Lyric Video',
  },
  {
    title: '春の陽気に誘われて',
    url: 'https://www.youtube.com/watch?v=zgmIGma_Las',
    videoId: 'zgmIGma_Las',
    thumbnail: RingsABell_Thumbnail,
    description: 'Lyric Video',
  },
  {
    title: '134',
    url: 'https://www.youtube.com/embed/7veW-1xhsj8',
    videoId: '7veW-1xhsj8',
    thumbnail: OneThreeFour_Thumbnail,
    description: 'MV',
  },
  {
    title: 'ノスタルジー',
    url: 'https://www.youtube.com/embed/Q5x-ak26g4w',
    videoId: 'Q5x-ak26g4w',
    thumbnail: Nostalgia_Thumbnail,
    description: 'MV'
  },
  {
    title: 'メリー',
    url: 'https://www.youtube.com/embed/FGiCqA6oTZ4',
    videoId: 'FGiCqA6oTZ4',
    thumbnail: 'https://i.ytimg.com/vi/FGiCqA6oTZ4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLVAC2IInKtJ0nO3BOIjPVteLw1g',
    description: 'Official Stream'
  },
  {
    title: 'Good looking man',
    url: 'https://www.youtube.com/embed/_TQq7mJ_9oY',
    videoId: '_TQq7mJ_9oY',
    thumbnail: 'https://i.ytimg.com/vi/_TQq7mJ_9oY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxZZeVYOBwxoWIrATkBIHPY0NORg',
    description: 'Trailer'
  },
  {
    title: 'Love me do',
    url: 'https://www.youtube.com/embed/TdS6HnqyESY',
    videoId: 'TdS6HnqyESY',
    thumbnail: 'https://i.ytimg.com/vi/TdS6HnqyESY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDggIKWxrm-kG-TVRwjb0SBvFNyXQ',
    description: 'Official Stream'
  },
  {
    title: 'Sunday comes again',
    url: 'https://www.youtube.com/embed/7Fl0JkKIKjc',
    videoId: '7Fl0JkKIKjc',
    thumbnail: 'https://i.ytimg.com/vi/7Fl0JkKIKjc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNf6Mw4kmQbyvDNuS8ZTF8Nd3AXA',
    description: 'Trailer'
  }
]

export const SlowmotionFilm: Music = {
  title: 'スローモーションフィルム',
  order: '4th Single',
  artwork: SlowmotionFilm_Artwork,
  page: 'slowmotion-film',
  song: [
    {
      name: 'スローモーションフィルム',
      id: 'SlowmotionFilm',
    }
  ],
  link: {
    apple_music: 'https://music.apple.com/jp/album/%E3%82%B9%E3%83%AD%E3%83%BC%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%83%A0-single/1647356647?l=en&ls=1&app=music',
    spotyfy: 'https://open.spotify.com/album/5Q5BaGjsqd1sOWxtSPztr9',
  }
}

export const RingsABell: Music = {
  title: '春の陽気に誘われて',
  order: '3rd Single',
  artwork: RingsABell_Artwork,
  page: 'ringsabell',
  song: [
    {
      name: '春の陽気に誘われて',
      id: 'RingsABell',
    }
  ],
  link: {
    apple_music: 'https://music.apple.com/jp/album/%E6%98%A5%E3%81%AE%E9%99%BD%E6%B0%97%E3%81%AB%E8%AA%98%E3%82%8F%E3%82%8C%E3%81%A6-single/1612200755?l=en&ls=1&app=music',
    spotyfy: 'https://open.spotify.com/album/0gCHwVxGh5asQUxkO1fRj7',
  }
}

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
      id: 'Nostalgia',
    }
  ],
  link: {
    apple_music: 'https://music.apple.com/jp/album/%E3%83%8E%E3%82%B9%E3%82%BF%E3%83%AB%E3%82%B8%E3%83%BC-single/1567346857?l=en',
    spotyfy: 'https://open.spotify.com/album/0JfijCYTPFQv4MVN8SOsZ3?si=z1askKBIQiuQr8fwwnvMgg&dl_branch=1',
  }
}

export const Merry: Music = {
  title: 'メリー',
  order: '1st Single',
  artwork: Merry_Artwork,
  page: 'merry',
  song: [
    {
      name: 'メリー feat. Mayu from Nagie Lane',
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
  SlowmotionFilm,
  RingsABell,
  Sugar,
  Nostalgia,
  Merry,
  GoodLookingMan,
  SundayComesAgain,
]