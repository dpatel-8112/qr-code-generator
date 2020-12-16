var download1 = document.getElementById('download');

var qrcode = new QRCode("qrcode",{
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

function makeCode () {      
    var elText = document.getElementById("text");
    
    if (!elText.value) {
        return;
    }
    
    qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
    on("blur", function () {
        makeCode();
        
        download1.addEventListener('click',download());
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
                      
            download1.addEventListener('click',download());
            
            }
        });


    
        

        
        download1.addEventListener('click',download());
            function download(){
                var img = document.querySelector("div#qrcode > img");

                console.log(img.style);
                download1.setAttribute("href", img.src);


            }

