import style from "styled-jsx";
import Paragraph from "../components/common/Paragraph";
import ParagraphContainer from "../components/common/ParagraphContainer";

const PrivacyPolicy = () => {
  return (
    <main>
      <h1>Tube Live Helper プライバシーポリシー</h1>
      <h4>最終更新日時: 2021/09/19</h4>
      <p>
        本文書は、Tube Live Helper Chrome 拡張
        (以下、本拡張機能と呼びます)や、その周辺サービスにおける、個人情報の取り扱い方法について記します。
      </p>
      <ParagraphContainer>
        <Paragraph title="利用目的">
          YouTube Data API
          を使用し、その機能の範囲においてデータを取得するため。
        </Paragraph>
        <Paragraph title="取得するデータ">
          <ul>
            <li>
              Youtube Data API
              にアクセスすることのみ許可された、アクセストークンの取得
            </li>
            <li>スーパーチャットのデータ</li>
          </ul>
        </Paragraph>
        <Paragraph title="サーバーに保存するデータ">
          ありません。（取得後にすべて破棄されます
        </Paragraph>
        <Paragraph title="本拡張機能に保存するデータ">
          Youtube Data API
          のアクセスのためのアクセストークン及び、情報を更新するためのリフレッシュトークン。
        </Paragraph>
        <Paragraph title="Google に送信するデータ">
          Youtube Data API
          のアクセスのためのアクセストークン及び、情報を更新するためのリフレッシュトークン。
        </Paragraph>
        <Paragraph title="本拡張機能に保存された個人情報(アクセストークン)の削除方法">
          本拡張をブラウザから削除する、または、本拡張機能の中の「認証」タブの「認証を解除」ボタンをクリックする。
          <br />
          ※サーバーサイドには情報を保存しないため、サーバーサイドで管理される個人情報は一切ありません。
        </Paragraph>
        <Paragraph title="サーバーアクセスログの管理">
          本サービスでは、サーバーサイドでは個人を特定出来るログを保存しません。
        </Paragraph>
        <Paragraph title="情報提供の任意性">
          本拡張機能では、一部機能のために
          Googleアカウントの認証を必要としますが、これに同意しない場合、認証せずに使用することが可能です。
          <br />
          ただし、その場合は一部機能がご利用頂けない場合がございます。
        </Paragraph>
      </ParagraphContainer>
      <style jsx>{`
        body {
          background-color: #efefef;
        }

        main {
          display: flex;
          flex-direction: column;
        }

        h4 {
          margin-left: auto;
          font-size: 12px;
        }

        ul {
          padding-left: 20px;
        }
      `}</style>
    </main>
  );
};

export default PrivacyPolicy;
