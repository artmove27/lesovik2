/**
 * Created by zews on 24.02.2016.
 */
'use strict';
var vk = new (require('vk-io'));
vk.setting({
    app: 114,
    email: 'user@example.com',
    pass: '1234'
});

vk.auth()
    .then((token) => {
    // Дальше например сохраняете токен, он так же обновится в настройках
})