/*
const { join } = require('path');
const SQLite = require('better-sqlite3');
const sql = new SQLite(join(__dirname, './data/database.sqlite'));

function setup() {
	const table = sql.prepare('SELECT count(*) FROM sqlite_master WHERE type=\'table\' AND name = \'freelancer\';').get();
	if (!table['count(*)']) {
		sql.prepare('CREATE TABLE IF NOT EXISTS prefixes (id TEXT PRIMARY KEY, prefix TEXT);').run();
		sql.prepare('CREATE UNIQUE INDEX idx_prefixes_id ON prefixes (id);').run();
		sql.pragma('synchronous = 1');
		sql.pragma('journal_mode = wal');
	}

	const tableTwo = sql.prepare('SELECT count(*) FROM sqlite_master WHERE type=\'table\' AND name = \'tickets\';').get();
	if (!tableTwo['count(*)']) {
		sql.prepare('CREATE TABLE IF NOT EXISTS generated (id TEXT PRIMARY KEY, commandsUsed INTEGER);').run();
		sql.prepare('CREATE UNIQUE INDEX idx_generated_id ON generated (id);').run();
		sql.pragma('synchronous = 1');
		sql.pragma('journal_mode = wal');
	}

	sql.aggregate('addAll', {
		start: 0,
		step: (total, nextValue) => total + nextValue,
	  });
}

function getPrefix(guildID) {
	let prefix = sql.prepare('SELECT prefix FROM prefixes WHERE id = ?').pluck().get(guildID);
	if(!prefix) prefix = process.env.DEFAULT_PREFIX;
	return prefix;
}

function setPrefix(id, prefix) {
	sql.prepare('INSERT OR REPLACE INTO prefixes (id, prefix) VALUES (@id, @prefix);')
		.run({ id, prefix });
}

function usedCommand(id) {
	let commandsUsed = sql.prepare('SELECT commandsUsed FROM generated WHERE id = ?').get(id);
	if(commandsUsed) commandsUsed = commandsUsed[0];
	if(!commandsUsed) commandsUsed = 0;

	commandsUsed = commandsUsed + 1;
	
	sql.prepare('INSERT OR REPLACE INTO generated (id, commandsUsed) VALUES (@id, @commandsUsed);')
		.run({ id, commandsUsed });
}

function usedStats(guildID) {
	if(guildID) {
		let commandsUsed = sql.prepare('SELECT addAll(commandsUsed) FROM generated WHERE id = ?').pluck().all(guildID);
		if(!commandsUsed) commandsUsed = 0;
		return commandsUsed;
	}
	else {
		let commandsUsed = sql.prepare('SELECT addAll(commandsUsed) FROM generated').pluck().all();
		if(!commandsUsed) commandsUsed = 0;
		return commandsUsed;
	}
}

module.exports = {
	setup,
	getPrefix,
	setPrefix,
	usedCommand,
	usedStats,
};
*/