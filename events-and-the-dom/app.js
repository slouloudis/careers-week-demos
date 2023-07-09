// add an event listener 
var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    let nPoints = 50;
    let dotSize = 10;

    
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight - 4;
    
    context.lineCap = 'square';
    context.lineWidth = 1;
    
    const midX = canvas.width / 2
    const midY = canvas.height / 2

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      
      zoom = canvas.width / nPoints;

      for (let i = 1; i < nPoints; i++) {
        let x = midX + ((i * zoom) * Math.cos(i))
        let y = midY + ((i * zoom) * Math.sin(i))

        context.fillRect(x, y, dotSize, dotSize);
      }

      context.stroke()
    }
    
    window.addEventListener('keydown', e => {
      if (e.keyCode == 39) // right
        nPoints *= 1.2;
      
      if (e.keyCode == 37) // left
        nPoints *= 0.8

      if (e.keyCode == 40) // down
        dotSize = Math.max(1, dotSize - 1)
      
      if (e.keyCode == 38) // up
        dotSize++
    
      render()
    })

    render()