(this["webpackJsonpscah-app"]=this["webpackJsonpscah-app"]||[]).push([[0],{30:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(24),r=c.n(a),i=(c(30),c(14)),o=c(5),l=c(1),d=function(){return Object(l.jsxs)("div",{className:"flex wrap2",children:[Object(l.jsx)(i.b,{to:"/",style:{textDecoration:"none"},children:Object(l.jsx)("h3",{className:"bars",children:"Home Page"})}),Object(l.jsx)(i.b,{to:"/order",style:{textDecoration:"none"},children:Object(l.jsx)("h3",{className:"bars",children:"Order Online"})})]})},j=c.p+"static/media/HomePic.41dd5c45.png",h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"flex wrap1 ",style:{paddingTop:"7vh"},children:[Object(l.jsx)("h2",{children:Object(l.jsx)("span",{children:"Safety Precautions"})}),Object(l.jsxs)("h3",{style:{padding:"3vw",textAlign:"center"},children:["The pandemic is not gone yet. As we are under the age of 12, we have not recived the COVID-19 vaccine. To ensure our own safety we will be wearing masks and gloves, and will use hand sanitizer. We will have a money jar placed at a safe point. As of right now we only take cash. We would also like it if you put your money in a ziplock bag if possible and bring exact change. We also ask that you stay a safe distance away, perferably 6 feet away. ",Object(l.jsx)("h1",{style:{padding:"1.5vw"},children:"Thank you for your understanding"})]})]})})},b=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"flex wrap1",children:[Object(l.jsx)("h1",{style:{paddingTop:"10vh",color:"purple",textAlign:"center"},children:"At Home Snow Cones"}),Object(l.jsx)("img",{src:j,alt:"pic"}),Object(l.jsxs)("h3",{style:{paddingLeft:"15vw",paddingRight:"15vw",textAlign:"center"},children:["It's summer and it's a hot one, so Om and Luke have started a snow cone business! Go ahead and make your way over to ",Object(l.jsx)("div",{onClick:function(){window.open("https://www.google.com/maps/search/1235%20Brookdale%20Ave","_blank")},style:{color:"purple",textDecoration:"underline"},children:"1235 Brookdale Ave, Mountain View, CA"})," or go ahead and place an online order ",Object(l.jsx)(i.b,{to:"/order",style:{color:"purple"},children:"here"}),". We take venmo, cashApp, and cash! Feel free to call in at (650)690-0235 for more information."]})]}),Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"flex wrap1",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("span",{children:"Hours"})}),Object(l.jsx)("h1",{style:{paddingTop:"7vh",paddingLeft:"15vw",paddingRight:"15vw",textAlign:"center"},children:"Grand Opening on the 31st of July! Come check us out!"}),Object(l.jsx)("h3",{style:{padding:"5vh 15vw 5vh 15vw",textAlign:"center"},children:"Open for the rest of the week during 1pm to 4pm PST "})]})]})},p=c(12),m=c(23);c(43),c(40);m.a.initializeApp({apiKey:"AIzaSyBd3Xm8UYrtEIDroBz2iD94S_hDvWIEbhU",authDomain:"athomesnowcones.firebaseapp.com",projectId:"athomesnowcones",storageBucket:"athomesnowcones.appspot.com",messagingSenderId:"985226986143",appId:"1:985226986143:web:3b9a32896e64c2758f98aa",measurementId:"G-HB3N8SKQVK"});var u=m.a,x=function(){var e=u.firestore(),t=Object(n.useState)(0),c=Object(p.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){e.collection("ordernumber").doc("num").onSnapshot((function(e){a(e.data().ordernum)}))}),[]);var r=Object(n.useState)(0),i=Object(p.a)(r,2),o=i[0],d=i[1],j=Object(n.useState)(0),h=Object(p.a)(j,2),b=h[0],m=h[1],x=Object(n.useState)(0),O=Object(p.a)(x,2),v=O[0],w=O[1],g=Object(n.useState)(0),f=Object(p.a)(g,2),y=f[0],N=f[1],k=Object(n.useState)(0),C=Object(p.a)(k,2),S=C[0],A=C[1],I=Object(n.useState)(0),T=Object(p.a)(I,2),P=T[0],G=T[1],B=Object(n.useState)(0),M=Object(p.a)(B,2),D=M[0],$=M[1],z=Object(n.useState)(null),W=Object(p.a)(z,2),E=W[0],H=W[1];return Object(l.jsxs)("div",{className:"flex wrap1",children:[Object(l.jsx)("h3",{style:{marginTop:"3vw"},children:"Name for Order: "}),Object(l.jsx)("input",{placeholder:"John Doe",type:"text",style:{marginTop:"1vw"},onChange:function(e){H(e.target.value)}}),Object(l.jsxs)("div",{className:"flex wrap2",style:{padding:"1vw"},children:[Object(l.jsxs)("div",{className:"flex wrap1",style:{padding:"2vw"},children:[Object(l.jsx)("h3",{children:"Pina Colata"}),Object(l.jsx)("img",{className:"itemIMG",alt:"photo1",src:"https://media-cdn.tripadvisor.com/media/photo-s/10/73/d9/c6/adult-shave-ice-pina.jpg"}),Object(l.jsx)("h3",{children:"Price: $3.00"}),Object(l.jsxs)("div",{className:"flex wrap2",children:[Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){o>0&&d(o-1)},children:"-"}),Object(l.jsx)("h3",{children:o}),Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){return d(o+1)},children:"+"})]})]}),Object(l.jsxs)("div",{className:"flex wrap1",style:{padding:"2vw"},children:[Object(l.jsx)("h3",{children:"Blue Raspberry"}),Object(l.jsx)("img",{className:"itemIMG",alt:"photo2",src:"https://media-cdn.tripadvisor.com/media/photo-s/0e/86/21/d7/blue-raspberry-and-coconut.jpg"}),Object(l.jsx)("h3",{children:"Price: $3.00"}),Object(l.jsxs)("div",{className:"flex wrap2",children:[Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){b>0&&m(b-1)},children:"-"}),Object(l.jsx)("h3",{children:b}),Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){return m(b+1)},children:"+"})]})]}),Object(l.jsxs)("div",{className:"flex wrap1",style:{padding:"2vw"},children:[Object(l.jsx)("h3",{children:"Lemon-Lime"}),Object(l.jsx)("img",{className:"itemIMG",alt:"photo3",src:"https://media-cdn.tripadvisor.com/media/photo-s/11/85/27/e8/small-green-river-and.jpg"}),Object(l.jsx)("h3",{children:"Price: $3.00"}),Object(l.jsxs)("div",{className:"flex wrap2",children:[Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){v>0&&w(v-1)},children:"-"}),Object(l.jsx)("h3",{children:v}),Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){return w(v+1)},children:"+"})]})]}),Object(l.jsxs)("div",{className:"flex wrap1",style:{padding:"2vw"},children:[Object(l.jsx)("h3",{children:"Wild Cherry"}),Object(l.jsx)("img",{className:"itemIMG",alt:"photo4",src:"https://media-cdn.tripadvisor.com/media/photo-s/09/3f/b1/83/photo0jpg.jpg"}),Object(l.jsx)("h3",{children:"Price: $3.00"}),Object(l.jsxs)("div",{className:"flex wrap2",children:[Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){y>0&&N(y-1)},children:"-"}),Object(l.jsx)("h3",{children:y}),Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){return N(y+1)},children:"+"})]})]}),Object(l.jsxs)("div",{className:"flex wrap1",style:{padding:"2vw"},children:[Object(l.jsx)("h3",{children:"Tiger's Blood"}),Object(l.jsx)("img",{className:"itemIMG",alt:"photo5",src:"https://www.mynameissnickerdoodle.com/wp-content/uploads/2020/07/tigers-blood-snow-cone-syrup-8.jpg"}),Object(l.jsx)("h3",{children:"Price: $3.00"}),Object(l.jsxs)("div",{className:"flex wrap2",children:[Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){S>0&&A(S-1)},children:"-"}),Object(l.jsx)("h3",{children:S}),Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){return A(S+1)},children:"+"})]})]}),Object(l.jsxs)("div",{className:"flex wrap1",style:{padding:"2vw"},children:[Object(l.jsx)("h3",{children:"Grape"}),Object(l.jsx)("img",{className:"itemIMG",alt:"photo6",src:"https://media-cdn.tripadvisor.com/media/photo-s/1b/d0/e1/25/regular-sized-grape-hawaiian.jpg"}),Object(l.jsx)("h3",{children:"Price: $3.00"}),Object(l.jsxs)("div",{className:"flex wrap2",children:[Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){P>0&&G(P-1)},children:"-"}),Object(l.jsx)("h3",{children:P}),Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){return G(P+1)},children:"+"})]})]}),Object(l.jsxs)("div",{className:"flex wrap1",style:{padding:"2vw"},children:[Object(l.jsx)("h3",{children:"Rainbow"}),Object(l.jsx)("img",{className:"itemIMG",alt:"photo7",src:"https://media-cdn.tripadvisor.com/media/photo-s/08/f3/02/a0/peace-love-shave-ice.jpg"}),Object(l.jsx)("h3",{children:"Price: $3.00"}),Object(l.jsxs)("div",{className:"flex wrap2",children:[Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){D>0&&$(D-1)},children:"-"}),Object(l.jsx)("h3",{children:D}),Object(l.jsx)("button",{style:{margin:"0.5vw"},onClick:function(){return $(D+1)},children:"+"})]})]})]}),Object(l.jsxs)("h1",{children:["Total = $",3*(o+b+v+y+S+P+D)]}),Object(l.jsx)("button",{className:"fav",onClick:function(){return function(){var t=3*(o+b+v+y+S+P+D);if(t>0){var c=s+1;e.collection("ordernumber").doc("num").set({ordernum:c}),e.collection("orders").add({OrderName:E,pinaNum:o,raspberryNum:b,limeNum:v,cherryNum:y,bloodNum:S,grapeNum:P,bowNum:D,total:t}).then((function(e){alert("Submitted order number of: "+s+" and a price of $"+t+". Come to 1235 Brookdale Ave to pick up your order. To cancel the order, call (650)690-0235"),console.log(E)}))}else alert("You cannot order nothing! Click the plus button under the photos to choose")}()},style:{margin:"2vw"},children:"Order"})]})},O=function(){var e=u.firestore(),t=Object(n.useState)(0),c=Object(p.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){e.collection("ordernumber").doc("num").onSnapshot((function(e){a(e.data().ordernum)}))}),[]);var r=function(){return Object(l.jsxs)("div",{className:"flex wrap1",children:[Object(l.jsx)("h1",{style:{paddingTop:"3vh",color:"purple"},children:"Menu"}),Object(l.jsxs)("h3",{children:["Order Number: ",s]}),Object(l.jsx)(x,{})]})};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r,{})})};var v=function(){return Object(l.jsx)("div",{className:"",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(b,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/order",children:Object(l.jsx)(O,{})})]}),Object(l.jsxs)("footer",{children:[Object(l.jsx)("h2",{children:Object(l.jsx)("span",{onClick:function(){window.open("https://github.com/Ashwin-T","_blank")},children:"Coded by Ashwin Talwalkar"})}),Object(l.jsx)("h3",{style:{padding:"0"},children:"v1.15"})]})]})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.45265ebf.chunk.js.map