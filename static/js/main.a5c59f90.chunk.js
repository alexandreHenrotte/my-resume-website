(this["webpackJsonpmy-resume-website"]=this["webpackJsonpmy-resume-website"]||[]).push([[0],{104:function(e,t,s){},105:function(e,t,s){},106:function(e,t,s){},109:function(e,t,s){},110:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){},113:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},118:function(e,t,s){},119:function(e,t,s){},120:function(e,t,s){},121:function(e,t,s){},122:function(e,t,s){},132:function(e,t,s){},133:function(e,t,s){},134:function(e,t,s){},369:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":100,"density":{"enable":false}},"size":{"value":3,"random":true,"anim":{"speed":4,"size_min":0.3}},"line_linked":{"enable":false},"move":{"random":true,"speed":0.5,"direction":"top","out_mode":"out"}},"interactivity":{"events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"}},"modes":{"bubble":{"distance":250,"duration":2,"size":0,"opacity":0},"repulse":{"distance":400,"duration":4}}}}')},370:function(e,t,s){"use strict";s.r(t);var n,a=s(1),c=s.n(a),i=s(41),r=s.n(i),o=(s(104),s(6)),l=s(7),j=s(9),d=s(8),m=(s(105),s(371)),u=(s(106),s(0)),b=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"getRandomSentence",value:function(){var e=[Object(u.jsx)(m.a,{children:"welcome-screen.sentences.1"}),Object(u.jsx)(m.a,{children:"welcome-screen.sentences.2"}),Object(u.jsx)(m.a,{children:"welcome-screen.sentences.3"})];return e[Math.floor(Math.random()*e.length)]}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"welcome-screen-container",children:Object(u.jsxs)("div",{id:"welcome-message-container",children:[Object(u.jsx)("h3",{id:"welcome-name",children:"Henrotte Alexandre"}),Object(u.jsx)("span",{children:this.getRandomSentence()})]})})}}]),s}(c.a.Component),h=(s(109),s(110),s(111),s(112),s(113),s(114),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).handleClick=function(){e.state.opened?e.setState({opened:!1}):e.setState({opened:!0})},e.state={opened:!1},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{class:"container",onClick:this.handleClick,children:[Object(u.jsxs)("div",{class:"title",children:[Object(u.jsx)("img",{className:"info-icon",src:this.props.image.src,alt:this.props.image.alt}),Object(u.jsx)("h3",{children:this.props.title}),Object(u.jsx)("img",{className:"collapse-icon",src:"/my-resume-website/icons/about-me/chevron.svg",alt:"Collapse icon"})]}),Object(u.jsx)("div",{className:this.state.opened?"visible-info":"hidden-info",children:this.props.content})]})}}]),s}(c.a.Component)),p=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("section",{className:"about-me-container",children:[Object(u.jsxs)("div",{className:"info-column",children:[Object(u.jsx)("h1",{id:"title-name",children:"Henrotte Alexandre"}),Object(u.jsx)("img",{id:"profile-pic",src:"/my-resume-website/images/about-me/profile-pic.png",alt:"Henrotte Alexandre"}),Object(u.jsxs)("ul",{className:"profile-infos",children:[Object(u.jsx)("li",{children:Object(u.jsx)(m.a,{children:"about-me.age"})}),Object(u.jsx)("li",{className:"text-separator",children:"/"}),Object(u.jsx)("li",{children:"Tintigny"}),Object(u.jsx)("li",{className:"text-separator",children:"/"}),Object(u.jsx)("li",{children:Object(u.jsx)(m.a,{children:"about-me.job"})})]}),Object(u.jsx)("p",{id:"text-about-me",children:Object(u.jsx)(m.a,{children:"about-me.description"})}),Object(u.jsxs)("ul",{className:"social-networks",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://github.com/alexandreHenrotte",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{className:"bounce",src:"/my-resume-website/icons/social-networks/github.svg",href:"https://github.com/alexandreHenrotte",alt:"Github icon"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/henrotte-alexandre/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{className:"bounce",src:"/my-resume-website/icons/social-networks/linkedin.svg",alt:"LinkedIn icon"})})})]})]}),Object(u.jsxs)("div",{className:"info-column",children:[Object(u.jsx)(h,{image:{src:"/my-resume-website/icons/about-me/languages.svg",alt:"Languages icon"},title:Object(u.jsx)(m.a,{children:"about-me.languages.title"}),content:Object(u.jsxs)("div",{className:"languages-container",children:[Object(u.jsxs)("div",{className:"language-box",children:[Object(u.jsx)("img",{className:"language-flag",src:"/my-resume-website/images/about-me/languages/french.png",alt:"French flag"}),Object(u.jsx)("span",{className:"language-name",children:Object(u.jsx)(m.a,{children:"about-me.languages.1"})})]}),Object(u.jsxs)("div",{className:"language-box",children:[Object(u.jsx)("img",{className:"language-flag",src:"/my-resume-website/images/about-me/languages/uk.png",alt:"UK flag"}),Object(u.jsx)("span",{className:"language-name",children:Object(u.jsx)(m.a,{children:"about-me.languages.2"})})]})]})}),Object(u.jsx)(h,{image:{src:"/my-resume-website/icons/about-me/interests.svg",alt:"Interests icon"},title:Object(u.jsx)(m.a,{children:"about-me.interests.title"}),content:Object(u.jsxs)("div",{className:"interests-container",children:[Object(u.jsx)("span",{className:"interest",children:Object(u.jsx)(m.a,{children:"about-me.interests.1"})}),Object(u.jsx)("span",{className:"interest",children:Object(u.jsx)(m.a,{children:"about-me.interests.2"})}),Object(u.jsx)("span",{className:"interest",children:Object(u.jsx)(m.a,{children:"about-me.interests.3"})}),Object(u.jsx)("span",{className:"interest",children:Object(u.jsx)(m.a,{children:"about-me.interests.4"})})]})}),Object(u.jsx)(h,{image:{src:"/my-resume-website/icons/about-me/soft-skills.svg",alt:"Soft-skills icon"},title:Object(u.jsx)(m.a,{children:"about-me.soft-skills.title"}),content:Object(u.jsxs)("ul",{className:"softskills-container",children:[Object(u.jsx)("li",{className:"softskill",children:Object(u.jsx)(m.a,{children:"about-me.soft-skills.1"})}),Object(u.jsx)("li",{className:"softskills-separator",children:"-"}),Object(u.jsx)("li",{className:"softskill",children:Object(u.jsx)(m.a,{children:"about-me.soft-skills.2"})}),Object(u.jsx)("li",{className:"softskills-separator",children:"-"}),Object(u.jsx)("li",{className:"softskill",children:Object(u.jsx)(m.a,{children:"about-me.soft-skills.3"})})]})})]})]})}}]),s}(c.a.Component),g=s(26);!function(e){e.FR="fr",e.EN="en"}(n||(n={}));s(115);var x=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).changeLanguage=function(e){switch(e){case n.EN:g.a.changeLanguage(n.EN);break;case n.FR:g.a.changeLanguage(n.FR)}a.props.action()},a.state={selectedLanguage:n.FR,folded:!0},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{id:"lang-select",children:[Object(u.jsx)("div",{className:"flag-container",onClick:function(){return e.changeLanguage(n.FR)},children:Object(u.jsx)("img",{src:"/my-resume-website/icons/flags/france.png",alt:"French flag"})}),Object(u.jsx)("div",{className:"flag-container",onClick:function(){return e.changeLanguage(n.EN)},children:Object(u.jsx)("img",{src:"/my-resume-website/icons/flags/united-kingdom.png",alt:"UK flag"})})]})}}]),s}(c.a.Component),O=(s(116),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).toggle=function(){n.setState({visible:!n.state.visible},(function(){var e=document.getElementById("navbar-wrapper"),t=document.getElementById("content");n.state.visible?(e.classList.remove("hided"),t.classList.remove("without-navbar")):(e.classList.add("hided"),t.classList.add("without-navbar"))}))},n.onLanguageChange=function(){n.forceUpdate(),n.props.onLanguageChange()},n.state={visible:!0},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{id:"navbar-wrapper",children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{id:"langselect-container",children:Object(u.jsx)(x,{action:this.onLanguageChange})}),Object(u.jsxs)("ul",{className:"nav-icons",children:[Object(u.jsxs)("li",{className:"nav-icon",children:[Object(u.jsx)("img",{className:"about-me"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/user.svg",onClick:function(){return e.props.changeContent("about-me")},alt:"Icon for section About Me"}),Object(u.jsx)("span",{children:Object(u.jsx)(m.a,{children:"nav-bar.profil"})})]}),Object(u.jsxs)("li",{className:"nav-icon",children:[Object(u.jsx)("img",{className:"skills"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/coding.svg",onClick:function(){return e.props.changeContent("skills")},alt:"Icon for section Skills"}),Object(u.jsx)("span",{children:Object(u.jsx)(m.a,{children:"nav-bar.skills"})})]}),Object(u.jsxs)("li",{className:"nav-icon",children:[Object(u.jsx)("img",{className:"experiences"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/experience.svg",onClick:function(){return e.props.changeContent("experiences")},alt:"Icon for section Experiences"}),Object(u.jsx)("span",{children:Object(u.jsx)(m.a,{children:"nav-bar.formation-experience"})})]}),Object(u.jsxs)("li",{className:"nav-icon",children:[Object(u.jsx)("img",{className:"projects"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/projects.svg",onClick:function(){return e.props.changeContent("projects")},alt:"Icon for section Projects"}),Object(u.jsx)("span",{children:Object(u.jsx)(m.a,{children:"nav-bar.projects"})})]}),Object(u.jsxs)("li",{className:"nav-icon",children:[Object(u.jsx)("img",{className:"contact"===this.props.currentContent?"active-page":"normal-page",src:"/my-resume-website/icons/navbar/contact.svg",onClick:function(){return e.props.changeContent("contact")},alt:"Icon for section Contact"}),Object(u.jsx)("span",{children:Object(u.jsx)(m.a,{children:"nav-bar.contact"})})]})]}),Object(u.jsx)("div",{id:"download-pdf-container",children:Object(u.jsx)("a",{href:"/my-resume-website/files/CV-Alexandre_HENROTTE.pdf",download:"",children:Object(u.jsx)("img",{className:"download-pdf-image",src:"/my-resume-website/icons/navbar/pdf.png",alt:"Download PDF icon"})})})]}),Object(u.jsx)("img",{id:"toggle-navbar-icon",src:"/my-resume-website/icons/navbar/toggle-navbar.svg",onClick:function(){return e.toggle()},alt:"toggle navbar icon"})]})}}]),s}(c.a.Component)),f=(s(117),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{class:"skill-box",children:[Object(u.jsx)("img",{src:this.props.img.src,alt:this.props.img.alt}),Object(u.jsx)("span",{children:this.props.skillName})]})}}]),s}(c.a.Component)),v=(s(118),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("section",{className:"skills-container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(m.a,{children:"skills.programming"})}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/c-sharp.png",alt:"C# Logo"},skillName:"C#"}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/java.png",alt:"Java Logo"},skillName:"Java"}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/python.png",alt:"Python Logo"},skillName:"Python"})]}),Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("h3",{children:"Web - Front end"}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/html5.png",alt:"HTML Logo"},skillName:"HTML"}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/css3.png",alt:"CSS Logo"},skillName:"CSS"}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/javascript.png",alt:"Javascript Logo"},skillName:"Javascript"}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/react.png",alt:"React Logo"},skillName:"React.js"})]}),Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("h3",{children:"Web - Back end"}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/dot-net-core.png",alt:".NET Core Logo"},skillName:"ASP.NET Core"}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/flask.png",alt:"Flask Logo"},skillName:"Flask"})]})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(m.a,{children:"skills.database"})}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/mssql.png",alt:"Microsoft SQL Server Logo"},skillName:"MSSQL"})]}),Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(m.a,{children:"skills.version-control"})}),Object(u.jsx)(f,{img:{src:"/my-resume-website/images/skills/git.png",alt:"Git Logo"},skillName:"Git"})]})]})]})}}]),s}(c.a.Component)),k=s(90),y=(s(119),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){document.getElementById("scroll-animation").classList.add("animation-hide")}},{key:"render",value:function(){return Object(u.jsxs)("section",{className:"formation-experiences-container",children:[Object(u.jsxs)("div",{id:"formations-container",children:[Object(u.jsx)("h3",{className:"card-section-title",children:Object(u.jsx)(m.a,{children:"formation-experience.formation.title"})}),Object(u.jsxs)("div",{className:"formation-cards",children:[Object(u.jsxs)("div",{className:"formation-card",children:[Object(u.jsx)("img",{src:"/my-resume-website/images/experiences/henallux.png",alt:"Henallux school logo"}),Object(u.jsxs)("div",{className:"formation-text-container",children:[Object(u.jsx)("span",{className:"main-text",children:Object(u.jsx)(m.a,{children:"formation-experience.formation.1.title"})}),Object(u.jsx)("span",{className:"secondary-text",children:"IESN - Henallux"}),Object(u.jsx)("span",{className:"secondary-text",children:"2019 - En cours | Namur, Belgique"})]})]}),Object(u.jsxs)("div",{className:"formation-card",children:[Object(u.jsx)("img",{src:"/my-resume-website/images/experiences/pierrard.png",alt:"IAMP Pierrard school logo"}),Object(u.jsxs)("div",{className:"formation-text-container",children:[Object(u.jsx)("span",{className:"main-text",children:Object(u.jsx)(m.a,{children:"formation-experience.formation.2.title"})}),Object(u.jsx)("span",{className:"secondary-text",children:"Institut des Arts et M\xe9tiers de Pierrard"}),Object(u.jsx)("span",{className:"secondary-text",children:"2017 - 2019 | Virton, Belgique"})]})]})]})]}),Object(u.jsx)(k.a,{id:"scroll-animation",autoplay:!0,loop:!0,src:"/my-resume-website/animations/scroll.json"}),Object(u.jsxs)("div",{id:"experiences-container",children:[Object(u.jsx)("h3",{className:"card-section-title",children:Object(u.jsx)(m.a,{children:"formation-experience.experience.title"})}),Object(u.jsxs)("div",{className:"experience-cards",children:[Object(u.jsxs)("div",{className:"experience-card",children:[Object(u.jsx)("span",{className:"experience-name",children:Object(u.jsx)(m.a,{children:"formation-experience.experience.1.title"})}),Object(u.jsx)("span",{className:"secondary-text",children:"LuxVoip S.A.R.L"}),Object(u.jsx)("span",{className:"secondary-text",children:"07/2019 - 08/2019 | Rodange, Luxembourg"}),Object(u.jsx)("span",{className:"experience-text",children:Object(u.jsx)(m.a,{children:"formation-experience.experience.1.details"})}),Object(u.jsx)("span",{className:"experience-acquired",children:Object(u.jsx)(m.a,{children:"formation-experience.experience.1.acquired"})})]}),Object(u.jsxs)("div",{className:"experience-card",children:[Object(u.jsx)("span",{className:"experience-name",children:Object(u.jsx)(m.a,{children:"formation-experience.experience.2.title"})}),Object(u.jsx)("span",{className:"secondary-text",children:"LuxVoip S.A.R.L"}),Object(u.jsx)("span",{className:"secondary-text",children:"03/2019 - 04/2019 | Rodange, Luxembourg"}),Object(u.jsx)("span",{className:"experience-text",children:Object(u.jsx)(m.a,{children:"formation-experience.experience.2.details"})}),Object(u.jsx)("span",{className:"experience-acquired",children:Object(u.jsx)(m.a,{children:"formation-experience.experience.2.acquired"})})]})]})]})]})}}]),s}(c.a.Component)),w=(s(120),s(121),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e,t,s;return void 0===this.props.githubProjectName?(e="#",t=Object(u.jsx)(m.a,{children:"projects.in-progress"}),s="..."):(e="https://github.com/".concat(this.props.githubProjectName),t=Object(u.jsx)(m.a,{children:"projects.see-on-github"}),s=this.props.githubProjectName),Object(u.jsxs)("div",{className:"project-container",children:[Object(u.jsx)("h3",{className:"project-name",children:this.props.title}),Object(u.jsx)("div",{class:"ih-item circle colored effect1",children:Object(u.jsxs)("a",{href:e,target:"#"===e?"":"_blank",rel:"noreferrer",children:[Object(u.jsx)("div",{class:"spinner"}),Object(u.jsx)("div",{class:"img",children:Object(u.jsx)("img",{src:this.props.img.src,alt:this.props.img.alt})}),Object(u.jsx)("div",{class:"info",children:Object(u.jsxs)("div",{class:"info-back",children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("p",{children:s})]})})]})}),Object(u.jsx)("span",{children:this.props.text})]})}}]),s}(c.a.Component)),N=(s(122),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("section",{className:"projects-container",children:[Object(u.jsxs)("div",{className:"projects-list",children:[Object(u.jsx)(w,{title:"Belgium Covid Tracker",githubProjectName:"alexandreHenrotte/belgium-covid-tracker",img:{src:"/my-resume-website/images/projects/belgium-covid-tracker.jpg",alt:"Belgium Covid Tracker Project"},text:Object(u.jsx)(m.a,{children:"projects.1.details"})}),Object(u.jsx)(w,{title:"SleepWell",githubProjectName:"alexandreHenrotte/SleepWell",img:{src:"/my-resume-website/images/projects/sleepwell.jpg",alt:"SleepWell Project"},text:Object(u.jsx)(m.a,{children:"projects.2.details"})}),Object(u.jsx)(w,{title:"PriceTracker (en cours)",img:{src:"/my-resume-website/images/projects/pricetracker.png",alt:"PriceTracker"},text:Object(u.jsx)(m.a,{children:"projects.3.details"})})]}),Object(u.jsx)("div",{class:"more-projects-container",children:Object(u.jsx)("a",{href:"https://github.com/alexandreHenrotte?tab=repositories",target:"_blank",rel:"noreferrer",children:Object(u.jsx)(m.a,{children:"projects.see-more-button"})})})]})}}]),s}(c.a.Component)),C=s(91),S=s(28),L=s(29),E=(s(124),s(92)),P=s.n(E),A=s(93),q=s(98),F=(s(132),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).handleChange=function(t){e.setState(Object(C.a)({},t.target.name,t.target.value))},e.handleForm=function(t){t.preventDefault(),""===e.state.name||""===e.state.mail||""===e.state.message?e.formNotValidError():e.state.captchaCompleted?(e.sendForm(),e.resetForm()):e.missingCaptchaError()},e.captchaCompleted=function(){e.setState({captchaCompleted:!0})},e.state={name:"",mail:"",message:"",captchaCompleted:!1},e.captchaRef=c.a.createRef(),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.textAreaAutoResize()}},{key:"textAreaAutoResize",value:function(){Object(A.$)("textarea").each((function(){this.setAttribute("style","height:"+this.scrollHeight+"px;overflow-y:hidden;")})).on("input",(function(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}))}},{key:"sendForm",value:function(){try{var e={name:this.state.name,email:this.state.mail,message:this.state.message};P.a.send("service_ce68fwy","template_hmc6s7q",e,"user_fkCDyFkZ6EkkLihUeGaew").then((function(e){console.log(e.text)})),this.successMessage()}catch(t){console.log(t),this.errorMessage()}}},{key:"successMessage",value:function(){L.b.info(Object(S.renderToString)(Object(u.jsx)(m.a,{children:"contact.pop-up.success"}))+" \ud83c\udf89",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},{key:"errorMessage",value:function(){L.b.error(Object(S.renderToString)(Object(u.jsx)(m.a,{children:"contact.pop-up.global-error"}))+" \ud83d\ude13",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},{key:"missingCaptchaError",value:function(){L.b.error(Object(S.renderToString)(Object(u.jsx)(m.a,{children:"contact.pop-up.captcha-error"})),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},{key:"formNotValidError",value:function(){L.b.error(Object(S.renderToString)(Object(u.jsx)(m.a,{children:"contact.pop-up.incomplete-form"}))+" \ud83d\ude15",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},{key:"resetForm",value:function(){this.setState({name:"",mail:"",message:"",captchaCompleted:!1}),this.captchaRef.current.reset()}},{key:"render",value:function(){return Object(u.jsxs)("section",{className:"contact-container",children:[Object(u.jsx)(L.a,{}),Object(u.jsxs)("div",{id:"contact-form",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(m.a,{children:"contact.contact-me"})}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",placeholder:Object(S.renderToString)(Object(u.jsx)(m.a,{children:"contact.name"})),name:"name",value:this.state.name,onChange:this.handleChange,autocomplete:"new-password"}),Object(u.jsx)("input",{type:"email",placeholder:"Mail",name:"mail",value:this.state.mail,onChange:this.handleChange,autocomplete:"new-password"}),Object(u.jsx)("textarea",{placeholder:"Message",name:"message",value:this.state.message,onChange:this.handleChange,autocomplete:"new-password"}),Object(u.jsx)("div",{id:"recaptcha-container",children:Object(u.jsx)(q.a,{ref:this.captchaRef,sitekey:"6Lfu36gbAAAAAHZUlw5qzizMjCujynRiJxHg5yOi",onChange:this.captchaCompleted})}),Object(u.jsx)("button",{onClick:this.handleForm,children:Object(u.jsx)(m.a,{children:"contact.send"})})]})]})]})}}]),s}(c.a.Component)),I=(s(133),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).loading=function(){e.state.level<100?e.setState({level:e.state.level+100}):(clearInterval(e.state.interval),e.loaded())},e.loaded=function(){document.documentElement.style.overflow="auto",document.body.scroll="yes",e.props.setLoaded()},e.state={interval:null,level:0},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),document.documentElement.style.overflow="hidden",document.body.scroll="no";var e=setInterval(this.loading,1e3);this.setState({interval:e})}},{key:"render",value:function(){return Object(u.jsx)("div",{id:"loading-container",children:Object(u.jsx)("img",{src:"/my-resume-website/animations/loading.svg",alt:"loading animation"})})}}]),s}(c.a.Component)),T=(s(134),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).setLoaded=function(){e.setState({loaded:!0})},e.state={loaded:!1},e}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setState({loaded:!1})}},{key:"render",value:function(){return Object(u.jsxs)("body",{id:"content",onAnimationEnd:this.onAnimationEnd,children:[!this.state.loaded&&Object(u.jsx)(I,{setLoaded:this.setLoaded}),Object(u.jsx)("div",{id:"page",className:this.state.loaded?"page-visible":"page-hided",children:this.props.children})]})}}]),s}(c.a.Component)),M=s(95),R=s.n(M),H=s(369),B=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).selectContent=function(){switch(n.state.currentContent){case"about-me":return Object(u.jsx)(p,{});case"skills":return Object(u.jsx)(v,{});case"experiences":return Object(u.jsx)(y,{});case"projects":return Object(u.jsx)(N,{});case"contact":return Object(u.jsx)(F,{})}},n.changeContent=function(e){n.setState({currentContent:e})},n.onLanguageChange=function(){n.forceUpdate()},n.state={currentContent:"about-me"},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsx)(R.a,{className:"main-particles",params:H}),Object(u.jsx)(O,{currentContent:this.state.currentContent,changeContent:this.changeContent,onLanguageChange:this.onLanguageChange}),Object(u.jsx)(T,{ref:this.contentRef,children:this.selectContent()})]})}}]),s}(c.a.Component),V=s(43),D=s(99),J=s(96),_=s(97),z=n.FR,W={en:{translation:J},fr:{translation:_}};g.a.use(D.a).use(V.d).init({resources:W,lng:z,keySeparator:".",interpolation:{escapeValue:!1}});g.a;r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root"))},96:function(e){e.exports=JSON.parse('{"common":{"translate-button":"EN"},"welcome-screen":{"sentences":{"1":"Love new technologies","2":"Curious and eager to learn","3":"Student in IT"}},"nav-bar":{"profil":"Profile","skills":"Skills","formation-experience":"Formation and experience","projects":"Projects","contact":"Contact"},"about-me":{"job":"IT student","age":"19 yearsold","description":"Passionate about computers since I was young, I am a person who is thirsty for knowledge and who never give up to achieve his goals.","languages":{"1":"French \u2013 native language","2":"English \u2013 B2 level","title":"Languages"},"interests":{"1":"Software and web development","2":"Video games","3":"Books","4":"Cinema","title":"Interests"},"soft-skills":{"1":"Passion","2":"Perseverance","3":"Curiosity","title":"Soft skills"}},"skills":{"programming":"Programming","database":"Database","version-control":"Version control"},"formation-experience":{"formation":{"1":{"title":"IT Bachelor, Computer Technology"},"2":{"title":"CESS + Qualification : IT Technician"},"title":"Formation"},"experience":{"1":{"title":"Computer network technician (student job)","details":"Installation of a new wireless network in several restaurants belonging to the domain of the Caves of Han. My main tasks were the following: install twisted pair cable connectors, configure switches and wireless access points, test wireless network coverage.","acquired":"Acquired : organization, meeting deadlines"},"2":{"title":"Computer network technician (internship)","details":"Installation of the wired network of a new building belonging to the ESA (European Space Agency). My main tasks were the following: install twisted pair cable connectors, mark every cable, test cable connectivity and performance.","acquired":"Acquired : patience, importance of details"},"title":"Experience"}},"projects":{"1":{"details":"Automated twitter bot that checks covid statistics in Belgium and put them on twitter every day."},"2":{"details":"Website that tells you when you should go sleep based on night cycles theory."},"3":{"details":"Website where users can follow different products available on the web and be alerted when prices drops."},"see-on-github":"See on Github","in-progress":"In progress","see-more-button":"See all my open-source projects (from small to big)"},"contact":{"contact-me":"Contact me","name":"Name","send":"Send","pop-up":{"success":"Message has been sent","global-error":"The message cannot be send","captcha-error":"Fill the captcha please","incomplete-form":"The form is not complete"}}}')},97:function(e){e.exports=JSON.parse('{"common":{"translate-button":"FR"},"welcome-screen":{"sentences":{"1":"Passion\xe9 d\'informatique","2":"Curieux et envieux d\'apprendre","3":"\xc9tudiant en informatique"}},"nav-bar":{"profil":"Profil","skills":"Comp\xe9tences","formation-experience":"Formation et exp\xe9rience","projects":"Projets","contact":"Contact"},"about-me":{"job":"D\xe9veloppeur junior","age":"19 ans","description":"Passionn\xe9 par l\'informatique depuis mon plus jeune \xe2ge, je suis une personne qui a soif de connaissance et qui ne l\xe2che rien pour atteindre ses objectifs","languages":{"1":"Fran\xe7ais \u2013 langue maternelle","2":"Anglais \u2013 niveau B2","title":"Langues"},"interests":{"1":"D\xe9veloppement (logiciel et web)","2":"Jeux vid\xe9o","3":"Livres","4":"Cin\xe9ma","title":"Centres d\'int\xe9r\xeats"},"soft-skills":{"1":"Passion","2":"Pers\xe9v\xe9rance","3":"Curiosit\xe9","title":"Soft skills"}},"skills":{"programming":"Programmation","database":"Base de donn\xe9es","version-control":"Gestion de versions"},"formation-experience":{"formation":{"1":{"title":"Bachelier en informatique et syst\xe8mes, orientation technologie de l\u2019informatique"},"2":{"title":"CESS + Qualification : technicien en informatique"},"title":"Formation"},"experience":{"1":{"title":"Technicien en r\xe9seau informatique (job \xe9tudiant)","details":"Installation d\'un nouveau r\xe9seau Wi-Fi dans plusieurs restaurants du domaine des grottes de Han.","acquired":"Acquis : organisation, respect des d\xe9lais"},"2":{"title":"Technicien en r\xe9seau informatique (stage)","details":"Installation du r\xe9seau filaire d\'un nouveau b\xe2timent de l\'ESA (European Space Agency).","acquired":"Acquis : patience, importance du d\xe9tail"},"title":"Exp\xe9rience"}},"projects":{"1":{"details":"Bot Twitter postant journali\xe8rement des statistiques sur l\'\xe9tat du Covid-19 en Belgique."},"2":{"details":"Site web indiquant les meilleures heures pour aller dormir en se basant sur les cycles du sommeil."},"3":{"details":"Site web permettant \xe0 l\'utilisateur de suivre des produits pr\xe9sents sur plusieurs sites web et de recevoir une alerte lorsque le prix descend."},"see-on-github":"Voir sur Github","in-progress":"En pr\xe9paration","see-more-button":"Voir tous mes projets open-source (petits et grands)"},"contact":{"contact-me":"Contactez-moi","name":"Nom","send":"Envoyer","pop-up":{"success":"Message envoy\xe9","global-error":"Le message n\'a pas pu \xeatre envoy\xe9","captcha-error":"Veuillez compl\xe9ter le captcha","incomplete-form":"Le formulaire de contact est incomplet"}}}')}},[[370,1,2]]]);
//# sourceMappingURL=main.a5c59f90.chunk.js.map