import React from 'react'
import { 
  Container, 
  Typography 
} from '@material-ui/core';

import { 
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles';

export const PulpFiction = () => {

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h6" align='left' display="block" className={classes.song_title}>
          パルプフィクション
        </Typography>
        <Typography variant="body2" align='left' className={classes.lyric}>
          <div className={classes.lyric_block}>
            タネも仕掛けもどこにもないのに<br />
            雲があまりにも早く進んでしまうから<br />
            日が暮れる様を気にも留めずに<br />
            目をつむっていた<br />
          </div>
          <div className={classes.lyric_block}>
            駅前で甘い言葉<br />
            少しだけランデブー<br />
            やわらかな風の中<br />
            煙を巻いて飛んで恋をする<br />
            冷めたミルクコーヒー<br />
            甘くない現実に肩落とした<br />
          </div>
          <div className={classes.lyric_block}>
            夏の匂いがして<br />
            少し焦ったりして<br />
            安っぽいキスに飲まれて<br />
            笑っていた<br />
          </div>
          <div className={classes.lyric_block}>
            確かめたいことはいつも<br />
            知りたくないことばかりだから<br />
            夢の中で笑えればいいか<br />
            三文小説の日々<br />
          </div>

          <div className={classes.lyric_block}>
            伸びすぎた陽は<br />
            君の長い髪を照らして<br />
            嘘みたいにクソみたいな<br />
            セリフ吐いて溶ける時間に<br />
            抱きしめたら大きくなってた希望に<br />
            心奪われた<br />
          </div>
          <div className={classes.lyric_block}>
            とにかくもう眠りにつこう<br />
            明日には忘れるんだから<br />
            もうちょっと浸りたいけど仕方ないな<br />
            三文小説の日々<br />
          </div>
          <div className={classes.lyric_block}>
            味わうほどのものではない<br />
            辛々逃げ込んだ秘密の部屋<br />
            映し出された記憶のキネマ<br />
          </div>
          <div className={classes.lyric_block}>
            抱きしめたい<br />
            通り過ぎてから気づく味気ない良さに<br />
            閃いて消えるからたまらないね<br />
            三文小説の日々<br />
          </div>
        </Typography>
      </Container>
    </div>
  );
};

export const OneThreeFour = () => {

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h6" align='left' display="block" className={classes.song_title}>
          134
        </Typography>
        <Typography variant="body2" align='left' className={classes.lyric}>
          <div className={classes.lyric_block}>
            思い出のあの島は<br />
            今じゃただの岩だ<br />
            さざなみに揺れて漂流<br />
            とこしえの波音の彼方<br />
            人は疎ら<br />
            ただ風に吹かれている<br />
          </div>
          <div className={classes.lyric_block}>
            赤くなった夕暮れの<br />
            香りまで覚えていた<br />
            いつまでも続いている気がした<br />
          </div>
          <div className={classes.lyric_block}>
            揺れる海岸線と<br />
            空を撫ぜるセレナーデ<br />
            まだ旧くない頭の中<br />
            風来者の潮風に誘われて<br />
            目と目が合った時の事<br />
            背中が合った時の事<br />
          </div>
          <div className={classes.lyric_block}>
            すべからく時は流れる<br />
            ノロマを乗せ<br />
            どこまでも進んでいく<br />
          </div>
          <div className={classes.lyric_block}>
            伸びすぎた陽の憂鬱も<br />
            止めどない影法師も<br />
            いつまでも続きそうだったんだ<br />
          </div>
          <div className={classes.lyric_block}>
            揺れる海岸線の波は跡を消さないで<br />
            寄せては返す言葉の先<br />
            風来者の潮風に誘われて<br />
            また暗んでいく空<br />
          </div>
          <div className={classes.lyric_block}>
            揺れる海岸線を終わりまで瞬いて<br />
            まだ旧くないあの日のまま<br />
            エンドロール<br />
            ガラス玉の目に映さないで<br />
            また眩んでいくから<br />
          </div>
        </Typography>
      </Container>
    </div>
  );
}

export const Summergreen = () => {

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h6" align='left' display="block" className={classes.song_title}>
          summergreen
        </Typography>
        <Typography variant="body2" align='left' className={classes.lyric}>
          <div className={classes.lyric_block}>
            まだ夢の中にいるみたいな<br />
            揺れたけむりが空に溶け出した<br />
            速くなる秒針眺めて<br />
            同じ様に見えてるかな<br />
          </div>
          <div className={classes.lyric_block}>
            いつになく暑い夜の<br />
            身体に張り付く湿り気のある膜<br />
            「たぶん」という便利な言葉で<br />
            いつだって空を飛んでる<br />
          </div>
          <div className={classes.lyric_block}>
            言葉は喉元伝って落ちた<br />
            冷めたアスファルトにへばりつく<br />
            意味のない視線は首筋<br />
            どんな風に見えてるかな<br />
          </div>
          <div className={classes.lyric_block}>
            鳴り止まぬ高鳴りを<br />
            抑えるではなく身を委ねてみたら<br />
            腑抜けたこの夜にお似合いの<br />
            星色の鳥になれる<br />
          </div>
          <div className={classes.lyric_block}>
            色のない泡の中へ飛び込んだ<br />
            遠くに広がるその胸の温度<br />
          </div>
          <div className={classes.lyric_block}>
            土砂降りの雨の中<br />
            自然と近づく距離が愛しくて<br />
            Tシャツと肌の間には<br />
            この夜の想い出<br />
          </div>
          <div className={classes.lyric_block}>
            くだらない1シーンも<br />
            いつしか物思うとは露知らずに<br />
            鼻歌まじり帰り道は<br />
            夏の夜の甘い記憶<br />
          </div>
        </Typography>
      </Container>
    </div>
  );
}

export const AmericanLemonade = () => {

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h6" align='left' display="block" className={classes.song_title}>
          アメリカンレモネード
        </Typography>
        <Typography variant="body2" align='left' className={classes.lyric}>
          <div className={classes.lyric_block}>
            眠れない夜と踊って靴を履いて<br />
            丸くない月に何度も問いかけては<br />
          </div>
          <div className={classes.lyric_block}>
            俯いた<br />
            そこにあったどんな景色より<br />
            輝いていた<br />
            永遠に幻の<br />
          </div>
          <div className={classes.lyric_block}>
            マチルダ<br />
            2人は魔法のように消えてしまうけど<br />
            飾らない笑顔で満たしてくれたから<br />
            味気ない光のような儚さで<br />
            また会える気がするそんな気がしている<br />
          </div>
          <div className={classes.lyric_block}>
            見つけたい<br />
            線路越しの駅のホーム<br />
          </div>
          <div className={classes.lyric_block}>
            サヨナラとまたねの丁度良いところ<br />
            摘み取れていたら<br />
            とりあえずやり過ごせたな<br />
          </div>
          <div className={classes.lyric_block}>
            永遠に幻の<br />
          </div>
          <div className={classes.lyric_block}>
            マチルダ<br />
            スカートの裾が揺れる季節の頃<br />
            飾らない笑顔に満たされていたから<br />
            分からないままで終わりが来れば<br />
            ああ<br />
            マチルダ<br />
            マチルダ<br />
          </div>
        </Typography>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    song_title: {
      paddingTop: 120,
      marginBottom: 50,
      marginLeft: 10,
      flexGrow: 1,
      fontFamily: 'ヒラギノ角ゴシック',
      // fontWeight: 'bold',
      fontSize: 25,
      color: "#0D1B22",
    },
    lyric: {
      marginLeft: 10,
      lineHeight: 2,
      fontFamily: "ヒラギノ角ゴシック",
      fontSize: 15,
      color: "#0D1B22",
    },
    lyric_block: {
      marginBottom: 36,
    }
  }),
);