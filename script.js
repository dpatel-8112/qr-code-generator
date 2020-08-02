var qrcode = new QRCode("qrcode",{
    width: 300,
    height: 300,
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


    
        var download1 = document.getElementById('download');

        
        download1.addEventListener('click',download());
            function download(){
                var img = document.querySelector("div > img");

                console.log(img.style);
                download1.setAttribute("href", img.src);


            }

