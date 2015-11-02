'use strict'

var parser = require('music.note.parser')

// Semitones from C to C D E F G A B
var SEMITONES = [ 0, 2, 4, 5, 7, 9, 11 ]

/**
 * Get the midi number of a note
 *
 * The note can be an string in scientific notation or a [pitch-array](https://github.com/danigb/pitch-array)
 *
 * @name midi
 * @function
 * @param {String|Array} note - the note in string or array notation
 * @return {Integer} the midi number
 *
 * @example
 * midi('A4') // => 69
 * midi('A3') // => 57
 */
module.exports = function midi (note) {
  var p = Array.isArray(note) ? note : parser(note)
  if (!p || (!p[2] && p[2] !== 0)) return null
  return SEMITONES[p[0]] + p[1] + 12 * (p[2] + 1)
}
