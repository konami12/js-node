var yo = require("yo-yo");

module.exports = function pictureCard(data){
	return yo`<div class="card">
    			<div class="card-image waves-effect waves-block waves-light">
    			 	<img class="activator" src="${data.url}">
    			</div>
    			<div class="card-content">
    				<a href="/user/${data.user.username}" class="card-title aux-card">
						<img src = "${data.user.avatar}" title="${data.user.username}" class="avatar">
						<span class="username">${data.user.username}</span>
    				</a>
    				<small class="right time">Hace 1 día</small>
    				<p>
						<a class="left" href="#">
							<i class="fa fa-heart-o" aria-hidden="true"></i>
						</a>
						<span class="left likes">${data.likes} me gusta</span>
    				</p>
    			</div>
  			  </div>`;
  			}