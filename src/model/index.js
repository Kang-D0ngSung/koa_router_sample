const db = require("../db");
const self = {};

self.main = async ({des, replyText, userId}) => {
    // INSERT INTO \'테이블_이름\' VALUES (?, ?);
    const Account = db('테이블 이름');

    // await Account.insert({description: des, reply_text: replyText}).where(id, userId);

    // await Account.where('id', '=', userId).update({description: des, reply_text: replyText});

    await Account.where({'id': userId}).update({'description': des, 'reply_text': replyText});

}

module.exports = self;