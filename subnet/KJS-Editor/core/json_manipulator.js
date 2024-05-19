
function read(){
    document.getElementById('json').addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                try {
                    const result = JSON.parse(e.target.result);

                    let indexX = 0;
                    let indexY = 0;
                    let indexZ = 0;
              
                    let obj = {
                      coord: {
                        x: [],
                        y: [],
                        z: [],
                      },
                      id: [],
                    };
              
                    result.structure.forEach((element) => {
                      element.forEach((data) => {
                        data.forEach((omega) => {
                          obj.id.push(omega);
                          obj.coord.x.push(indexX);
                          obj.coord.y.push(indexY);
                          obj.coord.z.push(indexZ);
              
                          indexZ++;
                        });
                        indexZ = 0;
                        indexY++;
                      });
                      indexY = 0;
                      indexX++;
                    });

                    launch(obj)

                } catch (error) {
                    console.error("Error parsing JSON:", error);
                }
            };
    
            reader.onerror = () => {
                console.error("Error reading file:", reader.error);
            };
    
            reader.readAsText(file);
        } else {
            console.log("No file selected");
        }
    });
}