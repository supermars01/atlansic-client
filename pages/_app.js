import React from 'react'
import App from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './_app.css'

class MyApp extends App {
	// Only uncomment this method if you have blocking data requirements for
	// every single page in your application. This disables the ability to
	// perform automatic static optimization, causing every page in your app to
	// be server-side rendered.

	// static async getInitialProps(appContext) {
	//   // calls page's `getInitialProps` and fills `appProps.pageProps`
	//   const appProps = await App.getInitialProps(appContext);
	//
	//   return { ...appProps }
	// }

	componentDidMount(){
		const token = localStorage.getItem('token');
		if(token){
			document.cookie = "TOKEN=" + token;
		}
	}

	render() {
		const { Component, pageProps } = this.props
		return <Component {...pageProps} />
	}
}

export default MyApp;