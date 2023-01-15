function endsWithScriptChecker(string) {
	return string.endsWith('Script');
}

const endsWithScriptCheckerAF = (string) => string.endsWith('Script');

// console.log(endsWithScriptChecker('javaScript'))

module.exports = {endsWithScriptChecker, endsWithScriptCheckerAF}