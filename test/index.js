var inherit = require('../')
var fs = require('fs')
var test = require('tape')
var postcss = require('postcss')

function fixture (name) {
    return fs.readFileSync('test/fixtures/' + name + '.css', 'utf-8').trim()
}

function output (name) {
    return fs.readFileSync('test/fixtures/' + name + '.out.css', 'utf-8').trim()
}

function compare (name) {
    return test(name, function (t) {
        var res = postcss().use(inherit()).process(fixture(name)).css.trim()
        t.same(res, output(name))
        t.end()
    })
}

compare('test-1')
compare('test-2')
compare('test-3')
compare('test-4')
