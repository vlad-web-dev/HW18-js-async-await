function delay(data, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, ms)
    })
}

delay({name: "user"}, 1000).then((data) => console.log("Hello!", data))

async function getUserInfo() {
    return await delay({name: 'Vic', age: 21, id: 1},1000);
}

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    return await delay(userInfo,1000);
}

async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return await delay(userInfo,1000);
}


async function getResult() {
     await getUserInfo()
         .then(res => getUserAvatar(res))
         .then(res => getUserAdditionalInfo(res))
         .then(res => console.log(res))
}

getResult()

async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}
async function getInfo() {
    let user = await getUser();
    throw new Error('error');
}

getInfo()
    .catch(err => console.error(err))

