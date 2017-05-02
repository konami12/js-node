var yo = require('yo-yo');
var landing = require('../landing');
var translate = require("../translate");
var signupForm = yo`<div class="col s12 m7">
                        <div class="row">
                        
                            <div class="signup-box">
                                <h1 class="platzigram">Platzigram</h1>
                                <form class="signup-form">
                                    <h2>${translate.formatMessage('intro')}</h2>
                                    <div class="section">
                                        <a class="btn btn-fb hide-on-small-only">${translate.formatMessage('facebook')}</a>
                                        <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> ${translate.formatMessage('facebook2')}</a>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="section">
                                        <input type="email" name="email" placeholder="${translate.formatMessage('email')}" />
                                        <input type="text" name="name" placeholder="${translate.formatMessage('name')}" />
                                        <input type="text" name="username" placeholder="${translate.formatMessage('user')}" />
                                        <input type="password" name="password" placeholder="${translate.formatMessage('password')}" />
                                        <button class="btn waves-effect waves-light btn-signup" type="submit">${translate.formatMessage('btnReg')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                              ${translate.formatMessage('q1')} <a href="/signin">${translate.formatMessage('q1l1')}</a>
                            </div>
                        </div>
                    </div>`;

module.exports = landing(signupForm);
