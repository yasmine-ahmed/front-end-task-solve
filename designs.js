// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
    var num_rows = document.getElementById('inputHeight').value;
    var num_cols = document.getElementById('inputWidth').value;
    var theader = '<table border="1">\n';
    var tbody = '';
    var tds = document.getElementById('colorPicker').value;
    
    
    for( var i=0; i<num_rows;i++)
    {   
           
        tbody += '<tr>';
        for( var j=0; j<num_cols;j++)
        {
            tbody += '<td>';
           
            tbody += '</td>';
            
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('pixelCanvas').innerHTML = theader + tbody + tfooter;
    
    document.getElementById("pixelCanvas").style.backgroundColor = tds; 
}

     