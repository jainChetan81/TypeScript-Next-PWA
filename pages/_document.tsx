import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/oo" />
					<meta name="theme-color" content="#fff" />
					<meta name="msapplication-TileColor" content="#2B5797" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-title" content="Quiz App" />
					<link rel="apple-touch-icon" href="https://ik.imagekit.io/aqaseg5nkl6/chetan.jpg?tr=w-200,h-200" />
					<link rel="shortcut icon" href="https://ik.imagekit.io/aqaseg5nkl6/chetan.jpg?tr=w-200,h-200" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:url" content="https://type-script-next-pwa.vercel.app" />
					<meta name="twitter:title" content="Quiz App" />
					<meta name="twitter:description" content="Quiz app by Next js created by Chetan Jain" />
					<meta name="twitter:image" content="https://ik.imagekit.io/aqaseg5nkl6/chetan.jpg?tr=w-200,h-200" />
					<meta name="twitter:creator" content="@DavidWShadow" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Quiz App" />
					<meta property="og:description" content="Quiz app by Next js created by Chetan Jain" />
					<meta property="og:site_name" content="Quiz App" />
					<meta property="og:url" content="https://type-script-next-pwa.vercel.app" />
					<meta property="og:image" content="https://ik.imagekit.io/aqaseg5nkl6/chetan.jpg?tr=w-200,h-200" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
