let t = 0
var seq, end

const BACKGROUND_COLOR = '#634d6e'
const STROKE_COLOR = '#ebebeb'


function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(BACKGROUND_COLOR)
    strokeWeight(1)
    noFill()

    seq = fibonacci(50)
    end = {
        x: width / 2,
        y: height / 2
    }
    
}

function fibonacci(limit) {
    var fib = [0, 1]
    if (limit > 2) {
        for (var i = 0; i < limit - 2; i++) {
            fib.push(fib[fib.length - 2] + fib[fib.length - 1])
        }
    } else if (limit == 1) {
        fib = [0]
    }
    return fib
}


function draw() {
    background(BACKGROUND_COLOR)
    stroke(STROKE_COLOR)
    translate(end.x, end.y)
    for (let idx = 0; idx < seq.length; idx++) {
        beginShape()
        let val = seq[idx]
        arc(
            val / 2, 
            -(val / 2), 
            val, 
            val, 
            PI / 4, 
            3 * PI / 4
        )
        endShape()
        end.x = val
        end.y = 0
        translate(end.x * scale, end.y)
        rotate(PI * t)
    }
    end = {
        x: width / 2,
        y: height / 2
    }
    t += .005
}
