var i = 0;

function nextslide() {
	if (i = 6) {
		i = 0;
	};
	document.getElementById("images_").src = images[i];
	i++;
}
var images = [
	"",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6VK5DOPN159a3rL36WZx_S3S_EUNoVmisw&usqp=CAU",
	"https://www.pngitem.com/pimgs/m/284-2841358_mother-with-short-brown-hair-clip-art-at.png",
	"https://images.assetsdelivery.com/compings_v2/vectorkif/vectorkif1808/vectorkif180800158.jpg",
	"https://image.shutterstock.com/image-vector/portrait-cute-grandmother-glasses-260nw-643816762.jpg",
	"https://image.shutterstock.com/image-vector/cartoon-soccer-kids-friendly-kidvector-260nw-468411575.jpg"
  ];
var i = 0;

function nextslide() {
	if (i == 6) {
		i = 0;
	}
	i++;
	document.getElementById("images_").src = images[i];
	 document.getElementById("2").innerHTML = names[i];
}
var names = [
 "nothing",
 "Saurabh Shrivastava",
 "Riktika Shrivastava",
 "Ramesh Shrivastava",
 "Geeta Shrivastava",
 "Swarit and Srijan Shrivastava"
 ];
 