import Paragraph from "../components/common/Paragraph";
import style from "styled-jsx";
import ParagraphContainer from "../components/common/ParagraphContainer";

const Index = () => {
  return (
    <>
      <main>
        <h1>YouTube Live Helper 拡張機能の使い方</h1>
        <ParagraphContainer>
          <Paragraph title="拡張機能バーに表示されていなければ固定する">
            Edge だといきなり表示されてるかも。 以下はChromeの場合
            <img alt="extbar" src="imgs/tutorial_0.jpg" />
            赤丸の部分をクリックして出てきたメニューのピン止めマークを押すと、拡張機能のところに「Y」アイコンが表示されるはず。
          </Paragraph>
          <Paragraph title="アイコンをクリックして、ポップアップを表示する">
            <img alt="popup" src="imgs/tutorial_000.jpg" />
          </Paragraph>
          <Paragraph title="「認証」タブをクリックして「認証する」ボタンを押して、しばらく待つ">
            <h3>
              ごめんなさい、安いサーバーを使ってるので応答まで時間がかかります。
            </h3>
            <p>具体的にはHerokuの無料枠</p>
            <img alt="auth" src="imgs/tutorial0.jpg" />
          </Paragraph>
          <Paragraph title="しばらくすると、Googleのログインページが開くので、ログインする。">
            この時点でポップアップは閉じて大丈夫。
            <img alt="google" src="imgs/tutorial3_0.jpg" />
          </Paragraph>
          <Paragraph title="以下の警告が出るので、手順に従って次に進む">
            これは僕のせいなので、この画面が出なくなるようにそのうちきちんと認証します…。
            「詳細」 <img alt="warn" src="imgs/tutorial1.jpg" />
            「ytlh-server.herokuapp.com（安全ではないページ）に移動」
            <img alt="warn" src="imgs/tutorial2.jpg" />
          </Paragraph>
          <Paragraph title="アクセス権限を確認して付与し、 Continue">
            チェックボックスが出てたらチェックを入れてあげること。
            <img alt="info" src="imgs/tutorial3.jpg" />
          </Paragraph>
          <Paragraph title="以下の画面が出てきたら認証完了">
            ~~クソみてーに簡単な画面だな~~
            <img alt="ok" src="imgs/tutorial4.jpg" />
          </Paragraph>
          <Paragraph title="もう一度「Y」アイコンをクリックしてポップアップを表示し、「スーパーチャット」タブを確認する"></Paragraph>
          <Paragraph title="ここにスパチャが出ていればOK">
            <img alt="log" src="imgs/tutorial5.jpg" />
            <s>ちなみに僕は収益化通ってないので空っぽです</s>
          </Paragraph>
        </ParagraphContainer>
      </main>
      <style jsx>{`
        main {
          width: 99vw;
        }
        .paragraph-root {
          width: 90%;
        }
        img {
          display: block;
          width: 70%;
        }
      `}</style>
    </>
  );
};

export default Index;
