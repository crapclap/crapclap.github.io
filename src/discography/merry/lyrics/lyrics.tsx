import React from 'react'
import {
  Container,
  Typography
} from '@material-ui/core';

import "../../../common/common.css"
import { LyricStyles } from '../../_template/styles'

export const MerryLyric = () => {

  const classes = LyricStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h6" align='left' display="block" className={classes.song_title}>
          メリー
        </Typography>
        <Typography variant="body2" align='left' className={classes.lyric}>

          <div className={classes.lyric_block}>
            悪さして 時計の針<br />
            特に意味はない 街のアンセムに<br />
            そっと酔いしれて 夜を越えて<br />
            時は止まらなくとも このままでいよう<br />
          </div>
          <div className={classes.lyric_block}>
            波音の中 電子の時計が映す<br />
            赤に染まった横顔<br />
          </div>
          <div className={classes.lyric_block}>
            目をつむるから 素敵な感触を求めてる<br />
            きらめく観覧車 少し飲み足りないけど<br />
            今なら永遠に待つわ<br />
          </div>
          <div className={classes.lyric_block}>
            こだまする スイートメロディー<br />
            とても堪らない イルミネーションに<br />
            ずっと酔いしれて 夜を越えて<br />
            夢が醒め止まぬ様に このままでいよう<br />
          </div>
          <div className={classes.lyric_block}>
            浮き足立っている街に逆らう様に<br />
            A very Merry Xmas Night!<br />
          </div>
          <div className={classes.lyric_block}>
            一寸先の景色も見えやしないのは<br />
            白い雪のせいにして また思い出してる<br />
          </div>
          <div className={classes.lyric_block}>
            ご機嫌な 猿芝居に<br />
            おあつらえ向きな 贅沢すぎた<br />
            そんな夜を越えて 酔いしれて<br />
            特別はいらないから このままでいたいよ<br />
          </div>
        </Typography>
      </Container>
    </div>
  );
};