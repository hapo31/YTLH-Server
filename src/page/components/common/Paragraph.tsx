import React from "react";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
};

const Paragraph = React.memo(
  ({ title, children }: PropsWithChildren<Props>) => (
    <>
      <h2>{title}</h2>
      <p>{children}</p>
      <style jsx>{`
        h2 {
          margin-left: 10px;
          font-size: 16px;
        }

        h2::before {
          counter-increment: paragraph;
          content: " " counter(paragraph) ". ";
          border-left: solid 2px gray;
          padding-left: 5px;
          padding-bottom: 2px;
        }

        p {
          margin: 5px;
          margin-left: 20px;
          font-size: 12px;
        }
      `}</style>
    </>
  )
);

export default Paragraph;
