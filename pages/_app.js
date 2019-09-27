import App, { Container } from "next/app";
import Page from "../components/Page";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // exposes the query to the user.
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container className="master">
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}
export default MyApp;
