import { EventsClient } from './events/events.client';
import { AnalyzerClient } from './analyzer/analyzer.client';
import { StoredReplyClient } from './stored-replies/stored-replies.client';
import { DocsClient } from './docs/docs.client';
import { Angie } from './angie/angie';
import * as http from 'http';
import {CommandTree} from './angie/command-decoder';
import {VersionsClient} from './versions/versions.client';

console.log('Environment Variables:');
console.log('TOKEN: ' + process.env.TOKEN);
console.log('NODE_ENV: ' + process.env.NODE_ENV);
console.log('ROOMS: ' + process.env.ROOMS);

const isProd = process.env.NODE_ENV === 'prod';

// the default id for for the https://gitter.im/angular-gitter-replybot/Lobby chat room for dev
const roomNames: string = isProd ? process.env.ROOMS : 'angular-gitter-replybot/Lobby';


const throttleThreshold = 250;

const commandTree: CommandTree = new CommandTree();
commandTree.registerSubCommand(new DocsClient().commandSubtree);
commandTree.registerSubCommand(new EventsClient().commandSubtree);
commandTree.registerSubCommand(new VersionsClient().commandSubtree);

const bots = roomNames.split(',')
  .map(roomName => new Angie(process.env.TOKEN, roomName, isProd, commandTree));


// this should the errors in the server logs
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('You\'re not really meant to be here');
}).listen(8080);

console.log('Angie Started');
