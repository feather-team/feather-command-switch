'use strict';

exports.name = 'switch';
exports.usage = '<project-name>'
exports.desc = 'switch your project';
exports.register = function(commander){
	commander
		.action(function(){
			var args = Array.prototype.slice.call(arguments);
			var name = args.shift();

			if(!name){
				feather.log.error('project name is empty!');
			}

			feather.util.write(feather.project.getTempPath('www') + '/c_proj', name);
			feather.log.notice('switch to project [' + name + ']');
		});
};