var yo        = require("yo-yo");
var translate = require("../translate");

module.exports = function pictureCard(data){

    var el;

    /**
     * Permite hacer render del template.
     * 
     * @param  Json  Objecto.
     * @return HTML.
     */
    function render(renderData)
    {
         return yo`<div class="card ${renderData.liked ? 'liked' : '' }">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${renderData.url}">
                    </div>
                    <div class="card-content">
                        <a href="/user/${renderData.user.username}" class="card-title aux-card">
                            <img src = "${renderData.user.avatar}" title="${renderData.user.username}" class="avatar">
                            <span class="username">${renderData.user.username}</span>
                        </a>
                        <small class="right time">${translate.formatDate(renderData.date)}</small>
                        <p>
                            <a class="left" href="#" onclick=${actionLike.bind(null, true)}>
                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                            <a class="left" href="#" onclick=${actionLike.bind(null, false)}>
                                <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <span class="left likes">${translate.formatMessage("likes", { likes : renderData.likes })}</span>
                        </p>
                    </div>
                  </div>`;
    }

    /**
     * Permite agregar oh quitar los likes.
     * 
     * @param  Boolean action identificador  para marcar gusto oh disgusto por la imagen.
     * @return boolean.
     */
    function actionLike(action)
    {
        data.liked = action;
        data.likes += (action) ? 1 : -1;
        var newEl  = render(data);
        yo.update(el, newEl);
        return false;
    }


    el = render(data);

    return el;

}