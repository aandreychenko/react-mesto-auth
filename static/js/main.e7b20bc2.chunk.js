(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(20),s=n.n(o),i=n(8),r=(n(29),n(22)),l=n(3),p=n(2),u=n.p+"static/media/mesto-logo.03b78ada.svg",d=n(0);function _(e){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f '\u041c\u0435\u0441\u0442\u0430'"}),Object(d.jsxs)("div",{className:"header__container",children:[Object(d.jsxs)(p.b,{exact:!0,path:"/",children:[Object(d.jsx)("p",{className:"header__info header__email",children:e.email}),Object(d.jsx)(i.b,{to:"/sign-in",onClick:e.logOutHandler,className:"header__info",children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(d.jsx)(p.b,{path:"/sign-up",children:Object(d.jsx)(i.b,{to:"/sign-in",className:"header__info",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(p.b,{path:"/sign-in",children:Object(d.jsx)(i.b,{to:"/sign-up",className:"header__info",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})]})}var m=c.a.createContext();function h(e){var t=c.a.useContext(m),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),o=e.card.likes.length,s="element__trash-button ".concat(n&&"element__trash-button_visible"),i="element__like-button ".concat(a&&"element__like-button_active");return Object(d.jsxs)("article",{className:"element",children:[Object(d.jsx)("img",{className:"element__image",src:e.card.link,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u0435\u0441\u0442\u0430",onClick:function(){e.handleCardImage(e)}}),Object(d.jsxs)("div",{className:"element__info",children:[Object(d.jsx)("h2",{className:"element__place-name",children:e.card.name}),Object(d.jsxs)("div",{className:"element__like-block",children:[Object(d.jsx)("button",{type:"button",className:i,onClick:function(){e.onCardLike(e.card)}}),Object(d.jsx)("p",{className:"element__like-counter",children:o})]})]}),Object(d.jsx)("button",{type:"button",className:s,onClick:function(){e.onCardDelete(e.card)}})]},e.card._id)}function b(e){var t=function(t){e.onOpenImage&&e.onOpenImage(t)},n=c.a.useContext(m);return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("button",{className:"profile__avatar-container",onClick:e.onEditAvatar,children:Object(d.jsx)("img",{className:"profile__avatar",alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:n.avatar})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__info-heading",children:[Object(d.jsx)("h1",{className:"profile__name",children:n.name}),Object(d.jsx)("button",{type:"button",className:"profile__edit-button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile})]}),Object(d.jsx)("p",{className:"profile__caption",children:n.about})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"elements",children:e.cards.map((function(n){return Object(d.jsx)(h,{card:n,handleCardImage:t,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},n._id)}))})]})}function j(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})}function f(e){return Object(d.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("form",{className:"popup__container popup__container_".concat(e.name," popup__form"),name:e.name,noValidate:!0,onSubmit:e.onSubmit,children:[Object(d.jsx)("h3",{className:"popup__heading popup__heading_".concat(e.name),children:e.title}),e.children,Object(d.jsx)("button",{type:"submit",name:"submit-button",className:"popup__submit-button popup__submit-button_".concat(e.name," popup__button popup__button_enabled"),"aria-labelledby":"popup__submit-button",children:e.button}),Object(d.jsx)("button",{onClick:e.onClose,type:"button",name:"close-button",className:"popup__close-icon popup__close-icon_".concat(e.name),"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})]})})}function g(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),i=Object(l.a)(s,2),r=i[0],p=i[1],u=c.a.useContext(m);return c.a.useEffect((function(){o(u.name||""),p(u.about||"")}),[u]),Object(d.jsxs)(f,{isOpen:e.isOpen,onClose:e.onClose,name:"profile-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:r})},children:[Object(d.jsxs)("label",{htmlFor:"name-profile-edit",className:"popup__container-label",children:[Object(d.jsx)("input",{type:"text",name:"name",className:"popup__field popup__name popup__name_profile-edit popup__input",id:"name-profile-edit",placeholder:"\u0418\u043c\u044f","aria-label":"\u0418\u043c\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",required:!0,minLength:"2",maxLength:"40",value:a,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error popup__error_visible name-profile-edit-error"})]}),Object(d.jsxs)("label",{htmlFor:"caption-profile-edit",className:"popup__container-label",children:[Object(d.jsx)("input",{type:"text",name:"about",className:"popup__field popup__caption popup__caption_profile-edit popup__input",id:"caption-profile-edit",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438","aria-label":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",required:!0,minLength:"2",maxLength:"200",value:r,onChange:function(e){p(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error popup__error_visible caption-profile-edit-error"})]})]})}function O(e){var t=c.a.useRef();return Object(d.jsx)(f,{isOpen:e.isOpen,onClose:e.onClose,name:"user-image",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({link:t.current.value}),t.current.value=""},children:Object(d.jsxs)("label",{htmlFor:"link-user-image",className:"popup__container-label",children:[Object(d.jsx)("input",{type:"url",name:"link",className:"popup__field popup__caption popup__caption_user-image popup__input",id:"link-user-image",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443","aria-label":"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,minLength:"1",ref:t}),Object(d.jsx)("span",{className:"popup__error popup__error_visible link-user-image-error"})]})})}function x(e){var t=c.a.useRef(),n=c.a.useRef();return Object(d.jsxs)(f,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value}),t.current.value="",n.current.value=""},name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(d.jsxs)("label",{htmlFor:"name-add-place",className:"popup__container-label",children:[Object(d.jsx)("input",{type:"text",name:"name",className:"popup__field popup__name popup__name_add-place popup__input",id:"name-add-place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","aria-label":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",ref:t}),Object(d.jsx)("span",{className:"popup__error popup__error_visible name-add-place-error"})]}),Object(d.jsxs)("label",{htmlFor:"caption-add-place",className:"popup__container-label",children:[Object(d.jsx)("input",{type:"url",name:"link",className:"popup__field popup__caption popup__caption_add-place popup__input",id:"caption-add-place",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443","aria-label":"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,minLength:"1",ref:n}),Object(d.jsx)("span",{className:"popup__error popup__error_visible caption-add-place-error"})]})]})}function v(e){return Object(d.jsx)("div",{className:"popup popup_image ".concat(e.link&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container popup__container_image",children:[Object(d.jsx)("img",{className:"popup__image",src:e.link,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u0435\u0441\u0442\u0430"}),Object(d.jsx)("p",{className:"popup__image-caption",children:e.name}),Object(d.jsx)("button",{onClick:e.onClose,type:"button",name:"close-button",className:"popup__close-icon popup__close-icon_image","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})]})})}function N(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),i=Object(l.a)(s,2),r=i[0],p=i[1];return Object(d.jsxs)("form",{className:"login",onSubmit:function(t){t.preventDefault(),e.onSubmit({email:a,password:r})},children:[Object(d.jsx)("h1",{className:"login__heading",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("label",{htmlFor:"login-email",className:"popup__container-label",children:[Object(d.jsx)("input",{type:"email",name:"email",className:"login__field",id:"login-email",placeholder:"Email","aria-label":"Email \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",required:!0,minLength:"2",maxLength:"40",value:a,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error popup__error_visible name-profile-edit-error"})]}),Object(d.jsxs)("label",{htmlFor:"login-password",className:"popup__container-label",children:[Object(d.jsx)("input",{type:"password",name:"password",className:"login__field",id:"login-password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c","aria-label":"\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",required:!0,minLength:"2",maxLength:"40",value:r,onChange:function(e){p(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error popup__error_visible name-profile-edit-error"})]}),Object(d.jsx)("button",{type:"submit",className:"login__register-button","aria-label":"\u0412\u043e\u0439\u0442\u0438",children:"\u0412\u043e\u0439\u0442\u0438"})]})}function k(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),r=Object(l.a)(s,2),p=r[0],u=r[1];return Object(d.jsxs)("form",{className:"register",onSubmit:function(t){t.preventDefault(),e.onSubmit({email:a,password:p}),console.log("Register.js email and pw: ".concat(a,", ").concat(p))},noValidate:!0,children:[Object(d.jsx)("h1",{className:"register__heading",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("label",{htmlFor:"registration-email",className:"popup__container-label",children:[Object(d.jsx)("input",{type:"email",name:"email",className:"register__field",id:"registration-email",placeholder:"Email","aria-label":"Email \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",required:!0,minLength:"2",maxLength:"40",value:a,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error popup__error_visible name-profile-edit-error"})]}),Object(d.jsxs)("label",{htmlFor:"registration-password",className:"popup__container-label",children:[Object(d.jsx)("input",{type:"password",name:"password",className:"register__field",id:"registration-password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c","aria-label":"\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",required:!0,minLength:"2",maxLength:"40",value:p,onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error popup__error_visible name-profile-edit-error"})]}),Object(d.jsx)("button",{type:"submit",className:"register__register-button","aria-label":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("p",{className:"register__login-invitation",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(i.b,{to:"/sign-in",className:"register__login-invitation-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var C=n.p+"static/media/success.1b6082f8.svg",y=n.p+"static/media/denied.df8eddf6.svg";function S(e){var t=null,n=null;return"success"===e.status?(t=C,n="\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"):(t=y,n="\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),Object(d.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container popup__container_info",name:"success",children:[Object(d.jsx)("img",{className:"popup__image_info",src:t,alt:"Message icon"}),Object(d.jsx)("h3",{className:"popup__heading popup__heading_info",children:n}),Object(d.jsx)("button",{onClick:e.onClose,type:"button",name:"close-button",className:"popup__close-icon","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f"})]})})}var I=n(23),w=n(24),L=function(e){var t=e.component,n=Object(w.a)(e,["component"]);return Object(d.jsx)(p.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(I.a)({},n)):Object(d.jsx)(p.a,{to:"/sign-in"})}})},E=n(13),A=n(14),R=new(function(){function e(t){Object(E.a)(this,e),this._url=t.url,this._groupId=t.groupId,this._headers=t.headers}return Object(A.a)(e,[{key:"_getAllInfo",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/").concat(this._groupId,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/").concat(this._groupId,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return this._cardId=e,fetch("".concat(this._url,"/").concat(this._groupId,"/cards/").concat(this._cardId),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/").concat(this._groupId,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._url,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._checkResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1",groupId:"cohort-20",headers:{authorization:"9af7eabd-c94e-4285-ad12-d82268efba7b","Content-Type":"application/json"}}),P=new(function(){function e(t){Object(E.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(A.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"register",value:function(e){return console.log("auth.js email and pw: ".concat(e.email,", ").concat(e.password)),fetch("".concat(this._url,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then(this._checkResponse)}},{key:"signing",value:function(e){return fetch("".concat(this._url,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.email})}).then(this._checkResponse)}},{key:"validityCheck",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(e)}}).then(this._checkResponse)}}]),e}())({url:"https://auth.nomoreparties.co"});function T(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];var o=c.a.useState(!1),s=Object(l.a)(o,2),i=s[0],u=s[1];var h=c.a.useState(!1),f=Object(l.a)(h,2),C=f[0],y=f[1];var I=c.a.useState({}),w=Object(l.a)(I,2),E=w[0],A=w[1];function T(){a(!1),u(!1),y(!1),se(!1),A({})}var U=c.a.useState({}),D=Object(l.a)(U,2),q=D[0],F=D[1];c.a.useEffect((function(){R.getUserInfo().then((function(e){F(e)})).catch((function(e){console.log(e)}))}),[]);var J=c.a.useState([]),H=Object(l.a)(J,2),G=H[0],M=H[1];c.a.useEffect((function(){R.getCards().then((function(e){M(e)})).catch((function(e){console.log(e)}))}),[]);var z=c.a.useState(!1),B=Object(l.a)(z,2),V=B[0],K=B[1],Q=c.a.useState(""),W=Object(l.a)(Q,2),X=W[0],Y=W[1],Z=c.a.useState(""),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(p.g)(),ae=c.a.useState(!1),ce=Object(l.a)(ae,2),oe=ce[0],se=ce[1];function ie(){se(!0)}return c.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&P.validityCheck(e).then((function(e){e?(Y(e.data.email),K(!0),ne.push("/")):localStorage.removeItem("jwt")}))}),[]),Object(d.jsx)(m.Provider,{value:q,children:Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"page__content",children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(_,{loggedIn:V,logOutHandler:function(){K(!1),localStorage.removeItem("jwt"),p.a},email:X}),Object(d.jsxs)(p.d,{children:[Object(d.jsx)(L,{exact:!0,path:"/",loggedIn:V,component:b,onEditProfile:function(){a(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){y(!0)},onOpenImage:function(e){A({name:e.card.name,link:e.card.link})},cards:G,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===q._id}));R.changeLikeCardStatus(e._id,!t).then((function(t){M((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){R.deleteCard(e._id).then((function(){M((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(p.b,{path:"/sign-up",children:Object(d.jsx)(k,{onSubmit:function(e){console.log("App.js email and pw: ".concat(e.email,", ").concat(e.password)),P.register(e).then((function(){te("success"),ie()})).catch((function(e){te("fail"),ie(),console.log(e)}))}})}),Object(d.jsx)(p.b,{path:"/sign-in",children:Object(d.jsx)(N,{onSubmit:function(e){P.signing(e).then((function(e){K(!0),localStorage.setItem("jwt",e.token),ne.push("/")})).catch((function(e){te("fail"),ie(),console.log(e)}))}})})]}),Object(d.jsx)(j,{}),Object(d.jsx)(g,{isOpen:n,onClose:T,onUpdateUser:function(e){var t=e.name,n=e.about;R.changeUserInfo({name:t,about:n}).then((function(e){F(e),T()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(x,{isOpen:i,onClose:T,onAddPlace:function(e){R.postCard(e).then((function(e){M([e].concat(Object(r.a)(G))),T()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(O,{isOpen:C,onClose:T,onUpdateAvatar:function(e){var t=e.link;R.setUserAvatar({link:t}).then((function(e){F(e),T()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(v,{isOpen:E,onClose:T,name:E.name,link:E.link}),Object(d.jsx)(S,{isOpen:oe,onClose:T,status:ee})]})})})})}s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(i.a,{basename:"/react-mesto-auth",children:Object(d.jsx)(T,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e7b20bc2.chunk.js.map