
//filter the SimplexNoise to between -1, 1
function MapNoise(val, smin, smax, emin, emax){
    const t = (val - smin) / (smax - smin);
    return (emax - emin) * t + emin;
}

//generates the simplexNoise and applies the relevant boundaries...
function Noise(noiseX, noiseY){
    return MapNoise(SimplexNoise.noise(noiseX, noiseY), -1, 1, 0, 1);
}

//stacks up the noise samples, we're trying to acheive flow hills rather than purely random terrain....
function Octave(nx, ny, octaves){
    let value = 0;
    let frequency = 1;
    let maximum = 0;
    let amplitude = 1;

    for(let i = 0; i < octaves; i++){
        value += noise(nx * frequency, ny * frequency) * amplitude;
        maximum += amplitude;
        amplitude /= 2;
        frequency *= 2;
    }
    return value/maximum;
}

function CreateCanvas(widthPixels, heightPixels){
    var perlinNoiseCanvas = document.createElement("canvas");
    perlinNoiseCanvas.id = "perlinNoiseCanvas";
    document.body.appendChild(perlinNoiseCanvas);
    perlinNoiseCanvas.width = widthPixels;
    perlinNoiseCanvas.height = heightPixels;
}

CreateCanvas(50, 50);

function generateTexture(){
    const perlinNoiseCanvas = document.getElementById("perlinNoiseCanvas");

    //Creates a CanvasRenderingContext2D object representing a two-dimensional rendering context
    const canvasContextObject = perlinNoiseCanvas.getContext('2d');
    canvasContextObject.fillStyle = "#FF0000";
    canvasContextObject.fillRect(0, 0, perlinNoiseCanvas.width, perlinNoiseCanvas.height);

    for(let i = 0; i < perlinNoiseCanvas.width; i++){
        for(let j = 0; j < perlinNoiseCanvas.height; j++){
        }
    }

    return canvasContextObject.getImageData(0, 0, perlinNoiseCanvas.width, perlinNoiseCanvas.height);
}

generateTexture();