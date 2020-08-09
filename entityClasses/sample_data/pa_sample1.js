const { RL_types } = require('../models/Consts');

const rl_parent_of =  'RLT-' + RL_types.PARENT_OF;

const pas = [
    {
        cat: 'PA1',
        name: 'en:Mao Ze Dong||zh:---',
        descr: {
            gender: 'male',
            dob: '1893-12-26'
        }, 
        rels: {
            [rl_parent_of]: [] 
        }
    },
    {
        cat: 'PA1',
        name: 'en:Yang Kai Hui||zh:---',
        descr: {
            gender: 'female',
            dob: '1899-02-26'
        } 
    },
    {
        cat: 'PA1',
        name: 'en:Mao An Ying||zh:---',
        descr: {
            gender: 'male',
            dob: '1923-02-26'
        } 
    },
    {
        cat: 'PA1',
        name: 'en:Mao An Qing||zh:---',
        descr: {
            gender: 'male',
            dob: '1893-12-26'
        } 
    },
]

module.exports = pas;