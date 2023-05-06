import { sum } from './utils/sum';

type Message = {
    content: string;
}

let msg: Message = { content: "World!" };

mp.msg.log('info', `Hello ${msg.content}, 1 + 1 = ${sum(1, 1)}`)
