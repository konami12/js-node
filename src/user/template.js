import yo from "yo-yo";
import layout from "../layout";

export default function templateUser(userData){
    let user = userData.user;
    let imgs  = userData.imgs;
    let cont  = 0;
    let tmp = yo`<div class="container user-page">
                    <div class="row">
                        <div class="col s12 m10 offset-m1 l8 offset-12 center-align heading">
                            <div class="row">
                                <div class="col s12 m10 offset-m1 l3 offset-l3 center">
                                    <img src="../${user.avatar}" class="responsive-img circle">
                                </div>
                                <div class="col s12 m10 offset-m1 l6 left-align">
                                    <h2 class="hide-on-large-only center-align">${user.username}</h2>
                                    <h2 class="hide-on-med-and-down left-align">${user.username}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div class="row">
                        ${imgs.map(img => {
                            return yo`<div class="col s4">
                                        <div class="card blue-grey darken-4">
                                            <div class="card-image">
                                                <img src="../${img.url}" title="${img.url}" class="materialboxed">
                                                <i aria-hidden="true" class="fa fa-heart aux"> ${img.likes}</i>
                                            </div>
                                        </div>
                                       </div>`;
                                    })}
                   </div>
                </div>`;
    return tmp;
}