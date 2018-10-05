import {sync} from 'conventional-commits-parser';
import defaultChangelogOpts from 'conventional-changelog-angular';

export default parse;

async function parse(message, parser = sync, parserOpts) {
	const changelogOpts = await defaultChangelogOpts;
	
	// Use `changelogOpts` as the base options
	parserOpts = Object.assign({}, changelogOpts, parserOpts);

	const parsed = parser(message, parserOpts);
	parsed.raw = message;
	return parsed;
}
