const shuffledArray = array => array.slice().sort(() => 0.5 - Math.random());

let casualCards = [
    { id: 1, type: 'a', iconType: 'fas', icon: 'anchor', flip: false, finished: false },
    { id: 2, type: 'a', iconType: 'fas', icon: 'anchor', flip: false, finished: false },
    { id: 3, type: 'b', iconType: 'fab', icon: 'angellist', flip: false, finished: false },
    { id: 4, type: 'b', iconType: 'fab', icon: 'angellist', flip: false, finished: false },
    { id: 5, type: 'c', iconType: 'fas', icon: 'apple-alt', flip: false, finished: false },
    { id: 6, type: 'c', iconType: 'fas', icon: 'apple-alt', flip: false, finished: false },
    { id: 7, type: 'd', iconType: 'fas', icon: 'angry', flip: false, finished: false },
    { id: 8, type: 'd', iconType: 'fas', icon: 'angry', flip: false, finished: false },
    { id: 9, type: 'e', iconType: 'fas', icon: 'atom', flip: false, finished: false },
    { id: 10, type: 'e', iconType: 'fas', icon: 'atom', flip: false, finished: false },
    { id: 11, type: 'f', iconType: 'fas', icon: 'atlas', flip: false, finished: false },
    { id: 12, type: 'f', iconType: 'fas', icon: 'atlas', flip: false, finished: false },
    { id: 13, type: 'g', iconType: 'fas', icon: 'award', flip: false, finished: false },
    { id: 14, type: 'g', iconType: 'fas', icon: 'award', flip: false, finished: false },
    { id: 15, type: 'h', iconType: 'fas', icon: 'balance-scale', flip: false, finished: false },
    { id: 16, type: 'h', iconType: 'fas', icon: 'balance-scale', flip: false, finished: false },
];

export let shuffledCasual = shuffledArray(casualCards);
console.log('shuffledCasual data:', shuffledCasual);