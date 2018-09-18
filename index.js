const loaderUtils = require('loader-utils');
const fs = require('fs');
const uglifyJs = require('uglify-es');

module.exports = function(source){
	if(this.cacheable){
		this.cacheable();
	}

	let { scriptType='text/javascript', isUglify=false } = loaderUtils.getOptions(this) || {};
	let script = '';
	if(isUglify){
		try{
			script = JSON.stringify(uglifyJs.minify(source));
		}catch(e){
			console.log(e)
		}
	}else{
		script = JSON.stringify(source);
	}

	var result = `module.exports = "<script type=${scriptType}>${script.replace(/^"|"$/g,'')}</script>"`;

    return result;
}