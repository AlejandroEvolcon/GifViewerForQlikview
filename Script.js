
Qva.AddExtension('Evolcon/GifViewer', function() { 

	Qva.LoadCSS("/QvAjaxZfc/QvsViewClient.aspx?public=only&name=Extensions/Evolcon/GifViewer/style.css");
	
	_this = this;
	
    var uniqueId = _this.DocumentMgr.binderid + "." + _this.Name;

		
	var newImg = new Image();
	newImg.src = _this.Layout.Text0.text;
	newImg.onload = function(){
		var imageWidth = this.width;
		var imageHeight = this.height;
		
		var borderWidth = (_this.GetWidth() - imageWidth)/2;
		var borderHeight = (_this.GetHeight() - imageHeight)/2;
		//_this.Element.innerHTML = "<div style='margin:auto'><img style='margin:auto' src=" + _this.Layout.Text0.text + " align=center> </div>"; 
		_this.Element.innerHTML = "<div><img style='margin: " + borderHeight +"px "+ borderWidth +"px' src=" + _this.Layout.Text0.text + " align=center > </div>";
	}
	
	
	function objToString(obj) {
            var str = '';
            for (var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    str += p + '->' + obj[p] + '<br/><br/>';
                }
            }
            return str;
        }
});

