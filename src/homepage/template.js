var yo         = require("yo-yo");
var card_pic   = require("../picture-card");
var layout     = require("../layout"); 
var translate  = require("../translate");
var superagent = require("superagent");
var multer     = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

var upload    = multer({ storage: storage });


module.exports = function (pictures){

	var card = yo`<div class="container timeline">
					<div class="row">
						<div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
							<form enctype="multipart/form-data" class="form-upload" onsubmit=${onsubmit}>
								<div id="fileName" class="fileUpload btn light-green">
									<span>
										<i class="fa fa-camera-retro" aria-hidden="true"></i>
										${translate.formatMessage("btnUpload")}
										<input type="file" name="image" id="image" class="upload" onchange=${btnUpload}/>
									</span>
								</div>
								<button id="btnUpload" type="submit" class="btn blue darken-4 hide">
									<i class="fa fa-upload" aria-hidden="true"></i>
								</button>
								<button id="btnCancel" type="button" class="btn red darken-4 hide"  onclick=${btnCancel}>
									<i class="fa fa-times" aria-hidden="true"></i>
								</button>
							</form>
						</div>
					</div>
					<div class="row">
						<div class="col s12 m10 offset-m1 l6 offset-l3">
							${getDataUser(pictures)}
						</div>
					</div>
				</div>`;


	function getDataUser(pictures)
	{
		return pictures.map(items => items.map(item => card_pic(item)));
	}


	function toggleButton()
	{
		document.getElementById("fileName").classList.toggle('hide');
		document.getElementById("btnUpload").classList.toggle('hide');	
		document.getElementById("btnCancel").classList.toggle('hide');	
	}


	function btnUpload()
	{
		toggleButton();
	}


	function btnCancel()
	{
		toggleButton();
		document.querySelector(".form-upload").reset();
	}


	function onsubmit(event)
	{
		//evita el envio del submit
		event.preventDefault();
		var data = new FormData(this);
		superagent
			.post("/api/upload")
			.send(data)
			.end(function(error, response){
				btnCancel();
				console.log(arguments);
			})
	}



	return layout(card);
};