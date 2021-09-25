import Head from "next/head";
import PropTypes from "prop-types";
import { GlobalStyle } from "../styles/App.styles";

function Layout({ title, keywords, description, children }: any) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="manifest" href="manifest.json" />
			</Head>

			<GlobalStyle />
			<main>{children}</main>
		</div>
	);
}
Layout.defaultProps = {
	title: "Quiz App",
	description: "",
	keywords: "",
};
Layout.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
};

export default Layout;
