var yo       = require("yo-yo");
var card_pic = require("../picture-card");
var layout   = require("../layout"); 



module.exports = function (pictures){

	var card = yo`<div class="container timeline">
					<div class="row">
						<div class="col s12 m10 offset-m1 l6 offset-l3">
							${pictures.map(function(pic){
								return card_pic(pic);
							})}
						</div>
					</div>
				</div>`;
	return layout(card);
}