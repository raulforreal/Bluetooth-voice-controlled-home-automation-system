var myMainImg = document.getElementById("main-img"),
    myImg1 = document.getElementById("img1"),
	myImg2 = document.getElementById("img2"),
	myImg3 = document.getElementById("img3"),
	myImg4 = document.getElementById("img4"),
	imgNum;
function ChangeImg(imgNum)
{
	if(imgNum === 1)
	    {
			myMainImg.firstElementChild.setAttribute("src",myImg1.firstElementChild.src);
			myImg1.style.borderColor = "#c7d1d2";
			myImg2.style.borderColor = "#eaeaea";
			myImg3.style.borderColor = "#eaeaea";
			myImg4.style.borderColor = "#eaeaea";
		}
	else if(imgNum === 2)
	    {
			myMainImg.firstElementChild.setAttribute("src",myImg2.firstElementChild.src);
			myImg1.style.borderColor = "#c7d1d2";
			myImg2.style.borderColor = "#c7d1d2";
			myImg3.style.borderColor = "#eaeaea";
			myImg4.style.borderColor = "#eaeaea";
		}
	else if(imgNum === 3)
	    {
			myMainImg.firstElementChild.setAttribute("src",myImg3.firstElementChild.src);
			myImg1.style.borderColor = "#c7d1d2";
			myImg2.style.borderColor = "#eaeaea";
			myImg3.style.borderColor = "#c7d1d2";
			myImg4.style.borderColor = "#eaeaea";
		}
	else if(imgNum === 4)
	    {
			myMainImg.firstElementChild.setAttribute("src",myImg4.firstElementChild.src);
			myImg1.style.borderColor = "#c7d1d2";
			myImg2.style.borderColor = "#eaeaea";
			myImg3.style.borderColor = "#eaeaea";
			myImg4.style.borderColor = "#eaeaea";
		}
}