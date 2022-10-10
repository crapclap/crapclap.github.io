import "../../../common/common.css"

import { Container, Typography } from '@material-ui/core';

import { LyricStyles } from '../../_template/styles'

export const SlowmotionFilmLyric = () => {

  const classes = LyricStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h6" align='left' display="block" className={classes.song_title}>
          スローモーションフィルム
        </Typography>
        <Typography variant="body2" align='left' className={classes.lyric}>

          <div className={classes.lyric_block}>
            ネオンサイン<br />
            街に溶けた<br />
            ハチミツ色の後ろ姿<br />
            境目なんてどこにもない夜<br />
            その刹那に<br />
            揺れ動く<br />
            朝になれば<br />
            ご都合主義で鳥は鳴いた<br />
            境目なんてどこにもない日々<br />
            その切なさ<br />
          </div>
          <div className={classes.lyric_block}>
            空は晴れて<br />
            儚さを締め付けて止まらず<br />
            長く伸びた 残り香を辿り<br />
            音のする方へ<br />
          </div>
          <div className={classes.lyric_block}>
            この胸のざわめきに<br />
            身を委ねるってのもいいね<br />
            長すぎる夜の退屈 うらやむ<br />
            夢のような午前2時<br />
            広がる セピアのグレイ<br />
            スローモーションで流れてる<br />
          </div>
          <div className={classes.lyric_block}>
            黄色っぽい 映画をみて<br />
            冷めないコーヒーのように<br />
            踊るように 重なるぼくら<br />
            夜の帳<br />
          </div>
          <div className={classes.lyric_block}>
            どこまでも行けそうな<br />
            酔い心地 昨夜のキスに<br />
            巻き戻せるのならば もっと知りたい<br />
            地下鉄 軋むレール<br />
            車窓もセピアのグレイ<br />
            スローモーションで流れてる<br />
          </div>
          <div className={classes.lyric_block}>
            摩天楼に染まって<br />
          </div>
          <div className={classes.lyric_block}>
            この胸のざわめきに<br />
            身を委ねるってのもいいね<br />
            長すぎる夜の退屈 思い出して<br />
            どこまでも行けそうな<br />
            土曜日を包んだストーリー<br />
            スローモーションで夢心地<br />
          </div>
        </Typography>
      </Container>
    </div>
  );
};