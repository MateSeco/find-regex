const fs = require('fs')
const path = require('path')
const { argv } = require('process')

const regex = argv[2]
const startingPath = path.resolve('.')

function checkRegex (currentPath) {
    fs.readdir(currentPath, (err, elements) => {
        console.log('currentPath: ', currentPath)
        if(err) console.log('err')
        elements.forEach(elem => {
            console.log('elem: ', elem)
            fs.stat(elem, (err, stats) => {
                if(err) console.log('err')
                if (stats && stats.isFile() && elem.match(regex)) {
                    //console.log(elem)
                }
                if (stats && stats.isDirectory()) {
                    let newPath = path.resolve(elem)
                    console.log('newPath: ', newPath)
                    checkRegex(newPath)
                }
            })      
        })
    })
}

checkRegex(startingPath)
