import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps};
    }

    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&family=Nunito:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument