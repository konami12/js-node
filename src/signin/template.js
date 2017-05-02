var yo = require('yo-yo');
var landing = require('../landing');
var translate = require("../translate");
var signinForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="platzigram">Platzigram</h1>
                                <form class="signup-form">
                                    <div class="section">
                                        <a class="btn btn-fb hide-on-small-only">${translate.formatMessage('facebook')}</a>
                                        <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> ${translate.formatMessage('facebook2')}</a>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="section">
                                       <input type="text" name="username" placeholder="${translate.formatMessage('user')}" />
                                       <input type="password" name="password" placeholder="${translate.formatMessage('password')}" />
                                       <button class="btn waves-effect waves-light btn-signup" type="submit">${translate.formatMessage('btnlog')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                                ${translate.formatMessage('q2')} <a href="/signup">${translate.formatMessage('q2l2')}</a>
                            </div>
                        </div>
                    </div>`;

module.exports = landing(signinForm);
