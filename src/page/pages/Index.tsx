import Paragraph from "../components/common/Paragraph";

const Index = () => {
  return (
    <main>
      <h1>以下は工事中です。。。</h1>
      <h1>YouTube Live Helper 拡張機能の使い方</h1>
      <Paragraph title="拡張機能バーに表示されていなければ固定する">
        Edge だといきなり表示されてるかも。 以下はChromeの場合
        ![extbar](imgs/tutorial_0.jpg)
        赤丸の部分をクリックして出てきたメニューのピン止めマークを押すと、拡張機能のところに「Y」アイコンが表示されるはず。
      </Paragraph>
      <Paragraph title="アイコンをクリックして、ポップアップを表示する">
        ![popup](imgs/tutorial_000.jpg)
      </Paragraph>
      <Paragraph title="「認証」タブをクリックして「認証する」ボタンを押して、しばらく待つ">
        <h3>
          ごめんなさい、安いサーバーを使ってるので応答まで時間がかかります。
        </h3>
        ![auth](imgs/tutorial0.jpg) ## 3.
      </Paragraph>
      <Paragraph title="しばらくすると、Googleのログインページが開くので、ログインする。">
        この時点でポップアップは閉じて大丈夫。 ![google](imgs/tutorial3_0.jpg)
        ##
      </Paragraph>
      <Paragraph title="以下の警告が出るので、手順に従って次に進む ###">
        これは僕のせいなので、この画面が出なくなるようにそのうちきちんと認証します…。
        「詳細」 ![warn](imgs/tutorial1.jpg)
        「ytlh-server.herokuapp.com（安全ではないページ）に移動」
        ![warn](imgs/tutorial2.jpg)
      </Paragraph>
      <Paragraph title="アクセス権限を確認して付与し、 Continue">
        チェックボックスが出てたらチェックを入れてあげること。
        ![info](imgs/tutorial3.jpg)
      </Paragraph>
      <Paragraph title="以下の画面が出てきたら認証完了">
        ~~クソみてーに簡単な画面だな~~ ## 7.
        もう一度「Y」アイコンをクリックしてポップアップを表示し、「ログ」タブを確認する
        ![ok](imgs/tutorial4.jpg)
      </Paragraph>
      <Paragraph title="画像の赤線に出てくる長い文字列をコピーして僕に報告！">
        ![log](imgs/tutorial5.jpg)
        きちんと動いていればここにスパチャの情報が出てくるはず・・・。
        ~~ちなみに僕は収益化通ってないので空っぽです~~
      </Paragraph>
    </main>
  );
};

export default Index;
