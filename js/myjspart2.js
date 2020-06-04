/*
 * I Justin Fallis, 000398973 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.
 * 
 * JavaScript File calls php file with ajax request gets data about locations 
 * around the user and displays that information in media objects.
 */
$(document).ready(function ()
{
	lat = " ";
	long = " ";
	json = " ";
	//get users location and store it in lat and long
	navigator.geolocation.getCurrentPosition(showPosition);
	function showPosition(position) {
    	lat = position.coords.latitude;
    	long = position.coords.longitude;
	}
	//runs the showpage method for 10 secounds
    	myVar = setTimeout(showPage, 10000);
    	document.getElementById("title").style.display = "block";
	//calls the end method for 10 secounds and chnages the text for the title
	function showPage() {
		myVar = setTimeout(end, 10000);
  	document.getElementById("loader").style.display = "block";
  	document.getElementById("change").innerHTML = "Finding restaurants near you...";
	//send ajax request to the php file to with the users long and lat to get nearest restaurants
	$.get(
		    "https://csunix.mohawkcollege.ca/tooltime/10133/2018/api/api.php",
		    { "lat" : lat, "long" : long },
			function (data)
			{
				//parse data recieved and store it in varable
				json = JSON.parse(data);
			}
                        );
            }
	//After the ten second timer put all the data from the json object into the media objects and display it to the user.
	function end() {
		document.getElementById("loader").style.display = "none";
  	document.getElementById("title").style.display = "block";
  	document.getElementById("change").innerHTML = "Found these restaurants...";
	$("#picture1").attr("src", json.businesses[0].image_url);
				$("#title1").text(json.businesses[0].name);
				$("#content1").text(json.businesses[0].categories[0][0]);
				$("#content1").append("</br>" + json.businesses[0].location.display_address);
				$("#content1").append("</br>" + json.businesses[0].display_phone);
				$("#content1").append("</br>" + "<img class='img1'src=''>");
				$(".img1").attr("src", json.businesses[0].rating_img_url);
				$("#content1").append(" " + json.businesses[0].review_count + " Reviews");

				$("#picture2").attr("src", json.businesses[1].image_url);
				$("#title2").text(json.businesses[1].name);
				$("#content2").text(json.businesses[1].categories[0][0]);
				$("#content2").append("</br>" + json.businesses[1].location.display_address);
				$("#content2").append("</br>" + json.businesses[1].display_phone);
				$("#content2").append("</br>" + "<img class='img2'src=''>");
				$(".img2").attr("src", json.businesses[1].rating_img_url);
				$("#content2").append(" " + json.businesses[1].review_count + " Reviews");
				
				$("#picture3").attr("src", json.businesses[2].image_url);
				$("#title3").text(json.businesses[2].name);
				$("#content3").text(json.businesses[2].categories[0][0]);
				$("#content3").append("</br>" + json.businesses[2].location.display_address);
				$("#content3").append("</br>" + json.businesses[2].display_phone);
				$("#content3").append("</br>" + "<img class='img3'src=''>");
				$(".img3").attr("src", json.businesses[2].rating_img_url);
				$("#content3").append(" " + json.businesses[2].review_count + " Reviews");
				
				$("#picture4").attr("src", json.businesses[3].image_url);
				$("#title4").text(json.businesses[3].name);
				$("#content4").text(json.businesses[3].categories[0][0]);
				$("#content4").append("</br>" + json.businesses[3].location.display_address);
				$("#content4").append("</br>" + json.businesses[3].display_phone);
				$("#content4").append("</br>" + "<img class='img4'src=''>");
				$(".img4").attr("src", json.businesses[3].rating_img_url);
				$("#content4").append(" " + json.businesses[3].review_count + " Reviews");
				
				$("#picture5").attr("src", json.businesses[4].image_url);
				$("#title5").text(json.businesses[4].name);
				$("#content5").text(json.businesses[4].categories[0][0]);
				$("#content5").append("</br>" + json.businesses[4].location.display_address);
				$("#content5").append("</br>" + json.businesses[4].display_phone);
				$("#content5").append("</br>" + "<img class='img5'src=''>");
				$(".img5").attr("src", json.businesses[4].rating_img_url);
				$("#content5").append(" " + json.businesses[4].review_count + " Reviews");

				$("#picture6").attr("src", json.businesses[5].image_url);
				$("#title6").text(json.businesses[5].name);
				$("#content6").text(json.businesses[5].categories[0][0]);
				$("#content6").append("</br>" + json.businesses[5].location.display_address);
				$("#content6").append("</br>" + json.businesses[5].display_phone);
				$("#content6").append("</br>" + "<img class='img6'src=''>");
				$(".img6").attr("src", json.businesses[5].rating_img_url);
				$("#content6").append(" " + json.businesses[5].review_count + " Reviews");

				$("#picture7").attr("src", json.businesses[6].image_url);
				$("#title7").text(json.businesses[6].name);
				$("#content7").text(json.businesses[6].categories[0][0]);
				$("#content7").append("</br>" + json.businesses[6].location.display_address);
				$("#content7").append("</br>" + json.businesses[6].display_phone);
				$("#content7").append("</br>" + "<img class='img7'src=''>");
				$(".img7").attr("src", json.businesses[6].rating_img_url);
				$("#content7").append(" " + json.businesses[6].review_count + " Reviews");

				$("#picture8").attr("src", json.businesses[7].image_url);
				$("#title8").text(json.businesses[7].name);
				$("#content8").text(json.businesses[7].categories[0][0]);
				$("#content8").append("</br>" + json.businesses[7].location.display_address);
				$("#content8").append("</br>" + json.businesses[7].display_phone);
				$("#content8").append("</br>" + "<img class='img8'src=''>");
				$(".img8").attr("src", json.businesses[7].rating_img_url);
				$("#content8").append(" " + json.businesses[7].review_count + " Reviews");

				$("#picture9").attr("src", json.businesses[8].image_url);
				$("#title9").text(json.businesses[8].name);
				$("#content9").text(json.businesses[8].categories[0][0]);
				$("#content9").append("</br>" + json.businesses[8].location.display_address);
				$("#content9").append("</br>" + json.businesses[8].display_phone);
				$("#content9").append("</br>" + "<img class='img9'src=''>");
				$(".img9").attr("src", json.businesses[8].rating_img_url);
				$("#content9").append(" " + json.businesses[8].review_count + " Reviews");

				$("#picture10").attr("src", json.businesses[9].image_url);
				$("#title10").text(json.businesses[9].name);
				$("#content10").text(json.businesses[9].categories[0][0]);
				$("#content10").append("</br>" + json.businesses[9].location.display_address);
				$("#content10").append("</br>" + json.businesses[9].display_phone);
				$("#content10").append("</br>" + "<img class='img10'src=''>");
				$(".img10").attr("src", json.businesses[9].rating_img_url);
				$("#content10").append(" " + json.businesses[9].review_count + " Reviews");

				$("#picture11").attr("src", json.businesses[10].image_url);
				$("#title11").text(json.businesses[10].name);
				$("#content11").text(json.businesses[10].categories[0][0]);
				$("#content11").append("</br>" + json.businesses[10].location.display_address);
				$("#content11").append("</br>" + json.businesses[10].display_phone);
				$("#content11").append("</br>" + "<img class='img11'src=''>");
				$(".img11").attr("src", json.businesses[10].rating_img_url);
				$("#content11").append(" " + json.businesses[10].review_count + " Reviews");

				$("#picture12").attr("src", json.businesses[11].image_url);
				$("#title12").text(json.businesses[11].name);
				$("#content12").text(json.businesses[11].categories[0][0]);
				$("#content12").append("</br>" + json.businesses[11].location.display_address);
				$("#content12").append("</br>" + json.businesses[11].display_phone);
				$("#content12").append("</br>" + "<img class='img12'src=''>");
				$(".img12").attr("src", json.businesses[11].rating_img_url);
				$("#content12").append(" " + json.businesses[11].review_count + " Reviews");

				$("#picture13").attr("src", json.businesses[12].image_url);
				$("#title13").text(json.businesses[12].name);
				$("#content13").text(json.businesses[12].categories[0][0]);
				$("#content13").append("</br>" + json.businesses[12].location.display_address);
				$("#content13").append("</br>" + json.businesses[12].display_phone);
				$("#content13").append("</br>" + "<img class='img13'src=''>");
				$(".img13").attr("src", json.businesses[12].rating_img_url);
				$("#content13").append(" " + json.businesses[12].review_count + " Reviews");

				$("#picture14").attr("src", json.businesses[13].image_url);
				$("#title14").text(json.businesses[13].name);
				$("#content14").text(json.businesses[13].categories[0][0]);
				$("#content14").append("</br>" + json.businesses[13].location.display_address);
				$("#content14").append("</br>" + json.businesses[13].display_phone);
				$("#content14").append("</br>" + "<img class='img14'src=''>");
				$(".img14").attr("src", json.businesses[13].rating_img_url);
				$("#content14").append(" " + json.businesses[13].review_count + " Reviews");

				$("#picture15").attr("src", json.businesses[14].image_url);
				$("#title15").text(json.businesses[14].name);
				$("#content15").text(json.businesses[14].categories[0][0]);
				$("#content15").append("</br>" + json.businesses[14].location.display_address);
				$("#content15").append("</br>" + json.businesses[14].display_phone);
				$("#content15").append("</br>" + "<img class='img15'src=''>");
				$(".img15").attr("src", json.businesses[14].rating_img_url);
				$("#content15").append(" " + json.businesses[14].review_count + " Reviews");

				$("#picture16").attr("src", json.businesses[15].image_url);
				$("#title16").text(json.businesses[15].name);
				$("#content16").text(json.businesses[15].categories[0][0]);
				$("#content16").append("</br>" + json.businesses[15].location.display_address);
				$("#content16").append("</br>" + json.businesses[15].display_phone);
				$("#content16").append("</br>" + "<img class='img16'src=''>");
				$(".img16").attr("src", json.businesses[15].rating_img_url);
				$("#content16").append(" " + json.businesses[15].review_count + " Reviews");

				$("#picture17").attr("src", json.businesses[16].image_url);
				$("#title17").text(json.businesses[16].name);
				$("#content17").text(json.businesses[16].categories[0][0]);
				$("#content17").append("</br>" + json.businesses[16].location.display_address);
				$("#content17").append("</br>" + json.businesses[16].display_phone);
				$("#content17").append("</br>" + "<img class='img17'src=''>");
				$(".img17").attr("src", json.businesses[16].rating_img_url);
				$("#content17").append(" " + json.businesses[16].review_count + " Reviews");

				$("#picture18").attr("src", json.businesses[17].image_url);
				$("#title18").text(json.businesses[17].name);
				$("#content18").text(json.businesses[17].categories[0][0]);
				$("#content18").append("</br>" + json.businesses[17].location.display_address);
				$("#content18").append("</br>" + json.businesses[17].display_phone);
				$("#content18").append("</br>" + "<img class='img18'src=''>");
				$(".img18").attr("src", json.businesses[17].rating_img_url);
				$("#content18").append(" " + json.businesses[17].review_count + " Reviews");

				$("#picture19").attr("src", json.businesses[18].image_url);
				$("#title19").text(json.businesses[18].name);
				$("#content19").text(json.businesses[18].categories[0][0]);
				$("#content19").append("</br>" + json.businesses[18].location.display_address);
				$("#content19").append("</br>" + json.businesses[18].display_phone);
				$("#content19").append("</br>" + "<img class='img19'src=''>");
				$(".img19").attr("src", json.businesses[18].rating_img_url);
				$("#content19").append(" " + json.businesses[18].review_count + " Reviews");

				$("#picture20").attr("src", json.businesses[19].image_url);
				$("#title20").text(json.businesses[19].name);
				$("#content20").text(json.businesses[19].categories[0][0]);
				$("#content20").append("</br>" + json.businesses[19].location.display_address);
				$("#content20").append("</br>" + json.businesses[19].display_phone);
				$("#content20").append("</br>" + "<img class='img20'src=''>");
				$(".img20").attr("src", json.businesses[19].rating_img_url);
				$("#content20").append(" " + json.businesses[19].review_count + " Reviews");

	}
});
