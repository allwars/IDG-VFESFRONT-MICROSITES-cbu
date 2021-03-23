import tools from './tools';

tools.onStylesReady = () => {
	console.log("Site visually ready")

}

if(document.querySelector('link[href*="mainvfresp.min.css"]')) {
	document.querySelector('link[href*="mainvfresp.min.css"]').remove();
}