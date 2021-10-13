import "../../../common/common.css"

import { Container, Typography } from '@material-ui/core';

import { LyricStyles } from '../../_template/styles'

export const NostalgiaLyric = () => {

  const classes = LyricStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h6" align='left' display="block" className={classes.song_title}>
          ノスタルジー
        </Typography>
        <Typography variant="body2" align='left' className={classes.lyric}>

          <div className={classes.lyric_block}>
            毎日毎晩溺れてたら<br />
            いつのまにか消えていたことが<br />
            遠回りしてついに目の前に現れた<br />
            「おはよう、おやすみ」より大事な<br />
            触れたら溶けていってしまいそうな<br />
            そんな感じのメロディーライン<br />
          </div>
          <div className={classes.lyric_block}>
            例えば君の脳になれたなら<br />
            君の体に入り込めたなら<br />
            どれだけ楽なことか<br />
            イメージしているよ<br />
            その目に映る景色を見たり<br />
            その耳で聴く音を知りたいな<br />
            そんな感じの日々で<br />
          </div>
          <div className={classes.lyric_block}>
            3分前の風景にさよならをすれば<br />
            悲しくなるほどモノクロだな<br />
            ちょっとは色付いてよ<br />
            思い出のランドスケープ<br />
            青い旅<br />
            また思い出しちゃうな<br />
          </div>
          <div className={classes.lyric_block}>
            あの日々に触れたらいつも青くて<br />
            たまらなくなるけど<br />
            アスファルトいろいろ踏んだら<br />
            笑顔も忘れちゃっていて<br />
          </div>
          <div className={classes.lyric_block}>
            逆さまの世界も悪くはないけど<br />
            なんか違うんだよな<br />
          </div>
          <div className={classes.lyric_block}>
            ずぶ濡れのままで追いかけた<br />
            映画みたいな日々だった<br />
            ねえ ちょっとは色付いてよ<br />
            白黒のポートレート<br />
            青い旅<br />
            また思い出しちゃうな<br />
          </div>
          <div className={classes.lyric_block}>
            風が吹く<br />
            その感じ方さえもね<br />
            いつか変わってしまうから<br />
            あの日々がきらめくほどに反射する<br />
            今を超えてゆけ<br />
          </div>
          <div className={classes.lyric_block}>
            時計の針を止めて<br />
            向かうんだいつかの<br />
            ノスタルジーな時間へ<br />
          </div>
          <div className={classes.lyric_block}>
            砂に埋もれた思い出ほろほろ<br />
            雲をつかんで空まで飛べてた<br />
            ワインの色した髪を撫でて眠ってた<br />
            思い通りに行かないことも<br />
            汗といっしょに流れていたな<br />
            そんな感じの日々で<br />
          </div>
        </Typography>
      </Container>
    </div>
  );
};