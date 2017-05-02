var yo = require("yo-yo");
var translate = require("../translate");

module.exports = function layout(content){
	return yo`<div>
					<nav class="header">
						<div class="nav-wrapper">
							<div class="container">
								<div class="row">
									<div class="col s12 m6 offset-m1">
										<a href="/" class="brand-logo platzigram">
											Platzigram
										</a>
									</div>
									<div class="col s2 m6 push-s10 push-m8">
										<a class="dropdown-button btn btn-large btn-flat" data-activates="dropmenu">
											<i class="fa fa-user" aria-hidden="true"></i>	
										</a>
										<ul class="dropdown-content" id="dropmenu">
											<li>
												<a href="/signin">Signin</a>
											</li>
											<li>
												<a href="/signup">Signup</a>
											</li>
											<li>
												<a href="#">${translate.formatMessage('logout')}</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>				 
					</nav>
					<div class="content">
						${content}
					</div>
					</div>`;
}