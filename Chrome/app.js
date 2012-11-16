var proxies = "function FindProxyForURL(url, host) {\n"+
	"var basic_files = [/.*\.gif/, /.*\.png/, /.*\.jpg/, /.*\.mp3/, /.*\.js/, /.*\.css/, /.*\.mp4/, /.*\.flv/, /.*\.swf/];\n"+
	"for(var i=0;i<basic_files.length;i++){\n"+
		"if(url.match(basic_files[i])){\n"+
			"return 'DIRECT';\n"+
		"}\n"+
	"}\n"+
	"var usa = ['hulu.com', 'netflix.com', 'pandora.com'];\n"+

	"var usa2 =['cbs.com', 'imrworldwide.com', 'can.cbs.com', 'edgesuite.net', 'theplatform.com', 'innovid.com', 'ocp.cbs.com', 'last.fm'];\n"+

	"var uk = ['bbc.co.uk'];\n"+

	"var direct = ['assets.hulu.com', 'll.a.hulu.com', 'ads.hulu.com', 'stats.pandora.com', 'blog.netflix.com', 'nordicsblog.netflix.com', 'blog.pandora.com', 'mads.cbs.com'];\n"+
		
	"for(var i=0;i<direct.length;i++){\n"+
		"if(host.indexOf(direct[i]) > -1){\n"+
			"return 'DIRECT';\n"+
		"}\n"+
	"}\n"+
	"if(host.match(/audio.*\.pandora\.com/) || host.match(/const.*\.pandora\.com/) || host.match(/mediaserver.*\.pandora\.com/) || host.match(/cont.*\.pandora\.com/)){\n"+
		"return 'DIRECT';\n"+
	"}\n"+

	//for Us
	"for(var i=0;i<usa.length;i++){\n"+
		"if(host.indexOf(usa[i]) > -1){\n"+
			"return 'PROXY 50.116.59.63:80';\n"+
		"}\n"+
	"}\n"+

	//for Us2
	"for(var i=0;i<usa2.length;i++){\n"+
		"if(host.indexOf(usa2[i]) > -1){\n"+
			"return 'PROXY 198.27.100.200:8080';\n"+
			//"return 'PROXY 199.193.248.26:3128';\n"+			
			//return 'PROXY 216.17.106.16:3128';
		"}\n"+
	"}\n"+

	//for uk
	"for(var i=0;i<uk.length;i++){\n"+
		"if(host.indexOf(uk[i]) > -1){\n"+
			"return 'PROXY 89.16.175.204:3128';\n"+			
		"}\n"+
	"}\n"+
	"return 'DIRECT';\n"+
"}";
chrome.proxy.settings.set({
	value: {
		mode: "pac_script",
		pacScript: {
			data: proxies
		}
	}, scope: "regular"
});
