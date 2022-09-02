var canvas = document.getElementById('myCanvas')
var context = canvas.getContext('2d')

function draw() {
  // Store the current transformation matrix
  context.save()

  // Use the identity matrix while clearing the canvas
  context.setTransform(1, 0, 0, 1, 0, 0)
  context.clearRect(0, 0, canvas.width, canvas.height)

  // Restore the transform
  context.restore()

  var x1 = document.getElementById('x1').value
  var x2 = document.getElementById('x2').value
  var y1 = document.getElementById('y1').value
  var y2 = document.getElementById('y2').value
  context.beginPath()
  context.strokeStyle = '#FF0000'
  context.strokeRect(10, 10, x2, y2)

  context.stroke()
}

import { jsPDF } from 'jspdf'
const { jsPDF } = require('jspdf')
var doc = new jsPDF()
var specialElementHandlers = {
  '#editor': function (element, renderer) {
    return true
  }
}

$('#cmd').click(function () {
  doc.fromHTML($('#content').html(), 15, 15, {
    width: 170,
    elementHandlers: specialElementHandlers
  })
  doc.save('projeto.pdf')
})

// This code is collected but useful, click below to jsfiddle link.

// //render a couple boxes in their own coordinate space

// const input = document.querySelector('input')
// const log = document.getElementById('log')

// input.addEventListener('change', updateValue)

// var makerjs = require('makerjs')

// function box(origin) {
//   this.models = {
//     outer: new makerjs.models.RoundRectangle($input, 300, 0)
//   }
//   this.paths = {
//     inner: new makerjs.paths.Circle([150, 150], 75)
//   }

//   this.origin = origin
// }

// var box1 = new box([0, 0])
// var box2 = new box([300, 0])

// var model = {
//   models: {
//     box1: box1,
//     box2: box2
//   }
// }

// var svg = makerjs.exporter.toSVG(model)

// document.write(svg)

// console.log(box1.paths.inner.origin)
// console.log(box2.paths.inner.origin)
