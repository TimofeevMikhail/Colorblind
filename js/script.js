window.onresize = deleteMenu;

	function deleteMenu()
	{
		if(document.body.clientWidth > 1006){
		document.getElementsByClassName("category-wrap")[0].style.display="none";
		document.getElementsByTagName("header")[0].style.position="relative";
		document.getElementsByTagName("header")[0].style.marginTop="-16px";
		document.getElementsByClassName("menuImg")[0].style.marginTop="5px";
		document.getElementsByClassName("main")[0].style.marginTop="60px";
		}
	}

	function func(l1)
    	{
	    	if(document.getElementById(l1).style.display=="block")
			{
				document.getElementById(l1).style.display="none";
				document.getElementsByTagName("header")[0].style.position="relative";
				document.getElementsByTagName("header")[0].style.marginTop="-16px";
				document.getElementsByClassName("menuImg")[0].style.marginTop="5px";
				document.getElementsByClassName("main")[0].style.marginTop="60px";
			}
			else 
			{
				document.getElementById(l1).style.display="block";
				document.getElementsByTagName("header")[0].style.position="absolute";
				document.getElementsByTagName("header")[0].style.marginTop="0px";
				document.getElementsByClassName("colorblindM")[0].style.marginTop="-16px";
				document.getElementsByClassName("menuImg")[0].style.marginTop="-11px";
				document.getElementById(l1).style.marginTop="60px";
				document.getElementsByClassName("main")[0].style.marginTop="120px";
				//document.getElementsByClassName("category-wrap")[0].style.width="inherit";
			}
      }