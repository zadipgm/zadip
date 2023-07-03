import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import Salesiq from "./salesiq";
import MetaTags from "comonents/seoHeadTag/metatag";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html dir={this.props.__NEXT_DATA__.locale === "ar" ? "rtl" : "ltr"}>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="HandheldFriendly" content="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@400&display=swap"
            rel="stylesheet"
          />
          <meta name="robots" content="index,follow" />
          <link href="https://zadip.sa" rel="canonical" />
          <MetaTags
            data={this.props.__NEXT_DATA__.props.data}
            locale={this.props.__NEXT_DATA__.locale}
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/images/favicon.png"
          />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <iframe
            title="gtm-title"
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7TKR52"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          <Salesiq
            widgetCode={
              "d7c25406e79976420cc2efe548ff944ed75097dfb86910ae5e9214b0773aa0f1"
            }
            domain={"https://salesiq.zoho.com/widget"}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
