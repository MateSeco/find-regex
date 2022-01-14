const fs = require('fs')
const path = require('path')
const { argv } = require('process')

const regex = argv[2]
const startingPath = path.resolve('.')

function checkRegex (currentPath) {
    let files = fs.readdirSync(currentPath) 
            files.forEach(file => {
                let newPath = currentPath + '/' + file
                    if (fs.statSync(newPath).isDirectory()) {
                        checkRegex(newPath)
                    }
                    if (fs.statSync(newPath).isFile() && file.match(regex)) {
                        console.log(newPath)
                    }
                })     
}

checkRegex('.')
