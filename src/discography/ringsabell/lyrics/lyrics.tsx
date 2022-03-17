import "../../../common/common.css"

import { Container, Typography } from '@material-ui/core';

import { LyricStyles } from '../../_template/styles'

export const RingsABellLyric = () => {

  const classes = LyricStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h6" align='left' display="block" className={classes.song_title}>
          春の陽気に誘われて
        </Typography>
        <Typography variant="body2" align='left' className={classes.lyric}>

          <div className={classes.lyric_block}>
            やわらかな日々は瞳の中<br />
            ウララカな陽<br />
            少し汗ばむけど<br />
            背伸びした後ろ姿には<br />
            シャツのシワが笑って見えた<br />
          </div>
          <div className={classes.lyric_block}>
            白く深い闇に飲まれてしまったら<br />
            頭の中 白昼夢の時<br />
            思い出していた<br />
          </div>
          <div className={classes.lyric_block}>
            そうだって<br />
            思い立って行けるわけじゃない<br />
            時間の旅を夢見て<br />
            また恋に落ちていた<br />
            想いは風に揺れてひらり<br />
            吹かれてふわり<br />
            「例えば」とか「もしも」でも<br />
            目を閉じればそばにいてよ<br />
            タラレバでもいいね<br />
            いつかはその笑顔が<br />
            日々の糧になっている<br />
          </div>
          <div className={classes.lyric_block}>
            どうしたって日常の痛みとかは<br />
            酔いに任せ<br />
            消すしかないけど<br />
          </div>
          <div className={classes.lyric_block}>
            堂々巡りだった緩い関係でいれたら<br />
            今頃どうなってたろう<br />
            ムダな妄想が<br />
          </div>
          <div className={classes.lyric_block}>
            こんな何もないの中にも<br />
            頭の中に浮かぶから<br />
            削れた年月も<br />
            変わらない春の陽気に誘われて<br />
            開かないドアの前で<br />
            鳴らないベルを押して<br />
            呼んだりしてみる<br />
            想いは風に吹かれてふわり<br />
            ひらりと揺れている<br />
          </div>
          <div className={classes.lyric_block}>
            どうしようもない時に<br />
            至って普通の言葉<br />
            却って良かったりするけど<br />
            どうせ交わらないしとか捻くれ<br />
            生温い風が吹けば<br />
            きっとまた思い出すでしょう<br />
            やわらかな日々は<br />
            特別に見えて 平凡な日常<br />
          </div>
        </Typography>
      </Container>
    </div>
  );
};