/* tslint:disable:max-line-length */
import { StoredReply } from './stored-reply';

export const replies: StoredReply[] = [
  { keys: ['getting started'], message: `To get started with Angular, do [Quickstart](https://angular.io/docs/ts/latest/quickstart.html). After that, go through [Tour of Heroes (ToH)](https://angular.io/docs/ts/latest/tutorial/). Check the [Guide](https://angular.io/docs/ts/latest/guide/) for how to proceed { keys: [after that. Good (often advanced) blogs are [Thoughtram](http://blog.thoughtram.io/exploring-angular-2/) and [Victor Savkin's blog](https://vsavkin.com/). A good starting point for a project is [angular-cli](https://github.com/angular/angular-cli)`},
  { keys: ['not enough info'], message: `Please provide a brief description of what's going with the code. Pasting the error and saying "it's not working" doesn't help us help you. When did the problem start happening? Does it work if you remove/add some lines? Does it work in a different context? What have you tried so far?`},
  { keys: ['create plunker'], message: `It's very helpful to [create a plunker](http://plnkr.co/edit/tpl:AvJOMERrnz94ekVua0u5?p=catalogue) where you create a **minimal** reproduction of your problem, when possible. You're also likely to actually solve the problem yourself while doing so.`},
  { keys: ['please format'], message: `Please format your code. At the bottom-right of the chat's input box there is a \`M\` (Markdown) button which explains how to format snippets.`},
  { keys: ['create gist'], message: `Please [create a gist](https://gist.github.com/) if your code is more than 8-10 lines long. It's difficult to keep track of the conversation in the chatroom when there is a huge block of code in the way. It's also difficult for us to look at your code this way.`},
  { keys: ['not angular question'], message: `For **ng-cli** related questions, see [angular-cli on gitter](https://gitter.im/angular/angular-cli). For **ng-bootstrap**, [open a question on SO](http://stackoverflow.com/questions/tagged/ng-bootstrap).`},
  { keys: ['angular3'], message: `There won't be Angular3. See more information on [Angular versions past version 2.x.x](http://angularjs.blogspot.co.nz/2016/12/ok-let-me-explain-its-going-to-be.html)`},
  { keys: ['route reuse'], message: `For more information on the Route Reuse Stratergy [please see here](http://stackoverflow.com/questions/41280471/how-to-implement-routereusestrategy-shoulddetach-for-specific-routes-in-angular/41515648#41515648)`},
  { keys: ['track by'], message: `\`trackBy:item?.id\` does not work, please see docs for more information: [Docs](https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html)`},
  { keys: ['angularjs'], message: `This room is for Angular (version 2+), please visit [here for AngularJS](https://gitter.im/angular/angular.js)`},
  { keys: ['noStoredReply'], message: `I'm Sorry, I don't have a reply for that. I'm not very smart but you can help make me better by [contributing](https://github.com/Toxicable/angular-gitter-replybot)`},
  { keys: ['global'], message: `Global doesn't exist in Angular's context, there is only scoping. For example if you have two modules (\`Module1\` and \`Module2\`), if you import an external Module that has a component: \`<spinner></spinner>\` it is only available in \`Module1\`, you will have to import it into \`Module2\` to access it there. See the [FAQ](https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html) for more info.`},
  { keys: ['cors'], message: `CORS is nothing to do with your client (being Angular). CORS is a server-side issue; there are two ways around it; you can either proxy your client server to the same origin as your API server or you can configure your API server to allow for requests from your clients origin`},
  { keys: ['async/await'], message: `Angular makes heavy use of Observable therefore the async/await pattern is generally not needed since you would have to convert your Observables to Promises which means you miss out of the cancellation/retry logic that Observables are so good at`},
  { keys: ['conduct'], message: 'This room follows all rules outlined [Angular\'s Code of Coduct](https://github.com/angular/code-of-conduct), pelase follow this or you may be banned'},
];
