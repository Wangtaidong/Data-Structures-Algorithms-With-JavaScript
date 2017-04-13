function showPic(whichpic){
			var href = whichpic.getAttribute("href");
			var placeholder = document.getElementById("placeholder");
			placeholder.setAttribute("src", href);
			var text = whichpic.getAttribute("title");
			var description = document.getElementById("description");
			description.childNodes[0].nodeValue = text;
		}