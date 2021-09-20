import { memo, PropsWithChildren } from "react";
import style from "styled-jsx";

// eslint-disable-next-line @typescript-eslint/ban-types
const ParagraphContainer = memo(({ children }: PropsWithChildren<{}>) => (
  <>
    <div className="paragraph-root">{children}</div>
    <style jsx>{`
      .paragraph-root {
        counter-reset: paragraph;
      }
    `}</style>
  </>
));

export default ParagraphContainer;
