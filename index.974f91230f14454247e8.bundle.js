(self.webpackChunkthreescape=self.webpackChunkthreescape||[]).push([[826],{466:(n,e,r)=>{"use strict";r.d(e,{Z:()=>v});var t=r(645),o=r.n(t),i=r(667),s=r.n(i),a=r(85),c=o()((function(n){return n[1]})),l=s()(a);c.push([n.id,"@font-face {\r\n  font-family: Euclid;\r\n  src: url("+l+') format("woff");\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\ndiv {\r\n  font-family: Euclid;\r\n}\r\n',""]);const v=c},212:(n,e,r)=>{"use strict";var t=r(379),o=r.n(t),i=r(466);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var s=r(9),a=r(219),c=r(875),l=r(886);let v=200;const g={particlesData:[],positions:null,colors:null,particles:new s.u9r,pointCloud:new s.woe,particlePositions:null,linesMesh:null,group:new s.ZAu,uuids:[],uniforms:{},sizes:[]};function d(){let n=0,e=0,r=0;const t=.01*Date.now(),o=.5*(20+20*Math.sin(.1*t)),i=g.pointCloud.geometry;for(let n=0;n<v;n++)g.particlesData[n].numConnections=0;for(let t=0;t<v;t++){const s=g.particlesData[t];if(g.particlePositions[3*t]+=s.velocity.x,g.particlePositions[3*t+1]+=s.velocity.y,g.particlePositions[3*t+2]+=s.velocity.z,(g.particlePositions[3*t+1]<-400||g.particlePositions[3*t+1]>400)&&(s.velocity.y=-s.velocity.y),(g.particlePositions[3*t]<-400||g.particlePositions[3*t]>400)&&(s.velocity.x=-s.velocity.x),(g.particlePositions[3*t+2]<-400||g.particlePositions[3*t+2]>400)&&(s.velocity.z=-s.velocity.z),u.limitConnections&&s.numConnections>=u.maxConnections)continue;const{x:a,y:c,z:l}=D.camera.position,d=g.particlePositions[3*t]-a,p=g.particlePositions[3*t+1]-c,x=g.particlePositions[3*t+2]-l;Math.sqrt(d*d+p*p+x*x)<100&&i.attributes.size.array,i.attributes.size.array[t]=o+.1*t;for(let o=t+1;o<v;o++){const i=g.particlesData[o];if(u.limitConnections&&i.numConnections>=u.maxConnections)continue;const a=g.particlePositions[3*t]-g.particlePositions[3*o],c=g.particlePositions[3*t+1]-g.particlePositions[3*o+1],l=g.particlePositions[3*t+2]-g.particlePositions[3*o+2],v=Math.sqrt(a*a+c*c+l*l);if(v<u.minDistance){s.numConnections++,i.numConnections++;const a=1-v/u.minDistance;g.positions[n++]=g.particlePositions[3*t],g.positions[n++]=g.particlePositions[3*t+1],g.positions[n++]=g.particlePositions[3*t+2],g.positions[n++]=g.particlePositions[3*o],g.positions[n++]=g.particlePositions[3*o+1],g.positions[n++]=g.particlePositions[3*o+2],g.colors[e++]=a,g.colors[e++]=a,g.colors[e++]=a,g.colors[e++]=a,g.colors[e++]=a,g.colors[e++]=a,r++}}}const s=g.linesMesh.geometry;s.setDrawRange(0,2*r),s.attributes.position.needsUpdate=!0,s.attributes.color.needsUpdate=!0,i.attributes.position.needsUpdate=!0,i.attributes.size.needsUpdate=!0}const u={showDots:!0,showLines:!0,minDistance:150,limitConnections:!1,maxConnections:20,particleCount:500,resolution:!1};function p(){(function(){!function(){const{gui:n}=D;n.add(u,"showDots").onChange((function(n){g.pointCloud.visible=n})),n.add(u,"showLines").onChange((function(n){g.linesMesh.visible=n})),n.add(u,"minDistance",10,300),n.add(u,"maxConnections",0,30,1),n.add(u,"limitConnections"),n.add(u,"particleCount",0,1e3,1).onChange((function(n){v=parseInt(n),g.particles.setDrawRange(0,v)}))}(),g.positions=new Float32Array(3e6),g.colors=new Float32Array(3e6);const n=(new s.dpR).load(r(363));g.uniforms={pointTexture:{value:n},u_color:{value:new s.Pa4(1,0,0)}},n.flipY=!1,new s.jyz({uniforms:g.uniforms,vertexShader:r(403),fragmentShader:r(368),depthTest:!1,transparent:!0,alphaTest:0,opacity:0,vertexColors:!0}),new s.UY4({vertexColors:!0,color:16777215,size:30,blending:s.WMw,transparent:!0,sizeAttenuation:!1});const e=new s.jyz({fragmentShader:r(348),vertexShader:r(170),vertexColors:!0,blending:s.WMw});g.particlePositions=new Float32Array(3e3),g.sizes=[];for(let n=0;n<1e3;n++){const e=800*Math.random()-400,r=800*Math.random()-400,t=800*Math.random()-400;g.particlePositions[3*n]=e,g.particlePositions[3*n+1]=r,g.particlePositions[3*n+2]=t,g.colors[3*n]=Math.random(),g.colors[3*n+1]=Math.random(),g.colors[3*n+2]=Math.random(),g.particlesData.push({velocity:new s.Pa4(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1),numConnections:0}),g.sizes.push(50*Math.random())}g.particles.setDrawRange(0,v),g.particles.setAttribute("position",new s.TlE(g.particlePositions,3).setUsage(s.dj0)),g.particles.setAttribute("color",new s.TlE(g.colors,3).setUsage(s.dj0)),g.particles.setAttribute("size",new s.a$l(g.sizes,1).setUsage(s.dj0)),g.pointCloud=new s.woe(g.particles,e),g.group.add(g.pointCloud),g.uuids.push(g.pointCloud.uuid)})(),function(){const n=new s.u9r;n.setAttribute("position",new s.TlE(g.positions,3).setUsage(s.dj0)),n.setAttribute("color",new s.TlE(g.colors,3).setUsage(s.dj0)),n.computeBoundingSphere(),n.setDrawRange(0,0);const e=new s.nls({vertexColors:!0,blending:s.WMw,transparent:!0,linewidth:4});g.linesMesh=new s.ejS(n,e),g.group.add(g.linesMesh),g.uuids.push(g.linesMesh.uuid),D.group.add(g.group)}()}var x,f,m,y,z,P;function w(){Date.now(),m.uniforms.time.value+=.002}const h=[1,2,3].map((n=>r(356)(`./textures/dj${n}.png`)));let C=0;function _(){z.uniforms.time.value=C;const n=.5*(1+Math.sin(.1*C));z.uniforms.progress.value=n,C+=.05}const b={progress:0,intensity:0};function M(){const{gui:n}=D;n.add(b,"progress",0,1,.01).onChange((function(n){z.uniforms.progress.value=n})),n.add(b,"intensity",0,100,.1).onChange((function(n){z.uniforms.intensity.value=n}))}const D={container:null,stats:(0,a.Z)(),gui:new c.XS,scene:new s.xsS,camera:null,controls:null,group:new s.ZAu,renderer:new s.CP7({antialias:!0}),animations:[]},U={switch:!1};!function(){const n=document.createElement("div");n.id="root",document.body.appendChild(n)}(),function(n=!1,e=800,r=!1){D.container=document.getElementById("root");const t=window.innerWidth/window.innerHeight;if(D.camera=new s.cPb(45,t,1,4e3),D.camera.position.z=750,D.controls=new l.z(D.camera,D.container),D.controls.autoRotateSpeed=2,D.controls.maxDistance=3e3,D.scene.add(D.group),r?D.renderer.setPixelRatio(.7):D.renderer.setPixelRatio(window.devicePixelRatio),D.renderer.setSize(window.innerWidth,window.innerHeight),D.renderer.outputEncoding=s.knz,D.container.appendChild(D.renderer.domElement),window.addEventListener("resize",(function(){D.camera.updateProjectionMatrix(),D.renderer.setSize(window.innerWidth,window.innerHeight)}),!1),n){const n=new s.nvb(e,e,e),r=new s.vBJ;r.blending=s.WMw,r.color.setHex(16711680),r.transparent=!0;const t=new s.fQA(new s.Kj0(n,r));D.group.add(t)}}(!1,800),function n(){const{gui:e}=D;e.add(U,"switch").onChange((function(e){e?(D.gui.destroy(),D.gui=new c.XS,n(),p(),function(){const n=(new s.dpR).load(r(363));n.wrapS=s.rpg,n.wrapT=s.rpg,f=new s.Aip(150,150,150),new s.vBJ({color:16777215,transparent:!0}),m=new s.jyz({uniforms:{time:{value:0},sphereTexture:{value:n}},vertexShader:r(673),fragmentShader:r(387)}),x=new s.Kj0(f,m),D.scene.add(x)}(),D.animations=[w,d]):(D.gui.destroy(),D.gui=new c.XS,n(),g.group.remove(...g.group.children),D.scene.remove(x),D.animations=[_],M())}))}(),function(){const n=h.map((n=>(new s.dpR).load(n)));y=new s._12(2,2),(z=new s.jyz({uniforms:{time:{value:0},progress:{value:0},transition:{value:40},intensity:{value:10.3},texture1:{value:n[0]},texture2:{value:n[1]},displacement:{value:(new s.dpR).load(r(934))},resolution:{value:new s.Ltg}},vertexShader:r(314),fragmentShader:r(970),depthWrite:!1,depthTest:!1})).uniforms.resolution.value.x=window.innerWidth,z.uniforms.resolution.value.y=window.innerHeight,z.uniforms.resolution.value.z=1,z.uniforms.resolution.value.w=1,P=new s.Kj0(y,z),D.scene.add(P),M()}(),D.animations.push(_),function n(){D.animations.map((n=>n())),requestAnimationFrame(n),D.stats.update(),Date.now(),D.controls.update(),D.renderer.render(D.scene,D.camera)}()},348:n=>{n.exports="float circle(in vec2 _st, in float _radius) {\r\n    vec2 dist = _st - vec2(0.5);\r\n    return 1.-smoothstep(_radius - (_radius*0.01),\r\n                            _radius + (_radius*0.01),\r\n                            dot(dist,dist)*4.0);\r\n}\r\n\r\nvoid main() {\r\n    vec2 st = gl_PointCoord;\r\n    vec3 color = vec3(circle(st,0.9));\r\n    if (color.r > .0) {\r\n        gl_FragColor = vec4(color, .7);\r\n    } else {\r\n        discard;\r\n    }\r\n}\r\n"},170:n=>{n.exports="attribute float size;\r\nvoid main() {\r\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\r\n    gl_PointSize = size * ( 2500.0 / -mvPosition.z );\r\n\r\n    gl_Position = projectionMatrix * mvPosition;\r\n\r\n}"},368:n=>{n.exports="uniform sampler2D pointTexture;\r\nuniform vec3 u_color;\r\nvarying vec3 vColor;\r\nvarying vec2 vUv;\r\nvoid main() {\r\n    vec4 texture = texture2D(pointTexture ,  gl_PointCoord);\r\n    gl_FragColor = vec4(vColor,1.0) * vec4(1.0 - texture.r, 1.0 - texture.g, 1.0 - texture.b, 1.0);\r\n    gl_FragColor = texture;\r\n}\r\n"},387:n=>{n.exports="uniform sampler2D sphereTexture; \r\nvarying vec2 vUv;\r\nvarying float noise;\r\nvarying vec3 vNormal;\r\nvoid main() {\r\n\tvec2 uv = normalize( vNormal ).xy * 0.5 + 0.5;\r\n\t// vec4 texto = texture( sphereTexture, uv*40. );\r\n    float noiseColor = 1. - .4 * noise;\r\n    vec3 color = vec3(noiseColor);\r\n    // gl_FragColor = vec4( color.rgb, 1.0 ) * texture;\r\n    gl_FragColor = vec4(color, 1.0);\r\n}"},673:n=>{n.exports="// Include the Ashima code here!\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\nvarying float noise;\r\nuniform float time;\r\n  \r\n  vec3 mod289(vec3 x)\r\n{\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 mod289(vec4 x)\r\n{\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 permute(vec4 x)\r\n{\r\n  return mod289(((x*34.0)+1.0)*x);\r\n}\r\n\r\nvec4 taylorInvSqrt(vec4 r)\r\n{\r\n  return 1.79284291400159 - 0.85373472095314 * r;\r\n}\r\n\r\nvec3 fade(vec3 t) {\r\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\r\n}\r\n\r\n// Classic Perlin noise\r\nfloat cnoise(vec3 P)\r\n{\r\n  vec3 Pi0 = floor(P); // Integer part for indexing\r\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\r\n  Pi0 = mod289(Pi0);\r\n  Pi1 = mod289(Pi1);\r\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\r\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r\n  vec4 iz0 = Pi0.zzzz;\r\n  vec4 iz1 = Pi1.zzzz;\r\n\r\n  vec4 ixy = permute(permute(ix) + iy);\r\n  vec4 ixy0 = permute(ixy + iz0);\r\n  vec4 ixy1 = permute(ixy + iz1);\r\n\r\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\r\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r\n  gx0 = fract(gx0);\r\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r\n  vec4 sz0 = step(gz0, vec4(0.0));\r\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r\n\r\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\r\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r\n  gx1 = fract(gx1);\r\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r\n  vec4 sz1 = step(gz1, vec4(0.0));\r\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r\n\r\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r\n\r\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r\n  g000 *= norm0.x;\r\n  g010 *= norm0.y;\r\n  g100 *= norm0.z;\r\n  g110 *= norm0.w;\r\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r\n  g001 *= norm1.x;\r\n  g011 *= norm1.y;\r\n  g101 *= norm1.z;\r\n  g111 *= norm1.w;\r\n\r\n  float n000 = dot(g000, Pf0);\r\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r\n  float n111 = dot(g111, Pf1);\r\n\r\n  vec3 fade_xyz = fade(Pf0);\r\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r\n  return 2.2 * n_xyz;\r\n}\r\n\r\n// Classic Perlin noise, periodic variant\r\nfloat pnoise(vec3 P, vec3 rep)\r\n{\r\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\r\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\r\n  Pi0 = mod289(Pi0);\r\n  Pi1 = mod289(Pi1);\r\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\r\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r\n  vec4 iz0 = Pi0.zzzz;\r\n  vec4 iz1 = Pi1.zzzz;\r\n\r\n  vec4 ixy = permute(permute(ix) + iy);\r\n  vec4 ixy0 = permute(ixy + iz0);\r\n  vec4 ixy1 = permute(ixy + iz1);\r\n\r\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\r\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r\n  gx0 = fract(gx0);\r\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r\n  vec4 sz0 = step(gz0, vec4(0.0));\r\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r\n\r\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\r\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r\n  gx1 = fract(gx1);\r\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r\n  vec4 sz1 = step(gz1, vec4(0.0));\r\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r\n\r\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r\n\r\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r\n  g000 *= norm0.x;\r\n  g010 *= norm0.y;\r\n  g100 *= norm0.z;\r\n  g110 *= norm0.w;\r\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r\n  g001 *= norm1.x;\r\n  g011 *= norm1.y;\r\n  g101 *= norm1.z;\r\n  g111 *= norm1.w;\r\n\r\n  float n000 = dot(g000, Pf0);\r\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r\n  float n111 = dot(g111, Pf1);\r\n\r\n  vec3 fade_xyz = fade(Pf0);\r\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r\n  return 2.2 * n_xyz;\r\n}\r\n\r\nfloat turbulence( vec3 p ) {\r\n    float w = 100.0;\r\n    float t = -.5;\r\n    for (float f = 1.0 ; f <= 10.0 ; f++ ){\r\n        float power = pow( 2.0, f );\r\n        t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );\r\n    }\r\n    return t;\r\n}\r\n\r\nvoid main() {\r\n\r\n    vUv = uv;\r\n    vNormal = normal;\r\n    // add time to the noise parameters so it's animated\r\n    noise = 10.0 *  -.10 * turbulence( .5 * normal + time );\r\n    float b = 10.0 * pnoise( 0.05 * position + vec3( 2.0 * time ), vec3( 100.0 ) );\r\n    float displacement = - noise + b;\r\n    \r\n    vec3 newPosition = position + normal * displacement;\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\r\n\r\n}"},970:n=>{n.exports="uniform float time;\r\nuniform float progress;\r\nuniform float width;\r\nuniform float scaleX;\r\nuniform float scaleY;\r\nuniform float transition;\r\nuniform float radius;\r\nuniform float intensity;\r\nuniform sampler2D texture1;\r\nuniform sampler2D texture2;\r\nuniform sampler2D displacement;\r\nuniform vec4 resolution;\r\nvarying vec2 vUv;\r\n\r\nvoid main()\t{\r\n    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\r\n\r\n    vec4 d1 = texture2D(texture1, newUV);\r\n    vec4 d2 = texture2D(texture2, newUV);\r\n\r\n    float displace1 = (d1.r + d1.g + d1.b)*0.33;\r\n    float displace2 = (d2.r + d2.g + d2.b)*0.33;\r\n    \r\n    vec4 t1 = texture2D(texture1, vec2(newUV.x, newUV.y + progress * (displace2 * intensity)));\r\n    vec4 t2 = texture2D(texture2, vec2(newUV.x, newUV.y + (1.0 - progress) * (displace1 * intensity)));\r\n\r\n    gl_FragColor = mix(t1, t2, progress);\r\n\r\n}\r\n"},314:n=>{n.exports="varying vec2 vUv;\r\nvoid main() {\r\n    vUv = uv;\r\n    gl_Position = vec4(position, 1.0);\r\n}"},403:n=>{n.exports="attribute float size;\r\nvarying vec3 vColor;\r\nvarying vec2 vUv;\r\nvoid main() {\r\n    vUv = uv;\r\n    vColor = color;\r\n\r\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\r\n    gl_PointSize = size * ( 300.0 / -mvPosition.z );\r\n\r\n    gl_Position = projectionMatrix * mvPosition;\r\n\r\n}"},85:(n,e,r)=>{"use strict";n.exports=r.p+"727a249c9815fda17bf8.woff"},859:(n,e,r)=>{"use strict";n.exports=r.p+"0cbe7d345e07997594cb.png"},861:(n,e,r)=>{"use strict";n.exports=r.p+"d77cd4114b911168c3ac.png"},337:(n,e,r)=>{"use strict";n.exports=r.p+"0a2e7606d6e94c34de12.png"},241:(n,e,r)=>{"use strict";n.exports=r.p+"ae53f574e13a03189cf0.png"},363:(n,e,r)=>{"use strict";n.exports=r.p+"3c29d552d5cdd9229435.png"},934:(n,e,r)=>{"use strict";n.exports=r.p+"bbd4a52d8d00cd6ca9a2.jpg"},356:(n,e,r)=>{var t={"./textures/dj1.png":859,"./textures/dj2.png":861,"./textures/dj3.png":337,"./textures/dj4.png":241};function o(n){var e=i(n);return r(e)}function i(n){if(!r.o(t,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t[n]}o.keys=function(){return Object.keys(t)},o.resolve=i,n.exports=o,o.id=356}},0,[[212,666,216]]]);