(this["webpackJsonpmy-resume-website"]=this["webpackJsonpmy-resume-website"]||[]).push([[0],{100:function(e,t,s){},101:function(e,t,s){},102:function(e,t,s){},103:function(e,t,s){},104:function(e,t,s){},105:function(e,t,s){},106:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},352:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":100,"density":{"enable":false}},"size":{"value":3,"random":true,"anim":{"speed":4,"size_min":0.3}},"line_linked":{"enable":false},"move":{"random":true,"speed":0.5,"direction":"top","out_mode":"out"}},"interactivity":{"events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"}},"modes":{"bubble":{"distance":250,"duration":2,"size":0,"opacity":0},"repulse":{"distance":400,"duration":4}}}}')},353:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(36),i=s.n(c),r=(s(90),s(6)),o=s(7),l=s(9),j=s(8),d=(s(91),s(92),s(0)),m=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"getRandomSentence",value:function(){var e=["Passion\xe9 d'informatique","Curieux et envieux d'apprendre","\xc9tudiant en informatique"];return e[Math.floor(Math.random()*e.length)]}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"welcome-screen-container",children:Object(d.jsxs)("div",{id:"welcome-message-container",children:[Object(d.jsx)("h3",{id:"welcome-name",children:"Henrotte Alexandre"}),Object(d.jsx)("span",{children:this.getRandomSentence()})]})})}}]),s}(a.a.Component),u=(s(94),s(95),s(96),s(97),s(98),s(99),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).handleClick=function(){e.state.opened?e.setState({opened:!1}):e.setState({opened:!0})},e.state={opened:!1},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{class:"container",onClick:this.handleClick,children:[Object(d.jsxs)("div",{class:"title",children:[Object(d.jsx)("img",{className:"info-icon",src:this.props.image.src,alt:this.props.image.alt}),Object(d.jsx)("h3",{children:this.props.title}),Object(d.jsx)("img",{className:"collapse-icon",src:"/my-resume-website/icons/about-me/chevron.svg",alt:"Collapse icon"})]}),Object(d.jsx)("div",{className:this.state.opened?"visible-info":"hidden-info",children:this.props.content})]})}}]),s}(a.a.Component)),b=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:"about-me-container",children:[Object(d.jsxs)("div",{className:"info-column",children:[Object(d.jsx)("h1",{id:"title-name",children:"Henrotte Alexandre"}),Object(d.jsx)("img",{id:"profile-pic",src:"/my-resume-website/images/about-me/profile-pic.png",alt:"Henrotte Alexandre"}),Object(d.jsxs)("ul",{className:"profile-infos",children:[Object(d.jsx)("li",{children:"19 ans"}),Object(d.jsx)("li",{className:"text-separator",children:"/"}),Object(d.jsx)("li",{children:"Tintigny"}),Object(d.jsx)("li",{className:"text-separator",children:"/"}),Object(d.jsx)("li",{children:"D\xe9veloppeur junior"})]}),Object(d.jsx)("p",{id:"text-about-me",children:"Passionn\xe9 par l'informatique depuis mon plus jeune \xe2ge, je suis une personne qui a soif de connaissance et qui ne l\xe2che rien pour atteindre ses objectifs"}),Object(d.jsxs)("ul",{className:"social-networks",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://github.com/alexandreHenrotte",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:"bounce",src:"/my-resume-website/icons/social-networks/github.svg",href:"https://github.com/alexandreHenrotte",alt:"Github icon"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/henrotte-alexandre/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:"bounce",src:"/my-resume-website/icons/social-networks/linkedin.svg",alt:"LinkedIn icon"})})})]})]}),Object(d.jsxs)("div",{className:"info-column",children:[Object(d.jsx)(u,{image:{src:"/my-resume-website/icons/about-me/languages.svg",alt:"Languages icon"},title:"Langues",content:Object(d.jsxs)("div",{className:"languages-container",children:[Object(d.jsxs)("div",{className:"language-box",children:[Object(d.jsx)("img",{className:"language-flag",src:"/my-resume-website/images/about-me/languages/french.png",alt:"French flag"}),Object(d.jsx)("span",{className:"language-name",children:"Fran\xe7ais \u2013 langue maternelle"})]}),Object(d.jsxs)("div",{className:"language-box",children:[Object(d.jsx)("img",{className:"language-flag",src:"/my-resume-website/images/about-me/languages/uk.png",alt:"UK flag"}),Object(d.jsx)("span",{className:"language-name",children:"Anglais \u2013 niveau B2"})]})]})}),Object(d.jsx)(u,{image:{src:"/my-resume-website/icons/about-me/interests.svg",alt:"Interests icon"},title:"Centres d'int\xe9r\xeats",content:Object(d.jsxs)("div",{className:"interests-container",children:[Object(d.jsx)("span",{className:"interest",children:"D\xe9veloppement (logiciel et web)"}),Object(d.jsx)("span",{className:"interest",children:"Jeux vid\xe9o"}),Object(d.jsx)("span",{className:"interest",children:"Livres"}),Object(d.jsx)("span",{className:"interest",children:"Cin\xe9ma"})]})}),Object(d.jsx)(u,{image:{src:"/my-resume-website/icons/about-me/soft-skills.svg",alt:"Soft-skills icon"},title:"Soft skills",content:Object(d.jsxs)("ul",{className:"softskills-container",children:[Object(d.jsx)("li",{className:"softskill",children:"Passion"}),Object(d.jsx)("li",{className:"softskills-separator",children:"-"}),Object(d.jsx)("li",{className:"softskill",children:"Pers\xe9v\xe9rance"}),Object(d.jsx)("li",{className:"softskills-separator",children:"-"}),Object(d.jsx)("li",{className:"softskill",children:"Curiosit\xe9"})]})})]})]})}}]),s}(a.a.Component),h=(s(100),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).toggle=function(){n.setState({visible:!n.state.visible},(function(){var e=document.getElementById("navbar-wrapper"),t=document.getElementById("content");n.state.visible?(e.classList.remove("hided"),t.classList.remove("without-navbar")):(e.classList.add("hided"),t.classList.add("without-navbar"))}))},n.state={visible:!0},n}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{id:"navbar-wrapper",children:[Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"nav-icons",children:[Object(d.jsxs)("li",{className:"nav-icon",children:[Object(d.jsx)("img",{className:"about-me"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/user.svg",onClick:function(){return e.props.changeContent("about-me")},alt:"Icon for section About Me"}),Object(d.jsx)("span",{children:"Profil"})]}),Object(d.jsxs)("li",{className:"nav-icon",children:[Object(d.jsx)("img",{className:"skills"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/coding.svg",onClick:function(){return e.props.changeContent("skills")},alt:"Icon for section Skills"}),Object(d.jsx)("span",{children:"Comp\xe9tences"})]}),Object(d.jsxs)("li",{className:"nav-icon",children:[Object(d.jsx)("img",{className:"experiences"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/experience.svg",onClick:function(){return e.props.changeContent("experiences")},alt:"Icon for section Experiences"}),Object(d.jsx)("span",{children:"Formation et exp\xe9rience"})]}),Object(d.jsxs)("li",{className:"nav-icon",children:[Object(d.jsx)("img",{className:"projects"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/projects.svg",onClick:function(){return e.props.changeContent("projects")},alt:"Icon for section Projects"}),Object(d.jsx)("span",{children:"Projets"})]}),Object(d.jsxs)("li",{className:"nav-icon",children:[Object(d.jsx)("img",{className:"contact"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/contact.svg",onClick:function(){return e.props.changeContent("contact")},alt:"Icon for section Contact"}),Object(d.jsx)("span",{children:"Contact"})]})]})}),Object(d.jsx)("img",{id:"toggle-navbar-icon",src:"/my-resume-website/icons/navbar/toggle-navbar.svg",onClick:function(){return e.toggle()},alt:"toggle navbar icon"})]})}}]),s}(a.a.Component)),p=(s(101),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{class:"skill-box",children:[Object(d.jsx)("img",{src:this.props.img.src,alt:this.props.img.alt}),Object(d.jsx)("span",{children:this.props.skillName})]})}}]),s}(a.a.Component)),g=(s(102),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:"skills-container",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("h3",{children:"Programmation"}),Object(d.jsx)(p,{img:{src:"/my-resume-website/images/skills/java.png",alt:"Java Logo"},skillName:"Java"}),Object(d.jsx)(p,{img:{src:"/my-resume-website/images/skills/python.png",alt:"Python Logo"},skillName:"Python"})]}),Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("h3",{children:"Web - Front end"}),Object(d.jsx)(p,{img:{src:"/my-resume-website/images/skills/html5.png",alt:"HTML Logo"},skillName:"HTML"}),Object(d.jsx)(p,{img:{src:"/my-resume-website/images/skills/css3.png",alt:"CSS Logo"},skillName:"CSS"}),Object(d.jsx)(p,{img:{src:"/my-resume-website/images/skills/javascript.png",alt:"Javascript Logo"},skillName:"Javascript"})]}),Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("h3",{children:"Web - Back end"}),Object(d.jsx)(p,{img:{src:"/my-resume-website/images/skills/nodejs.png",alt:"Node.js Logo"},skillName:"Node.js"})]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("h3",{children:"Base de donn\xe9es"}),Object(d.jsx)(p,{img:{src:"/my-resume-website/images/skills/mssql.png",alt:"Microsoft SQL Server Logo"},skillName:"MSSQL"})]}),Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("h3",{children:"Gestion de versions"}),Object(d.jsx)(p,{img:{src:"/my-resume-website/images/skills/git.png",alt:"Git Logo"},skillName:"Git"})]})]})]})}}]),s}(a.a.Component)),x=s(79),O=(s(103),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){document.getElementById("scroll-animation").classList.add("animation-hide")}},{key:"render",value:function(){return Object(d.jsxs)("section",{className:"formation-experiences-container",children:[Object(d.jsxs)("div",{id:"formations-container",children:[Object(d.jsx)("h3",{className:"card-section-title",children:"Formation"}),Object(d.jsxs)("div",{className:"formation-cards",children:[Object(d.jsxs)("div",{className:"formation-card",children:[Object(d.jsx)("img",{src:"/my-resume-website/images/experiences/henallux.png",alt:"Henallux school logo"}),Object(d.jsxs)("div",{className:"formation-text-container",children:[Object(d.jsx)("span",{className:"main-text",children:"Bachelier en informatique et syst\xe8mes, orientation technologie de l\u2019informatique"}),Object(d.jsx)("span",{className:"secondary-text",children:"IESN - Henallux"}),Object(d.jsx)("span",{className:"secondary-text",children:"2019 - En cours | Namur, Belgique"})]})]}),Object(d.jsxs)("div",{className:"formation-card",children:[Object(d.jsx)("img",{src:"/my-resume-website/images/experiences/pierrard.png",alt:"IAMP Pierrard school logo"}),Object(d.jsxs)("div",{className:"formation-text-container",children:[Object(d.jsx)("span",{className:"main-text",children:"CESS + Qualification : technicien en informatique"}),Object(d.jsx)("span",{className:"secondary-text",children:"Institut des Arts et M\xe9tiers de Pierrard"}),Object(d.jsx)("span",{className:"secondary-text",children:"2017 - 2019 | Virton, Belgique"})]})]})]})]}),Object(d.jsx)(x.a,{id:"scroll-animation",autoplay:!0,loop:!0,src:"/my-resume-website/animations/scroll.json"}),Object(d.jsxs)("div",{id:"experiences-container",children:[Object(d.jsx)("h3",{className:"card-section-title",children:"Exp\xe9rience"}),Object(d.jsxs)("div",{className:"experience-cards",children:[Object(d.jsxs)("div",{className:"experience-card",children:[Object(d.jsx)("span",{className:"experience-name",children:"Technicien en r\xe9seau informatique (job \xe9tudiant)"}),Object(d.jsx)("span",{className:"secondary-text",children:"LuxVoip S.A.R.L"}),Object(d.jsx)("span",{className:"secondary-text",children:"07/2019 - 08/2019 | Rodange, Luxembourg"}),Object(d.jsx)("span",{className:"experience-text",children:"Installation d'un nouveau r\xe9seau Wi-Fi dans plusieurs restaurants du domaine des grottes de Han."}),Object(d.jsx)("span",{className:"experience-acquired",children:"Acquis : organisation, respect des d\xe9lais"})]}),Object(d.jsxs)("div",{className:"experience-card",children:[Object(d.jsx)("span",{className:"experience-name",children:"Technicien en r\xe9seau informatique (stage)"}),Object(d.jsx)("span",{className:"secondary-text",children:"LuxVoip S.A.R.L"}),Object(d.jsx)("span",{className:"secondary-text",children:"03/2019 - 04/2019 | Rodange, Luxembourg"}),Object(d.jsx)("span",{className:"experience-text",children:"Installation du r\xe9seau filaire d'un nouveau b\xe2timent de l'ESA (European Space Agency)."}),Object(d.jsx)("span",{className:"experience-acquired",children:"Acquis : patience, importance du d\xe9tail"})]})]})]})]})}}]),s}(a.a.Component)),v=(s(104),s(105),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"project-container",children:[Object(d.jsx)("h3",{className:"project-name",children:this.props.title}),Object(d.jsx)("div",{class:"ih-item circle colored effect1",children:Object(d.jsxs)("a",{href:"https://github.com/".concat(this.props.githubProjectName),target:"_blank",rel:"noreferrer",children:[Object(d.jsx)("div",{class:"spinner"}),Object(d.jsx)("div",{class:"img",children:Object(d.jsx)("img",{src:this.props.img.src,alt:this.props.img.alt})}),Object(d.jsx)("div",{class:"info",children:Object(d.jsxs)("div",{class:"info-back",children:[Object(d.jsx)("h3",{children:"Voir sur Github"}),Object(d.jsx)("p",{children:this.props.githubProjectName})]})})]})}),Object(d.jsx)("span",{children:this.props.text})]})}}]),s}(a.a.Component)),f=(s(106),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:"projects-container",children:[Object(d.jsx)(v,{title:"Belgium Covid Tracker",githubProjectName:"alexandreHenrotte/belgium-covid-tracker",img:{src:"/my-resume-website/images/projects/belgium-covid-tracker.jpg",alt:"Belgium Covid Tracker Project"},text:"Bot Twitter postant journali\xe8rement des statistiques sur l'\xe9tat du Covid-19 en Belgique."}),Object(d.jsx)(v,{title:"Stock Manager (en cours)",githubProjectName:"alexandreHenrotte/stock-manager",img:{src:"/my-resume-website/images/projects/stock-manager.jpg",alt:"Stock Manager Project"},text:"Site web permettant aux utilisateurs la cr\xe9ation de stocks et la gestion de leurs produits."})]})}}]),s}(a.a.Component)),y=s(80),N=s(25),k=(s(107),s(81)),C=s.n(k),w=s(82),S=s(85),L=(s(115),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).handleChange=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.handleForm=function(t){t.preventDefault(),""===e.state.name||""===e.state.mail||""===e.state.message?e.formNotValidError():e.state.captchaCompleted?(e.sendForm(),e.resetForm()):e.missingCaptchaError()},e.captchaCompleted=function(){e.setState({captchaCompleted:!0})},e.state={name:"",mail:"",message:"",captchaCompleted:!1},e.captchaRef=a.a.createRef(),e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.textAreaAutoResize()}},{key:"textAreaAutoResize",value:function(){Object(w.$)("textarea").each((function(){this.setAttribute("style","height:"+this.scrollHeight+"px;overflow-y:hidden;")})).on("input",(function(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}))}},{key:"sendForm",value:function(){try{var e={name:this.state.name,email:this.state.mail,message:this.state.message};C.a.send("service_ce68fwy","template_hmc6s7q",e,"user_fkCDyFkZ6EkkLihUeGaew").then((function(e){console.log(e.text)})),this.successMessage()}catch(t){console.log(t),this.errorMessage()}}},{key:"successMessage",value:function(){N.b.info("\ud83c\udf89 Message envoy\xe9 \ud83c\udf89",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},{key:"errorMessage",value:function(){N.b.error("Le message n'a pas pu \xeatre envoy\xe9 \ud83d\ude13",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},{key:"missingCaptchaError",value:function(){N.b.error("Veuillez compl\xe9ter le captcha",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},{key:"formNotValidError",value:function(){N.b.error("Le formulaire de contact est incomplet \ud83d\ude15",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},{key:"resetForm",value:function(){this.setState({name:"",mail:"",message:"",captchaCompleted:!1}),this.captchaRef.current.reset()}},{key:"render",value:function(){return Object(d.jsxs)("section",{className:"contact-container",children:[Object(d.jsx)(N.a,{}),Object(d.jsxs)("div",{id:"contact-form",children:[Object(d.jsx)("h3",{children:"Contactez-moi"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"text",placeholder:"Nom",name:"name",value:this.state.name,onChange:this.handleChange,autocomplete:"new-password"}),Object(d.jsx)("input",{type:"email",placeholder:"Mail",name:"mail",value:this.state.mail,onChange:this.handleChange,autocomplete:"new-password"}),Object(d.jsx)("textarea",{placeholder:"Message",name:"message",value:this.state.message,onChange:this.handleChange,autocomplete:"new-password"}),Object(d.jsx)("div",{id:"recaptcha-container",children:Object(d.jsx)(S.a,{ref:this.captchaRef,sitekey:"6Lfu36gbAAAAAHZUlw5qzizMjCujynRiJxHg5yOi",onChange:this.captchaCompleted})}),Object(d.jsx)("button",{onClick:this.handleForm,children:"Envoyer"})]})]})]})}}]),s}(a.a.Component)),A=(s(116),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).loading=function(){e.state.level<100?e.setState({level:e.state.level+100}):(clearInterval(e.state.interval),e.loaded())},e.loaded=function(){document.documentElement.style.overflow="auto",document.body.scroll="yes",e.props.setLoaded()},e.state={interval:null,level:0},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),document.documentElement.style.overflow="hidden",document.body.scroll="no";var e=setInterval(this.loading,1e3);this.setState({interval:e})}},{key:"render",value:function(){return Object(d.jsx)("div",{id:"loading-container",children:Object(d.jsx)("img",{src:"/my-resume-website/animations/loading.svg",alt:"loading animation"})})}}]),s}(a.a.Component)),E=(s(117),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).setLoaded=function(){e.setState({loaded:!0})},e.state={loaded:!1},e}return Object(o.a)(s,[{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setState({loaded:!1})}},{key:"render",value:function(){return Object(d.jsxs)("body",{id:"content",onAnimationEnd:this.onAnimationEnd,children:[!this.state.loaded&&Object(d.jsx)(A,{setLoaded:this.setLoaded}),Object(d.jsx)("div",{id:"page",className:this.state.loaded?"page-visible":"page-hided",children:this.props.children})]})}}]),s}(a.a.Component)),M=s(84),P=s.n(M),q=s(352),H=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).selectContent=function(){switch(n.state.currentContent){case"about-me":return Object(d.jsx)(b,{});case"skills":return Object(d.jsx)(g,{});case"experiences":return Object(d.jsx)(O,{});case"projects":return Object(d.jsx)(f,{});case"contact":return Object(d.jsx)(L,{})}},n.changeContent=function(e){n.setState({currentContent:e})},n.state={currentContent:"about-me"},n}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)(P.a,{className:"main-particles",params:q}),Object(d.jsx)(h,{currentContent:this.state.currentContent,changeContent:this.changeContent}),Object(d.jsx)(E,{children:this.selectContent()})]})}}]),s}(a.a.Component);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root"))},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){},94:function(e,t,s){},95:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){},99:function(e,t,s){}},[[353,1,2]]]);
//# sourceMappingURL=main.1ab1d14a.chunk.js.map