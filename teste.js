const test = [{ name: 'Daniel', ranking: 1 }, { name: 'Paulo', ranking: 2 }, { name: 'Jhon', ranking: 1 }]

let orderByRanking = test.map(() => (test.sort((a, b) => {
    if (a.ranking > b.ranking) return 1
    if (a.ranking < b.ranking) return -1
    return 0
})))


const averageByRanking = function (test) {
    let average
    for (let atr in test) {
        average = average + obj[atr]
    }
    return average / test.length
}
const test = [{ name: 'Daniel', ranking: 1 }, { name: 'Paulo', ranking: 2 }, { name: 'Jhon', ranking: 1 }]


let average = (acc, src) => acc / src.length

function sumObjectsByKey(test) {

    return test.reduce(average)

}

const test = [{ name: 'Daniel', ranking: 1 }, { name: 'Paulo', ranking: 2 }, { name: 'Jhon', ranking: 1 }]



function sumObjectsByKey(test) {

    return test.reduce((a, c) => {
        for (c in a) {
            console.log('oi', c)_
        }

    })

}