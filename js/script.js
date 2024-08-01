function formValidation()
{
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let interest = document.getElementById("input-interest").value;

    //Validasi data tidak boleh kosong
    if (name == "" || email == "" || interest == "")
    {
        alert("Tidak boleh ada yang kosong");
    }
    else
    {
        alert("Data sukses diinput");
    }
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n)
{
    showSlide(indexSlide += n);
}

function showSlide(n)
{
    let listImage = document.getElementsByClassName("main-content-banner")
    console.log(listImage);

    //Algoritma untuk mereset index slide
    if(n > listImage.length) indexSlide = 1;

    //Algoritma untuk menghilangkan semua gambar
    let index = 0;
    while(index < listImage.length){
        listImage[index].style.display = "none"
        index++;
    }

    //Algoritma memunculkan satu gambar saja
    listImage[indexSlide - 1].style.display = 'block';
}

//Algoritma untuk autoslide
setInterval(() => nextSlide(1), 3000);

 