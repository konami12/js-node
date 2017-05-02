var yo = require('yo-yo');
var translate = require("../translate");

var footer = yo`<footer class="site-footer">
					<div class="container">
						<div class="row">
							<div class="col s12 l3 center-align">
								<a class="dropdown-button btn btn-flat" href="#" data-activates="dropdown1">${translate.formatMessage('lang')}</a>
								<ul class="dropdown-content" id="dropdown1">
									<li><a href="" onclick=${changeLang.bind(null, "es-MX")}>${translate.formatMessage('spanish')}</a></li>
									<li><a href="" onclick=${changeLang.bind(null, "en-US")}>${translate.formatMessage('english')}</a></li>
								</ul>
							</div>
							<div class="col s12 l3 push-l6 center-align"> © 2016 Platzigram.</div>
						</div>
					</div>
				</footer>`;


function changeLang(lang)
{
	localStorage.setItem('lang', lang);
	location.reload();
}

document.body.appendChild(footer);