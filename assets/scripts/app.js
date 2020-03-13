'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game-logic')
const ui = require('./auth/ui')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.box').on('click', gameEvents.fillSpace)
  $('#new-game').on('submit', gameEvents.newGame)
  $('#game-count').on('submit', gameEvents.showCount)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#guest').on('submit', ui.guestLogin)
})
